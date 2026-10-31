"""HTML5/link audit. Requires html5lib. --release also rejects unresolved editorial gaps."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
import html5lib
ROOT = Path(__file__).resolve().parents[1]
files = [ROOT / 'mentions-legales.html', *sorted((ROOT / 'telenoel').glob('*/index.html'))]
errors = []
external = set()
for path in files:
    source = path.read_text()
    parser = html5lib.HTMLParser(namespaceHTMLElements=False)
    doc = parser.parse(source)
    errors.extend(f'{path.relative_to(ROOT)}: HTML {e}' for e in parser.errors)
    ids = [e.get('id') for e in doc.iter() if e.get('id')]
    if len(ids) != len(set(ids)): errors.append(f'{path}: duplicate IDs')
    if doc.get('lang') != 'fr': errors.append(f'{path}: language')
    if len(doc.findall('.//h1')) != 1: errors.append(f'{path}: h1')
    for el in doc.iter():
        for attr in ('href', 'src'):
            value = el.get(attr)
            if not value: continue
            u = urlsplit(value)
            if u.scheme in ('https', 'http'):
                external.add(value); continue
            if u.scheme: continue
            target = (ROOT / unquote(u.path).lstrip('/') if u.path.startswith('/') else path.parent / unquote(u.path)) if u.path else path
            if target.is_dir(): target /= 'index.html'
            if not target.is_file(): errors.append(f'{path}: missing {value}'); continue
            if u.fragment and target.suffix == '.html':
                other = html5lib.parse(target.read_text(), namespaceHTMLElements=False)
                if not any(e.get('id') == unquote(u.fragment) for e in other.iter()): errors.append(f'{path}: missing anchor {value}')
    if '--release' in sys.argv and 'FINALISATION REQUISE' in source:
        errors.append(f'{path.relative_to(ROOT)}: informations obligatoires encore à compléter — publication bloquée')
    print(f'Checked {path.relative_to(ROOT)}')
if '--links' in sys.argv:
    print('\n'.join(sorted(external)))
print('\n'.join(errors) if errors else 'PASS: HTML5, IDs, langue, h1, fichiers et ancres internes')
sys.exit(bool(errors))
