# Audit du portfolio — 16 octobre 2026

Audit du code local et tests dans Chrome. La version publiée, son domaine, son hébergement et le compte Google ne sont pas connus : aucune validation de production ni acceptation Google ne peut être déduite de ces tests. Hypothèse : inscription Google Play Console en organisation le lundi 19 octobre 2026.

## À traiter avant l’inscription

| Priorité | Constat | Action attendue |
| --- | --- | --- |
| Haute | Le site présente « Ben », sans identité légale d’entreprise. | Confirmer le nom légal, le statut et le nom commercial éventuel. Présenter clairement le lien entre le portfolio et l’organisation déclarée à Google. |
| Résolu | Adresse e-mail communiquée par le propriétaire après l’audit. | `bengesland.dev@gmail.com` est affichée dans Contact, avec un lien et un bouton `mailto:`. La réception des messages reste à tester par le propriétaire. |
| Haute | Mentions légales absentes. | Fournir identité/statut, adresse professionnelle, immatriculation, coordonnées et identité de l’hébergeur ; compléter selon le statut réel. Ne pas publier des informations inventées. |
| Haute | Domaine public et propriété non vérifiés. | Mettre en ligne en HTTPS, vérifier l’accès public sans connexion, enregistrer et valider la propriété dans Search Console, puis effectuer l’association demandée dans Play Console. |
| Haute | Situation D-U-N-S non connue. | Vérifier sa disponibilité et la correspondance exacte du nom et de l’adresse avec le profil de paiement Google. La demande peut prendre jusqu’à 30 jours : l’inscription de lundi dépend de cette préparation. |
| Moyenne | Absence d’information sur le traitement des données. | Préparer une information adaptée aux échanges par e-mail, aux éventuels journaux de l’hébergeur et aux futurs formulaires. Identifier les prestataires, finalités, durées et droits à partir des traitements réels. Les applications auront leurs propres besoins de confidentialité. |
| Moyenne | « 30+ projets », « 15+ clients », « 2+ années » et disponibilité non vérifiés. | Confirmer ces affirmations ou les remplacer. Elles ont été conservées, sans certification de leur exactitude. « Depuis deux ans » devra aussi être actualisé. |
| Moyenne | FlowNova et GamerChallenge n’ont pas d’URL publique ni de dépôt renseignés. | Ajouter les vrais liens si disponibles ; indiquer précisément le statut de chaque projet (prototype, test, publié) et ton rôle. Les faux boutons ont été remplacés par un lien vers la section contact. |
| Faible | Référencement incomplet sans domaine final. | Après confirmation du domaine : URL canonique, `og:url`, image de partage avec URL absolue et éventuellement sitemap. L’absence de sitemap ne bloque pas en soi une petite page ni la vérification Google. |

Les mentions légales relèvent des obligations du site professionnel français ; elles ne sont pas présentées ici comme une liste de critères visuels imposés par Google. Un portfolio peut servir de vitrine, mais il doit représenter l’organisation concernée et sa propriété doit pouvoir être vérifiée. Aucun thème graphique ne garantit une acceptation.

## Défauts corrigés

- Formulaire factice : simulait une réussite avec un délai, effaçait les champs, mais n’envoyait aucune donnée. Retiré au profit d’un encart de prise de contact ; l’adresse fournie ensuite par le propriétaire, `bengesland.dev@gmail.com`, est maintenant intégrée.
- Liens `href="#"` : clics sans destination et exception JavaScript provoquée par `querySelector('#')`. Remplacés par de vraies ancres ; défilement natif conservant le hash et l’historique.
- Réseaux sociaux génériques : LinkedIn et X retirés ; GitHub pointe vers le compte déjà identifié dans l’URL du projet.
- Menu mobile : ajout de `aria-expanded`, `aria-controls`, fermeture par Échap, clic extérieur et sortie de focus ; liens fermés inaccessibles au clavier ; remise à zéro au changement de largeur.
- Accessibilité : lien d’évitement, repère `main`, indication de section active, focus visible, contenu accessible sans JavaScript, respect du mouvement réduit.
- Curseur personnalisé, particules, compteurs et carrousels continus retirés. Les compétences ne disparaissent plus après un redimensionnement depuis un écran large.
- Images : chemins relatifs compatibles avec un sous-répertoire, chargement différé, proportions conservées et versions WebP. Les trois PNG originaux sont conservés ; seules les versions WebP sont chargées.
- Captures : environ 3,7 Mo de PNG remplacés par environ 90 Ko de WebP au total, soit environ 98 % de réduction pour ces fichiers. Ce chiffre n’est pas un score Lighthouse.
- Icônes téléchargées localement ; dépendance Google Fonts supprimée au profit des polices système. Le chargement normal de la page n’appelle plus ces services externes. Le mauvais logo « Canvas » a été remplacé par un monogramme Canva ; contraste d’Expo corrigé.
- Titre, description, métadonnées de partage de base, couleur du navigateur et année dynamique ajoutés.
- Présentation : accueil en deux colonnes, encart de méthode, espacements cohérents, compétences en grille, contraste des textes amélioré, cartes projets et contact harmonisées, mise en page mobile ajustée.
- Orthographe des noms de projets et petites corrections rédactionnelles.

