# Informations à compléter sur le portfolio

Ce guide explique où ajouter tes informations lorsque tu les auras. Les emplacements sont repérables par leur texte ou leur identifiant dans `index.html` : ils restent utiles même si les numéros de ligne changent.

Les exemples entre crochets sont à remplacer avant publication. Ce fichier est un guide de travail, pas une page de mentions légales à publier telle quelle. Ne renseigne ici aucune pièce d’identité, mot de passe ou information bancaire.

## 1. Adresse e-mail — déjà intégrée

**Adresse : `bengesland.dev@gmail.com`.**

Dans `index.html`, section `<section class="contact section" id="contact">` :

- L’adresse est visible dans `.contact__details` et peut être copiée.
- Le lien sur l’adresse et le bouton « Parlons de ton projet » ouvrent l’application de messagerie avec `mailto:`.
- Le profil GitHub reste accessible séparément.

Aucun message n’est envoyé automatiquement par le site. Pour vérifier le contact, clique sur le bouton puis envoie un message depuis une autre adresse et vérifie sa réception. Si aucune application de messagerie n’est configurée, copie l’adresse dans Gmail ou ton webmail.

## 2. Identité de l’entreprise — accueil et À propos

**Fichier : `index.html`.**

Dans la section `id="about"`, au début du bloc `.about__text`, ajoute un paragraphe reliant « Ben » à l’entreprise déclarée à Google.

Exemple à adapter :

```html
<p>
  Je suis [prénom et nom], développeur indépendant.
  J’exerce sous le nom [nom commercial éventuel], au sein de
  [nom légal exact de l’entreprise et statut].
</p>
```

Si tu n’as pas de nom commercial, supprime la phrase correspondante. Reprends le nom légal de tes documents, sans en déduire un à partir de ton adresse e-mail. Si tu es entrepreneur individuel, adapte la présentation à ce statut ; si tu es en société, utilise sa dénomination exacte.

Dans la section `id="hero"`, tu peux remplacer « Bonjour, moi c’est Ben » par ton nom ou nom commercial. Garder « Ben » comme identité visuelle est possible : c’est surtout le lien explicite avec l’entreprise qui manque actuellement.

## 3. Mentions légales — nouvelle page et lien en bas du site

**Fichier à créer : `mentions-legales.html`, à côté de `index.html`.**

Prépare les informations suivantes, puis adapte le contenu à ton statut réel :

| Information à récupérer | Où la placer dans la future page |
| --- | --- |
| Nom légal, prénom/nom si EI, statut ou forme juridique | Bloc « Éditeur du site » |
| Nom commercial, s’il existe | À côté du nom légal, sans le remplacer |
| Adresse professionnelle ou siège social | Bloc « Éditeur du site » |
| SIREN/SIRET et mentions d’immatriculation applicables | Bloc « Identification de l’entreprise » |
| Capital social si applicable à ta société | Bloc « Identification de l’entreprise » |
| TVA intracommunautaire si applicable | Bloc « Identification de l’entreprise » |
| E-mail et téléphone professionnels | Bloc « Contact » |
| Responsable de publication | Bloc « Publication » |
| Nom, adresse et téléphone de l’hébergeur effectif | Bloc « Hébergement » |

