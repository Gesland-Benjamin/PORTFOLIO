# Audit TéléNoël — 31 octobre 2026

**État : corrections locales et dossier de finalisation préparés, publication toujours bloquée. Aucun build, déploiement, push, modification mobile/backend, secret lu ou contrat signé.** Les commentaires `FINALISATION REQUISE` conservent les inconnues. Leur retrait doit suivre leur résolution effective.

La [matrice RGPD pour validation](MATRICE-RGPD-TELENOEL.md) intègre les versions, l’audience et les paramètres RevenueCat déclarés dans le dernier message. Elle distingue les constats des décisions et des durées encore inconnues.

Le [dossier juridique détaillé](DOSSIER-JURIDIQUE-TELENOEL.md) contient les preuves, sources officielles, la matrice RGPD, les documents des prestataires, les réglages de consoles à confirmer et l’inventaire des neuf logos. Il remplace les conclusions devenues incomplètes du premier audit.

## A. Vérifié et intégré

- API officielle Recherche d’entreprises : BENJAMIN GESLAND, EI active, SIREN 845 277 417, SIRET 845 277 417 00026, adresse principale corroborée. Régime micro déclaré par l’éditeur, non déduit du registre.
- Réponse de l’éditeur : **845 277 417 R.C.S. Bernay**, complément **APPT 4 HLM LE CROTOY**, activité déclarée « Achat et revente en ligne de vêtements, chaussures et accessoires ». RCS et complément intégrés aux mentions ; adresse complétée aussi dans la politique. Pas d’immatriculation RNE supplémentaire inventée.
- Facture Hostinger confirmée par l’éditeur : **Hostinger International Ltd.**, 61 Lordou Vironos Street, 6023 Larnaca, Chypre ; TVA hébergeur **CY10301365E**. Société et adresse corroborées par les conditions officielles. Le numéro TVA de l’hébergeur est distinct de celui de Benjamin.
- Téléphone **+370 645 03378** retrouvé pour cette même entité dans le [registre officiel RIPE NCC](https://www.ripe.net/membership/member-support/list-of-members/cy/hosting/), intégré avec attribution. Ce n’est pas une promesse d’assistance téléphonique ; aucun appel passé.
- Captures de console rapportées par l’éditeur : Railway **Hobby**, API/collecteur/PostgreSQL **US West, Californie, une réplique chacun**. Intégré. Aucun accès direct de l’assistant à la console.
- **Sept jours d’historique des logs**, distincts d’une garantie d’effacement définitif. **Aucune sauvegarde de volume PostgreSQL présente dans Backups**, selon l’éditeur ; la console demande Pro pour créer de nouvelles sauvegardes. Ne permet pas d’affirmer absence de toute copie ailleurs.
- API HTTPS configurée dans les profils EAS examinés ; requête publique `/api/v1/health` réussie : HTTP 200, `status:ok`. Ni région ni binaire distribué ne sont prouvés par ce test.
- Lecture ciblée du backend désormais effectuée : limiteur sur adresse du pair réseau, fenêtre 60 secondes et nettoyage à la requête suivante ; événements techniques/codes d’erreur. Texte réintroduit avec limites ; aucune durée de journaux déduite du compteur.
- Comparaison UMP/ATT/NPA iOS/Android confirmée dans le mobile en lecture seule. Précisions ajoutées : RevenueCat initialisé lorsque configuré/disponible ; champs de notes/favoris ne promettent pas une fonction exposée dans l’interface.
- Aucun usage actif TMDB identifié ; fonctions backend images désactivées. XML TV Fr et attribution conservés, sans étendre l’autorisation aux images tierces. Aucun streaming/replay ou compte TéléNoël ajouté.

Les vérifications publiques et de code sont distinguées des informations communiquées par l’éditeur dans le dossier. Aucun document fiscal, facture ou capture non joint n’est présenté comme directement inspecté.

## B. Non applicable et justification

- ATT sur Android : mécanisme Apple ; UMP reste pertinent.
- Suppression de compte TéléNoël, synchronisation distante des listes, vidéo/streaming/replay et push distant : aucun parcours correspondant dans le code examiné.
- Attribution TMDB comme source active : non applicable aux parcours examinés, sans conclusion sur d’anciens contenus de bases non inspectées.
- **DPO : obligation non établie, pas dispense automatique.** EI privée et aucun traitement sensible/pénal de base identifié ; audience et suivi publicitaire à évaluer selon l’article 37. Contact RGPD déjà indiqué.
- TVA : **non déterminée**. Le statut auto-entrepreneur et la réponse « je pense » ne prouvent pas la franchise ou l’absence de numéro intracommunautaire.

## C. À confirmer

1. Situation fiscale TVA et numéro éventuel ; déclaration de l’activité de développement/édition en complément de l’activité commerciale communiquée.
2. DPO désigné ou non, classification officielle et volume d’audience. Grand public sans ciblage spécifique des enfants désormais confirmé.
3. Bases candidates et critères de conservation de la matrice : catalogue, local, rappels, publicité, preuve de choix, achats, sécurité, demandes RGPD, pages web.
4. Contrats réellement applicables : notamment exécution du DPA Railway, conditions RevenueCat/Hostinger/Google et mécanisme de transfert réellement retenu. Les CCT disponibles publiquement ne sont pas annoncées comme signées. Aucun DPF présumé.
5. Catégories de logs, purge réelle, CDN/exports et autres sauvegardes hors Backups, journaux et localisation web Hostinger.
6. Correspondance des builds déclarés avec le code audité ; messages UMP/IDFA publiés et associés, fournisseurs/médiation, fonctions publicitaires, intégrations RevenueCat et déclarations des boutiques. iOS 1.0.0 build 14 téléversé mais non soumis à App Review ; Android 1.0.1/code 2 en test interne, sans production confirmée.
7. Droits des neuf PNG : provenance technique documentée dans l’[archive des preuves techniques](/Users/ben/Developer/telenoel/docs/legal/logo-evidence/README.md). Sept fiches déclarent PD-textlogo et deux CC BY-SA 4.0. Restent la capacité de Louitcho à concéder les droits TFX/TF1 Séries Films, les conditions de licence, la variante 6ter, la portée des déclarations PD-textlogo et l’usage des neuf marques. Aucune autorisation individuelle des chaînes produite ; crédits ≠ validation juridique. Provenance des illustrations décoratives également à établir.

## D. Questions minimales restantes

- Quelle situation TVA et quel éventuel numéro ton espace professionnel/SIE confirment-ils ? L’activité de développement/édition est-elle déclarée ?
- DPO désigné ou non, classification officielle/volume d’audience et réglages publicitaires effectivement actifs pour les builds communiqués ?
- Quels contrats/DPA sont exécutés et quels journaux, purges, exports/CDN/copies hors Backups existent ? Aucun secret nécessaire.
- Quel fondement juridique retenir pour les logos dont la provenance technique est désormais documentée, notamment TFX, TF1 Séries Films et 6ter ? Après ces réponses, valider en une revue les bases et critères de conservation proposés dans le dossier.

RCS, adresse, entité Hostinger, plan et régions Railway ne sont plus redemandés. Le téléphone Hostinger est désormais sourcé dans RIPE.

## E. Historique des fichiers modifiés

| Fichier | Résultat |
| --- | --- |
| `telenoel/confidentialite/index.html` | Politique corrigée, adresse complète, réseau/API, SDK et données locales précisés, région et exploitation Railway confirmées, inconnues conservées. |
| `telenoel/mentions-legales/index.html` | Mentions TéléNoël : RCS, adresse, Hostinger contractuel, TVA hébergeur et téléphone sourcé, région des trois services Railway. |
| `telenoel/sources/index.html` | Attribution XML TV Fr distincte des logos, provenance Commons, indépendance et crédits ; blocage des droits non résolus maintenu. |
| `mentions-legales.html` | Mentions portfolio cohérentes avec RCS/adresse/Hostinger ; liens TéléNoël conservés. |
| `MATRICE-RGPD-TELENOEL.md` | Matrice dédiée : bases candidates, conservation constatée/proposée, preuves et décisions attendues ; état de distribution déclaré. |
| `DOSSIER-JURIDIQUE-TELENOEL.md` | Nouveau : matrice, inventaire, analyses de contrats, preuves et liste des consoles. |
| `AUDIT-TELENOEL.md` | Rapport réécrit selon l’état final et les nouvelles confirmations. |

`scripts/check-telenoel.py`, créé lors du premier audit, est inchangé pendant cette reprise. Aucun fichier du mobile ni du backend modifié.

## F. Tests antérieurs (avant la mise à jour des crédits)

- `/tmp/telenoel-audit-venv/bin/python scripts/check-telenoel.py` : **code 0**, quatre HTML valides selon html5lib, langue fr, un h1, IDs uniques, liens de fichiers et ancres internes valides.
- Même commande avec `--release` : **code 1 attendu**, quatre documents encore bloqués. La portée couvre maintenant explicitement les inconnues des mentions portfolio et les preuves des logos, en plus de la politique et des mentions TéléNoël. Ce contrôle local n’empêche pas un téléversement manuel.
- **14 destinations HTTPS externes : HTTP 200** après redirections, y compris nouveaux liens Hostinger DPA, RIPE et App Store.
- API publique HTTPS : HTTP 200, `status:ok`.
- `git diff --check` : succès.
- Aucun build exécuté, aucun test mobile exécuté. Aucun test visuel navigateur lors de cette mission. CSS, responsive, focus, lien d’évitement, titres, canoniques et URLs préservés ; la politique `noindex, nofollow` existante reste inchangée intentionnellement. Cette vérification ne constitue pas un audit complet d’accessibilité.

Reproduction : environnement Python temporaire avec `html5lib`, puis `python scripts/check-telenoel.py` et `python scripts/check-telenoel.py --release`. Le second doit rester en échec tant que les informations ne sont pas réellement complétées, et pas simplement parce qu’un commentaire a été supprimé.

## G. Conditions avant déploiement

Site statique, aucune compilation nécessaire. Aucun accès Hostinger utilisé, aucune archive prête à publier produite.

1. Résoudre les points C, intégrer les bases et durées effectivement retenues ; vérifier cohérence avec builds et consoles, ainsi que les preuves de logos. Les documents officiels seuls ne prouvent pas la configuration ni l’exécution d’un contrat du compte.
2. Retirer chaque `FINALISATION REQUISE` seulement après résolution, actualiser la date au jour réel ; réussir HTML, liens et `--release`. Vérifier rendu à 320/375 px et sur ordinateur, zoom 200 %, clavier, focus et impression.
3. Obtenir l’autorisation explicite de déployer et confirmer le document root Hostinger. Aucune autorisation de publication n’a été donnée dans cette mission.
4. Sauvegarder les versions distantes ; publier les nouveaux HTML avant les pages qui les lient, aux mêmes chemins. Ne pas téléverser les rapports, la matrice, les scripts, `.git` ou fichiers du mobile. Conserver CSS/favicon existants du portfolio ; CSS TéléNoël intégré aux pages.
5. Purger le cache si nécessaire. Retour arrière : restaurer les HTML existants sauvegardés ; retirer les nouvelles pages seulement si elles ne sont pas déjà référencées ailleurs.

## Contrôles post-publication prévus

- HTTP 200/HTTPS/UTF-8 et contenu actuel aux trois URLs `/telenoel/confidentialite/index.html`, `/telenoel/mentions-legales/index.html`, `/telenoel/sources/index.html` et à `/mentions-legales.html`.
- Date exacte, aucune mention provisoire ni commentaire de blocage, canoniques/robots intentionnels ; navigation, ancres et liens externes.
- Ouverture depuis le mobile et cohérence des URL des boutiques, sans les modifier automatiquement.
- Rendu responsive/clavier/zoom ; vérifier séparément réception des contacts, sans message envoyé automatiquement.
- Sur les builds concernés : acceptation/refus/retrait UMP, états ATT, personnalisation conditionnelle, achat/restauration/bannières et rappels. Ces contrôles ne sont pas couverts par les tests HTML.

## Mise à jour locale des crédits — 31 octobre 2026

Fichiers modifiés pendant cette intervention uniquement : `telenoel/sources/index.html`, `telenoel/mentions-legales/index.html`, `AUDIT-TELENOEL.md` et `DOSSIER-JURIDIQUE-TELENOEL.md`. Les autres modifications historiques ci-dessus ne sont pas renouvelées.

L’[archive des preuves techniques](/Users/ben/Developer/telenoel/docs/legal/logo-evidence/README.md) est référencée sans modification. Les neuf fiches Commons et les deux liens Creative Commons sont ajoutés. La déclaration générale « libres de droits » est retirée. Les notices TFX et TF1 Séries Films précisent Louitcho comme auteur déclaré, CC BY-SA 4.0 et les conversions JPEG → PNG ; aucune qualité de titulaire vérifié ne lui est attribuée. L’indépendance est formulée de manière identique dans les deux pages. `#logos` et les URLs restent inchangés ; `#credits-logos` est ajouté à la page existante.

Les commentaires `FINALISATION REQUISE` restent actifs. La conservation des neuf assets et les attributions ne valent pas autorisation juridique. Le dossier n’est pas entièrement validé. Aucune modification mobile, image, configuration, commit, push, build ou publication.

### Contrôles de cette mise à jour

- `python scripts/check-telenoel.py` avec `/tmp/telenoel-audit-venv/bin/python` : succès sur les quatre HTML, IDs, langue, titres et liens/ancres internes, dont `#logos` et `#credits-logos`.
- `python scripts/check-telenoel.py --release` : échec attendu sur les quatre documents comportant `FINALISATION REQUISE`. Aucun contrôle contourné.
- Liens HTTPS des deux pages modifiées vérifiés par GET avec `curl -L` : **15 destinations externes HTTP 200**, dont les neuf fiches Commons et les deux liens Creative Commons. Les deux URL canoniques `https://benjamingesland.dev/telenoel/sources/index.html` et `https://benjamingesland.dev/telenoel/mentions-legales/index.html` répondent **404 en production** ; fichiers locaux présents et liens internes valides. À contrôler après publication autorisée. Une première tentative Python urllib n’a pas fourni de résultat exploitable dans le délai de vérification ; les résultats HTTP rapportés sont ceux de curl.
- Chrome headless via Playwright, fichiers locaux : aucun débordement horizontal à 320, 375 et 1280 px sur les deux pages ; liens avec libellés, lien d’évitement accessible par Tab et transfert de focus au contenu après Entrée. Texte agrandi à 200 % sans débordement à 1280 px ; contenu visible en mode impression. Capture des crédits à 375 px examinée : lisible, sans coupure. Ce contrôle ciblé n’est pas une certification complète d’accessibilité ni un test de toutes les fonctions de zoom navigateur.
- Déclaration d’indépendance identique dans les deux pages ; sept déclarations PD-textlogo, deux notices CC BY-SA 4.0 ; absence de déclaration générale « libres de droits ». CSS, canoniques, robots et URLs conservés.
- `shasum -a 256 -c SHA256SUMS` dans l’archive : **21 fichiers OK**. Aucun script de téléchargement/reconstitution de l’archive exécuté.
- Comparaison des empreintes du projet web avant/après : seuls les quatre fichiers autorisés ont changé. `git diff --check` : succès (les nouveaux fichiers non suivis sont couverts par le contrôle HTML et une vérification séparée des espaces de fin).

Pour le mobile, harmoniser ultérieurement la déclaration d’indépendance et l’accès aux crédits, et vérifier les affirmations sur les droits et la cohérence du binaire soumis. Aucune modification mobile effectuée. Les droits sous-jacents, marques et variantes restent à résoudre, ainsi que les autres blocages juridiques préexistants, avant validation du dossier et autorisation explicite de publication.

## Publication autorisée — intervention du 31 octobre 2026

L’éditeur autorise explicitement le commit, le push et la publication technique des pages malgré les validations juridiques en attente, en demandant de conserver les blocages. Cette instruction remplace l’interdiction de publication des étapes précédentes ; elle ne résout aucun point juridique. Le contrôle `--release` reste inchangé et en échec attendu. Les descriptions antérieures d’absence de commit/publication correspondent aux étapes antérieures.

Branche `main`, distant `https://github.com/Gesland-Benjamin/PORTFOLIO.git`. L’éditeur confirme que Hostinger redéploie automatiquement après un push. Aucun workflow GitHub Actions trouvé pour le commit précédent ; cela ne vérifie pas le déclencheur Hostinger. Pas de changement DNS, SSL ou hébergement. La vérification du contenu public après push demeure nécessaire.

Périmètre du commit : les trois HTML `telenoel/{confidentialite,mentions-legales,sources}/index.html`, les trois documents `AUDIT-TELENOEL.md`, `DOSSIER-JURIDIQUE-TELENOEL.md`, `MATRICE-RGPD-TELENOEL.md` et `scripts/check-telenoel.py`. Les corrections antérieures de confidentialité sont incluses pour assurer la cohérence des trois pages ; matrice et script sont les dépendances documentaires et de contrôle. Les modifications de `mentions-legales.html` à la racine sont laissées intactes et hors commit. Aucun fichier mobile ni preuve de logo modifié. Recherche ciblée de secrets dans les sept fichiers : aucun motif détecté ; ce contrôle n’est pas une garantie absolue. Les documents internes ne doivent pas être présentés comme des pages juridiques validées.

Audit mobile en lecture seule : `src/app/legal.tsx:55` lie XML TV Fr, `:59` l’issue d’autorisation et `:65` la politique HTTPS. `src/app/(tabs)/settings.tsx:289` ouvre `/legal?section=privacy` et `:296` ouvre `/legal`. Le bouton UMP appelle `showPrivacyOptions()` lorsqu’il est requis ; aucune URL de politique AdMob n’est définie dans ces sources. L’URL de console précédemment confirmée reste un constat fourni par l’éditeur, pas une console inspectée ici. Aucun lien direct vers les mentions TéléNoël ou `sources/index.html#credits-logos` trouvé. L’accès indirect aux crédits dépend de la navigation de la politique publiée. La documentation mobile `docs/audit-monetisation-build8.md` contient aussi l’URL de confidentialité sans `index.html`.

Mission mobile ultérieure : ajouter les liens directs mentions/sources/crédits, harmoniser l’indépendance (ni affilié, ni approuvé, ni sponsorisé), rendre les crédits accessibles et actualiser les anciennes conclusions documentaires sur l’absence de provenance. Ne pas transformer ces ajustements en autorisation des chaînes. Aucun lint/build mobile exécuté : contrôle documentaire en lecture seule.

Contrôles juste avant push : HTML5/liens internes et `git diff --check` réussis ; 25 destinations externes HTTP 200. Chrome local : 320/375/1280 px, aucun débordement et accès clavier au lien d’évitement sur les trois pages. Avant push : confidentialité HTTP 200 (ancienne version), mentions/sources HTTP 404 ; réponses conservées temporairement dans `/tmp/telenoel-pre-publication/`. Vérification finale de production à rapporter dans la conversation après le push.