## Vérifications réalisées

- `node --check script.js` : valide.
- Chrome via Playwright : largeurs 320, 375, 768, 1024 et 1440 px ; pas de débordement horizontal, pas d’exception JavaScript ni de réponse HTTP en erreur sur les ressources locales chargées.
- Toutes les images locales se décodent ; toutes les sections sont présentes.
- Menu testé : ouverture, fermeture Échap, sélection d’un lien, hash de destination, retour à une largeur bureau.
- Sans JavaScript : navigation et contenu visibles sur mobile et bureau.
- Axe-core, règles WCAG 2 A/AA et 2.1 AA : aucune violation automatique détectée aux cinq largeurs. Cela ne remplace pas un audit manuel exhaustif ou un essai avec lecteur d’écran.
- Captures desktop et mobile inspectées visuellement.
- `https://www.emi-pulse.fr` et `https://github.com/Gesland-Benjamin/BLOG` répondent HTTP 200 lors du contrôle ; contenu métier non audité.
- Pas de serveur, base de données, formulaire connecté, traceur ou stockage navigateur dans le code examiné. La configuration de sécurité HTTP, les cookies éventuellement ajoutés par l’hébergeur, TLS, DNS, redirections et les performances en production restent à vérifier sur l’URL publique.

Les modifications initialement présentes dans `index.html` et `style.css` ont servi de base. `.DS_Store` n’a pas été modifié par cette intervention. Aucune publication ni modification du compte Google n’a été effectuée.

## Sources officielles consultées

- [Google : informations requises pour créer un compte](https://support.google.com/googleplay/android-developer/answer/13628312?hl=fr) — organisation, D-U-N-S, coordonnées et cohérence du profil de paiement.
- [Google : vérification du site](https://support.google.com/googleplay/android-developer/answer/13205715?hl=en) — Search Console et association avec Play Console. Utiliser le même compte Google simplifie l’approbation.
- [Service Public : mentions obligatoires d’un entrepreneur individuel](https://entreprendre.service-public.gouv.fr/vosdroits/F31228) — à adapter au statut confirmé.
- [Service Public : mentions obligatoires d’une société](https://entreprendre.service-public.gouv.fr/vosdroits/F37351) — si l’organisation est une société.

## Guide de complétion

Voir [INFORMATIONS-A-COMPLETER.md](INFORMATIONS-A-COMPLETER.md) pour les emplacements précis et les exemples à adapter lorsque les informations seront disponibles.

## Mise à jour demandée après l’audit

Les trois statistiques et la durée d’expérience ont été supprimées. La stack comporte maintenant six catégories avec les sept ajouts demandés. Les carrousels ont été réintroduits à la demande du propriétaire, avec commandes manuelles, pause, arrêt hors écran et respect du mouvement réduit. Ces changements remplacent les constats précédents concernant les chiffres et la grille statique.

La checklist du compte Google est disponible dans [GOOGLE-PLAY-ORGANISATION.md](GOOGLE-PLAY-ORGANISATION.md).

## Mise à jour des informations légales

Identité, statut EI/micro-entreprise, adresse professionnelle, SIREN/SIRET et coordonnées publiques intégrés. Une page `mentions-legales.html` est reliée au pied de page. Les constats initiaux sur leur absence sont remplacés par cet état ; voir `INFORMATIONS-A-COMPLETER.md` pour les derniers points, notamment les coordonnées contractuelles de l’hébergeur. L’adresse e-mail réservée à Google n’a pas été enregistrée dans le projet.
