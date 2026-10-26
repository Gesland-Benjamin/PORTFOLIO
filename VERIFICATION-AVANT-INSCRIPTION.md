# Vérification avant inscription Google Play — 16 octobre 2026

Site contrôlé : https://benjamingesland.dev/

## Verdict, hors D-U-N-S

Le portfolio constitue une vitrine adaptée à l’activité déclarée, mais je ne peux pas encore conclure « tout est prêt ». La mise à jour est bien publiée ; un problème de cache des ressources a été constaté en production. Il reste également la vérification de propriété Google et plusieurs informations administratives à confirmer.

## 1. Déploiement et fonctionnement

- Accueil et mentions légales : HTTP 200, accessibles sans connexion.
- HTTP redirige vers HTTPS ; les requêtes HTTPS aboutissent sans erreur de certificat dans l’environnement de contrôle.
- L’accueil et les mentions légales correspondaient aux fichiers locaux avant la dernière correction des liens de ressources.
- Identité, statut EI/micro-entreprise, adresse, SIREN/SIRET, téléphone et e-mail public : présents dans les mentions légales. Identité également présente dans le titre et le pied de page. « Ben » reste utilisé comme présentation visuelle.
- Téléphone et e-mail : liens correctement formés ; aucun appel ni envoi de message n’a été effectué. La réception et les codes Google restent à vérifier par le propriétaire.
- Ancres et fichiers référencés : aucun chemin local manquant ni identifiant dupliqué repéré.
- Liens externes contrôlés : FlowNova sur l’App Store, Emi-Pulse, dépôt BLOG, profil GitHub et conditions Hostinger répondent HTTP 200. Cela ne constitue pas un audit de ces services.
- Statistiques retirées, six catégories de compétences présentes, carte mise en avant liée à FlowNova.

### Correction à publier : cache CSS / JavaScript / favicon

Avec l’URL habituelle `script.js`, les chargements du navigateur ont alternativement reçu l’ancien script (10 967 caractères) et le script actuel (5 692 caractères). Dans le premier cas, le menu recevait la classe d’ouverture sans mettre à jour `aria-expanded` et son libellé. L’ancien CSS pouvait également cacher du contenu sans JavaScript.

Le favicon servi à son URL habituelle restait un SVG invalide. Avec un paramètre de version, le fichier corrigé était valide et identique au fichier local.

**Correction préparée dans `index.html` et `mentions-legales.html` :** ajout de `?v=20261016-2` aux liens CSS, JavaScript et favicon concernés. Faire un dernier push/déploiement de ces deux fichiers. Une purge du cache Hostinger peut aussi accélérer la propagation de la nouvelle page HTML.

Les contrôles avec ces URL de ressources versionnées sont distingués des contrôles sur l’HTML actuellement publié : la correction des liens n’a pas été déployée par l’assistant.

### Résultats des contrôles

Sur les ressources déployées chargées avec le paramètre de version : Chrome testé à 320, 375, 768, 1024 et 1440 px ; aucun débordement horizontal ni erreur JavaScript/HTTP sur les ressources chargées. Images décodées, menu mobile et navigation vérifiés. Aucun échec aux règles automatiques Axe WCAG 2 A/AA et 2.1 AA. Contenu et navigation contrôlés sans JavaScript à 375 et 1440 px. Ces tests automatisés ne certifient pas une conformité exhaustive.

La page de mentions légales et ses liens ont aussi été contrôlés sur trois largeurs. Les carrousels ont été testés sur la version locale identique du script : défilement, pause au survol, clavier et mouvement réduit.

## 2. Conditions du dossier Google

### Propriété du site

L’accessibilité du domaine ne prouve pas sa validation dans Search Console. Enregistrer/valider le domaine, puis effectuer l’association demandée dans Play Console. Le statut du compte Google n’est pas accessible depuis cet audit.

Source : [Google — Vérifier le site](https://support.google.com/googleplay/android-developer/answer/13205715?hl=en-GB).

### Adresse de contact pour Google

Le contact privé communiqué est une adresse Gmail. Google demande une adresse représentant l’organisation. La documentation française indique qu’elle doit correspondre au domaine du site ; la version anglaise emploie « should » pour cette correspondance. Préparer une boîte fonctionnelle sur `benjamingesland.dev` est donc la voie la plus solide, par exemple `contact@benjamingesland.dev`, une fois réellement créée. Aucune boîte n’a été créée ou remplacée dans le site.

Cette remarque concerne le contact administratif avec Google : elle n’implique pas que l’e-mail public actuel soit interdit. Ne pas publier l’adresse privée fournie dans la conversation.

Source : [Google — Coordonnées du compte organisation](https://support.google.com/googleplay/android-developer/answer/13634081?hl=fr).

### Identité et coordonnées

Comparer le nom/adresse du profil de paiement, des documents officiels et du dossier Dun & Bradstreet. Les données du site sont celles fournies par le propriétaire ; leur présence ne valide pas l’établissement auprès des registres. Préparer les justificatifs demandés par Google et vérifier les coordonnées par codes.

Sources : [Informations requises](https://support.google.com/googleplay/android-developer/answer/13628312?hl=fr), [Vérification d’identité](https://support.google.com/googleplay/android-developer/answer/10841920?hl=fr).

## 3. Compléments du site professionnel

Ces points relèvent de la conformité du site français et ne sont pas présentés comme autant de causes automatiques de refus Google :

- **Hébergeur :** téléphone absent. Confirmer l’entité contractuelle sur la facture Hostinger avant d’ajouter les coordonnées complètes. Le téléphone d’une autre société du groupe n’a pas été inventé ni réutilisé.
- **Immatriculation et TVA :** confirmer les mentions RNE/RCS applicables et le numéro de TVA s’il y a lieu ; SIREN/SIRET déjà affichés.
- **Confidentialité :** aucune page d’information dédiée. Préparer une information adaptée aux échanges par e-mail, à leurs destinataires/conservation et aux journaux éventuels de l’hébergement. Le code local ne contient pas de traceur publicitaire, de formulaire connecté ni de stockage navigateur. Ce constat ne couvre pas toute la configuration de l’hébergeur.

Source : [Service Public — Mentions obligatoires d’un site professionnel](https://entreprendre.service-public.gouv.fr/vosdroits/F37351).

## 4. Améliorations non bloquantes pour la vérification du site

- Pas de balise canonique ni `og:url` ; domaine avec et sans `www` accessible. Choisir une URL de référence améliorerait le référencement.
- `robots.txt` et `sitemap.xml` répondent 404. Leur absence ne bloque pas en soi l’accès au site ni l’association Search Console.
- Une politique de confidentialité d’application devra refléter les traitements réels de chaque application lors de sa préparation à la publication. Ne pas confondre la validation du site de l’organisation avec la validation d’une application.

Aucune acceptation Google n’est garantie par un audit technique du portfolio. Aucune modification de compte, de DNS ou d’hébergement n’a été effectuée.