Le contenu précis dépend de ton statut et de ton activité ; cette table est une liste de préparation, pas une certification juridique. Références officielles : [entrepreneur individuel](https://entreprendre.service-public.gouv.fr/vosdroits/F31228) et [société](https://entreprendre.service-public.gouv.fr/vosdroits/F37351), également référencées dans l’audit.

**Dans `index.html`, cherche `<div class="footer__inner">`.** Ajoute ce lien à côté du copyright, seulement lorsque la page existe et est remplie :

```html
<a href="mentions-legales.html">Mentions légales</a>
```

Sur la nouvelle page, prévois un titre, un lien vers `index.html` et la feuille de style du site. Teste le lien après publication.

## 4. Confidentialité — page adaptée aux traitements réels

**Fichier à prévoir : `confidentialite.html`.**

Décris les données effectivement traitées : échanges par e-mail, prestataire de messagerie, journaux éventuels de l’hébergement, et tout formulaire ou outil de mesure ajouté ultérieurement. Renseigne notamment responsable, finalités, bases légales, destinataires, conservation et exercice des droits selon la situation réelle.

Ajoute ensuite un lien « Confidentialité » dans `.footer__inner`. N’affirme pas « aucune donnée collectée » sans prendre en compte l’hébergement et la messagerie. Le code actuel ne contient pas de formulaire connecté ni de traceur ; la configuration de l’hébergeur reste à examiner.

Pour chaque application, prépare une information correspondant à ses propres traitements : la page du portfolio ne décrit pas automatiquement les données de FlowNova ou d’une autre application.

## 5. URL publique — métadonnées et vérification Google

**Fichier : `index.html`, dans `<head>`.**

Une fois l’adresse définitive connue, ajoute les balises ci-dessous en remplaçant entièrement les valeurs d’exemple par l’URL publique réelle :

```html
<link rel="canonical" href="https://exemple.fr/" />
<meta property="og:url" content="https://exemple.fr/" />
```

Si le portfolio est hébergé dans un sous-dossier, inclus son chemin. Une image de partage peut également être ajoutée avec `og:image`, en utilisant l’URL absolue d’une image existante.

**En dehors du code :**

1. Vérifie que cette URL est accessible publiquement en HTTPS, sans connexion.
2. Ajoute le site dans Google Search Console et valide sa propriété selon la méthode proposée.
3. Si tu utilises une validation DNS, le code se renseigne chez le gestionnaire DNS. Si tu choisis une balise HTML, copie la balise exacte fournie par Google dans `<head>`. Une validation par fichier nécessite de publier le fichier à l’emplacement demandé par Google.
4. Renseigne l’URL exacte dans Play Console et effectue la demande de vérification/association.

[Procédure officielle de vérification du site](https://support.google.com/googleplay/android-developer/answer/13205715?hl=en).

## 6. D-U-N-S — dossier Google, pas un bloc à ajouter au portfolio

Prépare ton D-U-N-S pour l’inscription et compare le nom/adresse de l’organisation avec le profil de paiement Google. Il n’y a pas de bloc D-U-N-S à ajouter au site dans ce guide. Ne le confonds pas avec le SIREN/SIRET.

[Informations demandées par Google pour un compte organisation](https://support.google.com/googleplay/android-developer/answer/13628312?hl=fr).

## 7. Projets et chiffres — informations à confirmer

**Dans `index.html`, section `id="about"` :** vérifie « 2+ années », « 30+ projets » et « 15+ clients », ainsi que « Depuis deux ans » dans le texte. Corrige les valeurs si elles ne reflètent pas ton activité réelle.

**Section `id="projects"` :** pour FlowNova et GamerChallenge, remplace « Parlons de ce projet » par des liens vers le site, la fiche de l’application ou le dépôt public, lorsqu’ils existent. Indique dans la description si le projet est en développement, en test ou publié, ainsi que ta contribution. N’ajoute pas un bouton vers une destination indisponible.

## Checklist de mise en ligne

- [ ] Identité de l’entreprise ajoutée dans « À propos ».
- [x] Adresse e-mail fournie intégrée au site.
- [ ] Envoi et réception d’un e-mail test vérifiés par toi.
- [ ] Mentions légales complètes et accessibles depuis le pied de page.
- [ ] Information de confidentialité adaptée aux traitements réels.
- [ ] Chiffres et statut des projets confirmés.
- [ ] Domaine public HTTPS et liens testés après publication.
- [ ] URL canonique et URL de partage renseignées.
- [ ] Propriété du site validée dans Search Console et association Google effectuée.
- [ ] Informations du dossier organisation vérifiées.

Le guide et les modifications sont locaux : ils ne publient rien et ne valident pas ton compte Google.
