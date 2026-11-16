# TéléNoël — site vitrine

Site statique existant : HTML et CSS intégrés, aucun build ni JavaScript nécessaire au téléchargement. Les sections, les ancres historiques et les pages légales sont conservées.

## Tester localement

Depuis la racine du portfolio :

```sh
python3 -m http.server 8000
```

Ouvrir http://localhost:8000/telenoel/. Vérifier les deux liens sur un téléphone, y compris depuis les navigateurs intégrés TikTok, Instagram et Facebook : leur capacité à ouvrir les stores dépend de l’application hôte. Aucun transfert automatique ni intermédiaire n’est ajouté.

Validation HTML5 et liens internes (outil existant, dépendance de développement uniquement) :

```sh
python3 -m venv /tmp/telenoel-validation
/tmp/telenoel-validation/bin/pip install html5lib
/tmp/telenoel-validation/bin/python scripts/check-telenoel.py
/tmp/telenoel-validation/bin/python scripts/check-telenoel.py --release
```

Le contrôle `--release` signale les commentaires `FINALISATION REQUISE` préexistants des documents légaux. Les résoudre sur le fond avant publication ; ne pas supprimer les marqueurs pour contourner ce contrôle.

## Assets et référencement

- `assets/app-store-fr.svg` : badge noir français Apple, téléchargé sans retouche depuis https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/fr-fr?releaseDate=1464739200.
- `assets/google-play-fr.png` : badge français Google, téléchargé sans retouche depuis https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png.
- `assets/telenoel-icon.png` : version 128 × 128 du logo existant `images/app-icon.png`, pour limiter le poids de la navigation.
- Open Graph et Twitter/X utilisent le logo original, carré 1024 × 1024, à son URL existante. La carte Twitter `summary` correspond à ce format.
- Badges : proportions conservées, taille visible d’au moins 40 px, espaces de protection, Apple en premier. Un seul badge Apple sur la page ; la section basse réutilise des liens textuels.
- Références : https://developer.apple.com/app-store/marketing/guidelines/ et https://partnermarketinghub.withgoogle.com/brands/google-play/google-play/lockups-icons-badges/.
- Canonique conservée : https://benjamingesland.dev/telenoel/ ; données structurées `SoftwareApplication` sans avis ou notes inventés.

## Déployer manuellement, après validation

Aucun déploiement, commit ou push n’est effectué dans cette mission. L’audit du dépôt indique qu’un push peut déclencher automatiquement un déploiement Hostinger : ne pousser qu’après autorisation.

1. Sauvegarder la version distante et vérifier le dossier public Hostinger.
2. Téléverser `telenoel/assets/`, puis `telenoel/index.html` aux mêmes chemins. Conserver `images/app-icon.png`, le favicon et toutes les pages légales existantes. Ne pas publier les scripts de contrôle, rapports internes ou ce README.
3. Contrôler https://benjamingesland.dev/telenoel/, les images, les deux stores et les liens légaux en production.
4. Actualiser le cache d’aperçu Facebook avec le Sharing Debugger, puis vérifier le partage social. Tester le lien de bio TikTok sur iOS et Android réels.

## Vérifications effectuées le 16 novembre 2026

- Validateur existant étendu à l’accueil : HTML5, langue, titre principal, IDs, fichiers et ancres internes valides sur les cinq pages contrôlées.
- `git diff --check` : succès.
- Liens Apple et Google : HTTP 200, fiches TéléNoël ; quatre boutons avec les URL définitives exactes.
- Chrome local via Playwright : 320×568, 360×640, 375×667, 390×844, 768×1024 et 1440×900 ; aucun débordement horizontal, deux badges entièrement visibles dans le premier écran, images chargées. Captures mobile et ordinateur inspectées.
- Navigation clavier, lien d’évitement, ancre de découverte, accès aux trois pages légales et préférence de réduction des animations vérifiés.
- JSON-LD valide ; aucune erreur JavaScript. Seule requête manquante observée : `/favicon.ico` demandé automatiquement par les pages légales existantes, sans rapport avec les téléchargements. L’accueil utilise le favicon SVG existant et ne présente aucune ressource manquante.
- `--release` reste en échec sur les quatre documents légaux déjà marqués `FINALISATION REQUISE`.
- Pas de mesure Lighthouse ni de test Safari/iOS ou navigateur intégré sur appareil réel ; pas de garantie de taux de conversion.
