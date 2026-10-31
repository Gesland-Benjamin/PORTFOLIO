# TéléNoël — dossier de finalisation, 31 octobre 2026

Document interne au projet web, à ne pas téléverser. Les qualifications ci-dessous sont des candidates à valider sur les faits et contrats, pas des bases légales déjà adoptées. Aucun build, déploiement, changement de console, signature ou modification du mobile/backend. Fichiers `.env`, bases, tokens et identifiants de connexion non lus.

## A. Vérifié et intégré

### Entreprise

Consultation de l’[API officielle Recherche d’entreprises](https://recherche-entreprises.api.gouv.fr/search?q=845277417) le 31 octobre 2026 : un résultat, BENJAMIN GESLAND, entreprise et siège actifs ; nature juridique `1000`, `est_entrepreneur_individuel=true`, SIREN `845277417`, SIRET siège `84527741700026`, 7 rue de la Brasserie, 27500 Pont-Audemer. Cela corrobore les mentions existantes, sans nécessiter de les réécrire. Le résultat indique un complément d’adresse « APPT 4 HLM LE CROTOY », confirmé ensuite par l’éditeur et intégré aux trois adresses publiques. Les informations personnelles sans utilité pour ces mentions n’ont pas été recopiées dans ce dossier.

Le régime micro est confirmé par l’éditeur, pas déduit de cette API. L’éditeur communique aussi « 845 277 417 R.C.S. Bernay », intégré aux deux mentions légales sur cette base déclarative ; aucune attestation RNE téléchargée. L’activité principale affichée est `47.91B` (vente à distance sur catalogue spécialisé) : l’éditeur confirme « Achat et revente en ligne de vêtements, chaussures et accessoires ». Le rattachement déclaré de l’activité de développement/édition reste à préciser, sans conclure automatiquement à une incompatibilité. Le champ `date_mise_a_jour_rne` n’est pas un certificat d’immatriculation et ne donne pas de greffe RCS. Le champ `tva=null` ne prouve ni absence de numéro ni franchise de TVA. Aucun numéro TVA n’a été calculé à partir du SIREN. La page Annuaire était inaccessible à l’outil web ; son API officielle était accessible.

Contacts déjà confirmés : TéléNoël/RGPD `bengesland27500@gmail.com`, professionnel `bengesland.dev@gmail.com`, téléphone `07 71 55 01 65`. Aucun e-mail ou appel de test envoyé. La réception effective n’est donc pas vérifiée.

### Hostinger

Les [conditions officielles](https://www.hostinger.com/fr/legal/termes-universels-de-contrat-de-service) désignent Hostinger International Limited pour les clients de l’UE hors cas particuliers : 61 Lordou Vironos str., 6023 Larnaca, Chypre ; `compliance@hostinger.com`. Les pages présentent ces coordonnées comme celles de cette société, et non de toute entité du groupe. L’éditeur confirme sa facture : Hostinger International Ltd., cette adresse, TVA CY10301365E. Intégré aux mentions ; ce numéro TVA est celui de l’hébergeur, pas celui de Benjamin. Le [registre officiel RIPE NCC](https://www.ripe.net/membership/member-support/list-of-members/cy/hosting/) publie +37064503378 pour Hostinger International Limited à Larnaca : intégré avec attribution et lien, sans le qualifier de support client. Page récupérée directement en HTTPS après indisponibilité de l’outil web ; aucun appel testé. Il ne s’agit pas du numéro d’une autre entité du groupe.

### Railway et backend, lecture seule

- `backend/railway.api.json` et `railway.ingest.json` : une réplique configurée, mais aucun champ de région. Aucun réglage de sauvegarde ne peut en être déduit.
- `docs/audit-confidentialite-v1.md:76` consigne une confirmation antérieure de l’éditeur : API et PostgreSQL, une réplique chacun, US West/Californie. Cela corrige le précédent rapport qui n’avait retrouvé que la page web. L’éditeur confirme ensuite, à partir de ses captures du tableau de bord : API, collecteur et PostgreSQL en US West/Californie, une réplique chacun, Hobby Plan. Intégré aux pages ; captures non directement inspectées par l’assistant. Le guide de déploiement du 14 octobre décrivait une préparation plus ancienne ; il ne doit pas être pris pour l’état actuel.
- Confirmation de l’éditeur : aucune sauvegarde de volume PostgreSQL présente dans Backups ; sa console demande Pro pour créer de nouvelles sauvegardes. Ne pas déduire la disponibilité effective de la fonctionnalité sur Hobby de la documentation générale. Sept jours d’historique de logs confirmés ; CDN, exports, autres sauvegardes et durée effective de purge non vérifiés. DPA non vérifié.
- `mobile/eas.json` définit une API HTTPS dans les profils examinés. GET public sans authentification sur `https://telenoel-production.up.railway.app/api/v1/health` : HTTP 200, `schemaVersion:1`, `status:ok`. Cela vérifie l’accessibilité TLS de cet endpoint, pas la région, le contenu d’une base ni la configuration d’un binaire distribué.
- `backend/src/api.ts` : adresse `req.socket.remoteAddress`, compteur en mémoire, fenêtre de 60 secondes, suppression des entrées expirées à la requête suivante ; pas d’interprétation de `X-Forwarded-For`. Derrière un proxy, l’adresse peut être celle du proxy. Réintroduit dans la politique avec cette limite et sans en faire une durée de journaux.
- `api.ts`, `server.ts`, `log.ts` : événements techniques, horodatages et codes d’erreur ; pas de journal de chaque requête ou d’IP dans ces chemins examinés. Cela n’exclut pas les journaux HTTP Railway, les logs PostgreSQL, exports ou autres services.
- `backend/src/artwork.ts` : `tmdbCandidate` et `approveArtwork` lèvent une erreur indiquant les images désactivées. `provider.ts` utilise XML TV Fr. Aucun usage TMDB actif identifié dans les parcours examinés.

### Inventaire publicitaire — complément de console du 31 octobre 2026

L’éditeur déclare avoir terminé le contrôle des trois rubriques de médiation le **31 octobre 2026** :

| Rubrique | Constat communiqué |
| --- | --- |
| Groupes de médiation | Uniquement « AdMob (par défaut) », aucun groupe personnalisé |
| Sources d’enchères | Réseau AdMob, 407 acheteurs autorisés affichés ; aucune autre source configurée manuellement visible |
| Sources en cascade | Aucune source publicitaire tierce configurée |

Le relevé précédent du même jour indiquait **0,00 USD de revenus estimés et 0 impression sur sept jours**, et aucun test A/B indiqué. Les filtres et bornes horaires n’ont pas été fournis. Ces statistiques ne prouvent pas l’absence de requêtes ou de traitement UMP/SDK.

Consentement reconfirmé par l’éditeur : message européen TéléNoël **« Publié »**, applications iOS/Android sélectionnées, même URL `https://benjamingesland.dev/telenoel/confidentialite/index.html`, boutons Autoriser/Refuser/Gérer les options activés, ciblage EEE/Royaume-Uni/Suisse, **198 partenaires courants**, ajout automatique désactivé, intérêt légitime et activation par défaut configurés, aucune synchronisation interapplications configurée. Le détail des autres réglages antérieurement communiqués est conservé dans la matrice.

Les **198 partenaires RGPD** et les **407 acheteurs autorisés** sont des ensembles de configuration distincts : ni nombres de SDK intégrés ni listes de participants effectivement sollicités lors des enchères. Ne pas les additionner, présumer leur recoupement ou l’intervention de chacun. Les listes nominatives, rôles et flux réels restent à établir. Aucune autre source manuelle visible ne signifie pas absence de tiers via le Réseau AdMob.

La réserve précédente sur les rubriques de médiation non vérifiées est levée **au niveau du contrôle déclaré par l’éditeur**. Aucune inspection directe de console ou preuve réseau par l’assistant ; la version des réglages effectivement appliquée, les modifications éventuellement en attente, le message IDFA distinct et le comportement réel restent à vérifier. Les choix d’intérêt légitime par défaut ne constituent pas une validation juridique. Voir [T04–T05](MATRICE-RGPD-TELENOEL.md) pour les bases candidates et durées toujours à valider.

### Comparaison publicité et textes

| Point | Preuve dans le mobile | Conclusion pour le web |
| --- | --- | --- |
| iOS UMP | `useAds.ios.tsx`, actualisation UMP, formulaire si requis, repli vers état mémorisé | UMP est nécessaire même pour les choix antérieurs des utilisateurs Sans Pub ; retour de fonction ≠ preuve qu’un formulaire a été montré. |
| Personnalisation iOS | `iosAdPolicy.ts` : ATT autorisé + UMP ; sous RGPD, finalités 1/3/4 et fournisseur Google 755, contrôle 2/7/9/10 et restrictions | Texte actuel cohérent ; ni toutes les annonces personnalisées ni toutes non personnalisées. Un état de consentement mémorisé après erreur ne réactive pas la personnalisation. |
| ATT | Module Swift lit le statut, contrôle à nouveau ATT, UMP gère la présentation ; description ATT dans `app.json` | « Peut présenter ATT » conservé ; ne pas annoncer une demande systématique ou son absence. |
| Android | `useAds.native.tsx`, `requestNonPersonalizedAdsOnly:true`, contrôle `canRequestAds` | NPA confirmé dans le code ; ce n’est pas une exemption générale de consentement ou de collecte. |
| Identifiant propriétaire | `TelenoelAdPrivacyModule.swift` le désactive | Affirmation limitée à iOS. |
| Sans Pub | Droits vérifiés avant bannières ; informations UMP toujours actualisées | Pas de promesse de déconnexion totale des SDK après achat. |
| RevenueCat | `usePurchases.native.tsx` : configuration si disponible, sans `appUserID` fourni | Texte corrigé pour ne pas promettre une initialisation lorsque le SDK est indisponible/non configuré ; identifiant pseudonyme par défaut. |
| Local | Modèle comporte `isFavorite`/`rating`, sans commande correspondante trouvée dans l’interface examinée | Texte distingue désormais champs persistables et fonctions effectivement proposées. |
| Rappels | `notificationGateway.ts` programme/annule localement ; aucun appel de demande de jeton push trouvé | Description locale conservée ; pas de serveur Expo Push ajouté aux destinataires. |

Références : [UMP](https://developers.google.com/admob/ios/privacy), [annonces non personnalisées](https://support.google.com/admob/answer/7676680?hl=fr), [ATT](https://developer.apple.com/app-store/user-privacy-and-data-use/). La vérification des signaux TCF dans le code ne remplace pas la qualification juridique de chaque finalité. Les requêtes NPA peuvent encore utiliser des identifiants pour fréquence/mesure lorsque permis ; le consentement reste requis là où la réglementation l’impose.

## Matrice RGPD et état de distribution actualisés

La [matrice dédiée pour validation](MATRICE-RGPD-TELENOEL.md) remplace le tableau initial. Elle sépare bases candidates, conservation constatée, règles proposées et preuves manquantes, avec identifiants de traitement et fiche de décision.

Dernières informations de l’éditeur : iOS 1.0.0 build 13 précédemment soumis ; build 14 téléversé, en attente de validation TestFlight, non soumis à App Review. Android 1.0.1/versionCode 2 en test interne, sans production confirmée. Grand public sans ciblage spécifique des enfants ; classification officielle et volume d’audience inconnus. Aucune conclusion de disponibilité publique ou de diffusion effective des annonces n’en est tirée.

Produit RevenueCat `telenoel.remove_ads`, entitlement `remove_ads`, offering `default`, package Lifetime : achat unique non consommable. Prix annoncé de 3,99 € non vérifié dans les boutiques ; restauration iOS démontrée selon l’éditeur, Android restant à vérifier. Le message européen publié et son association iOS/Android sont désormais confirmés par l’éditeur, ainsi que les trois rubriques de médiation détaillées ci-dessus. Le message IDFA distinct, les listes nominatives des partenaires/acheteurs et les acteurs réellement sollicités restent à vérifier. Ces déclarations ne sont pas des preuves de console examinées par l’assistant.

## Services tiers : documents publics et limites

| Service | Document et constat vérifié | Ce qui reste spécifique au compte |
| --- | --- | --- |
| Hostinger | [DPA officiel](https://www.hostinger.com/legal/dpa), version du 29 septembre 2026 : plusieurs entités possibles, sous-traitance des données hébergées, CCT selon transfert et acceptation des conditions ; suppression prévue 30 jours après fin, sous réserve des conditions du service et obligations légales. | Entité/facture confirmées par l’éditeur ; offre, version des conditions acceptée, emplacement, sous-traitants, logs et sauvegardes restent inconnus. Les 30 jours après résiliation ne sont pas une rétention des logs en activité. |
| Railway | [DPA](https://railway.com/legal/dpa) : sous-traitant pour certaines données, responsable indépendant pour données de compte/usage ; transferts États-Unis, CCT ou DPF sous conditions ; restitution/suppression en fin de contrat avec exceptions. Le texte exige le formulaire DocuSign et l’exécution par Railway pour devenir contraignant. | Copie effectivement exécutée, annexe/périmètre, région et mécanisme retenu. Aucune certification DPF affirmée sur la seule présence de cette option contractuelle. |
| Railway logs | [Documentation logs](https://docs.railway.com/observability/logs) : stdout/stderr capturés ; fenêtre annoncée Free 3 j, Trial/Hobby 7 j, Pro 30 j, Enterprise jusqu’à 90 j. Un changement de plan peut restaurer des logs auparavant hors fenêtre. | Ne pas assimiler cette fenêtre à une destruction irréversible ; Hobby confirmé ; identifier journaux HTTP/DB, exports et conservation effective. |
| Railway backups | [Documentation sauvegardes](https://docs.railway.com/volumes/backups) : planification journalière/hebdomadaire/mensuelle avec conservation annoncée 6/27/89 jours. | Aucune sauvegarde présente dans Backups selon l’éditeur ; console demandant Pro. Copies hors de cet onglet, PITR, autres mécanismes et localisation de copies éventuelles inconnus. Une restauration conserve l’ancien volume, à traiter dans la politique de suppression. |
| RevenueCat | [DPA août 2026](https://www.revenuecat.com/dpa) : responsable client/sous-traitant RevenueCat pour Customer Personal Data, CCT incorporées selon transfert. Demande de retour/destruction à faire dans les 30 jours suivant la résiliation, sous réserve de sauvegardes/archives. [Politique](https://www.revenuecat.com/privacy) distingue données utilisateurs finaux et données de clients RevenueCat ; infrastructure clients aux États-Unis. | Contrat/version applicable, intégrations et sous-traitants, profils sans achat, purge, copies de sauvegarde. Les six ans de la politique de relation client ne doivent pas être transposés à chaque utilisateur TéléNoël. Les 30 jours sont un délai de demande après résiliation, pas une rétention SDK. |
| Google AdMob/UMP | [Liste officielle des services](https://business.safety.google/adsservices/) : AdMob relève principalement des conditions controller-controller ; certaines fonctions précises relèvent des processor terms. [Conditions](https://business.safety.google/adscontrollerterms/) définissent les rôles et mécanismes de transfert. | Entité contractante, conditions acceptées, fonctions réellement activées et partenaires ; pas de qualification globale « tous sous-traitants ». |
| Google conservation | [Politique de conservation](https://policies.google.com/technologies/retention?hl=en) : règles variables selon données/finalités ; exemples d’anonymisation partielle de journaux publicitaires et conservation longue pour paiements/sécurité. | Ne pas transformer les exemples généraux en durée unique d’AdMob, UMP ou Gmail ; obtenir les catégories et critères correspondant à l’usage réel. |
| Apple / Google Play | [App Store et confidentialité](https://www.apple.com/legal/privacy/data/en/app-store/) : archives achats/téléchargements selon obligations financières et continuité de téléchargement ; conservation minimale de dix ans annoncée pour la plupart des clients, variations régionales. [Google Payments](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=fr) distingue notamment entités et rôles selon pays et vendeur/acheteur. | Conditions du compte développeur et de l’utilisateur, pays concernés. Ces traitements propres aux boutiques ne sont pas des durées imposées à toute donnée TéléNoël/RevenueCat. |
| Gmail | Politique générale Google et conservation ci-dessus. | Compte grand public ou service professionnel, outils/accès, purge des échanges. Ne pas supposer un DPA Google Workspace pour une adresse Gmail. |

## Inventaire des neuf logos

La correspondance des neuf assets locaux est documentée dans l’[archive des preuves techniques](/Users/ben/Developer/telenoel/docs/legal/logo-evidence/README.md) ; l’[inventaire](/Users/ben/Developer/telenoel/docs/legal/logo-evidence/inventory.json) conserve empreintes, révisions, sources et déclarations. Les anciennes mentions « aucune licence trouvée » sont remplacées par les déclarations identifiées ci-dessous, sans conclure à une autorisation juridique.

| Chaîne | Fichier dans `mobile/assets/channels/` | Déclaration de la fiche Commons |
| --- | --- | --- |
| TF1 | `tf1.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:Logo_TF1_2013.svg) |
| TMC | `tmc.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:TMC_logo_2016.svg) |
| M6 | `m6.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:Logo_M6_%282020%2C_fond_clair%29.svg) |
| W9 | `w9.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:W9_2018.svg) |
| TFX | `tfx.png` | [CC BY-SA 4.0 — Louitcho](https://commons.wikimedia.org/wiki/File:Logo_TFX_2018.jpg) |
| TF1 Séries Films | `tf1seriesfilms.png` | [CC BY-SA 4.0 — Louitcho](https://commons.wikimedia.org/wiki/File:Logo_TF1_S%C3%A9ries_Films_2018.jpg) |
| 6ter | `6ter.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:Logo_6ter_2016.svg) |
| Gulli | `gulli.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:Logo_Gulli_2023.svg) |
| RMC Life | `rmclife.png` | [PD-textlogo / Public domain](https://commons.wikimedia.org/wiki/File:RMC_Life_logo_2025.svg) |

Pour sept logos, les dimensions et pixels RGBA correspondent aux vignettes Commons sans redimensionnement. Pour TFX, la vignette JPEG historique (330 × 122) convertie par sips correspond en pixels, mais pas en octets PNG. Pour TF1 Séries Films, le JPEG original (857 × 216) converti par sips correspond aussi octet pour octet au PNG. Ces résultats archivés ne prouvent aucun droit sur le dessin.

Points juridiques toujours non résolus :

- **TFX et TF1 Séries Films** : Louitcho est l’auteur déclaré, avec source « Own work », pas un titulaire de droits vérifié. Sa capacité à concéder les droits sur les dessins officiels reste inconnue. Les crédits préparés ne résolvent pas cette incertitude. Examiner la portée de CC BY-SA 4.0, ses obligations et la distribution dans l’application ; confirmer les variantes, différentes des références TF1 Pro observées.
- **6ter** : correspondance Commons exacte, mais variante différente de celle observée chez Groupe M6. Confirmer sa pertinence actuelle et l’usage de la marque ; la déclaration PD-textlogo n’est pas un verdict juridique.
- **Les sept déclarations PD-textlogo et les neuf marques** : apprécier originalité, territoires et usage effectif. Aucune autorisation individuelle des chaînes n’est produite. L’absence de preuve n’est pas une preuve d’interdiction.

La licence MIT du socle Expo et l’autorisation XML TV Fr sur les programmes ne couvrent pas automatiquement les logos. La déclaration générale « libres de droits » est retirée des pages. La décision de conserver les assets ne vaut pas validation de leurs droits. Si le fondement d’usage n’est pas établi, solliciter une autorisation ou décider séparément d’une alternative ; aucun logo ni fichier mobile n’est modifié ici.

`background.png` et `logo.png` de ce dossier ne font pas partie des neuf logos de chaînes. `docs/identite-visuelle.md` décrit un fond fourni et un détourage du logo TéléNoël ; le détourage n’établit pas les droits sur l’original. Les illustrations décoratives restent à documenter sans revendiquer de licence générale.

## B. Non applicable ou non établi comme obligatoire

- ATT Android : non applicable, mécanisme Apple. Cela ne dispense pas Android des choix UMP/traceurs.
- Compte utilisateur TéléNoël, synchronisation de collections, streaming/replay et push distant : aucun parcours correspondant identifié ; pas de clause de suppression de compte ou de diffusion vidéo à inventer.
- Attribution TMDB pour une source active : non applicable au parcours examiné, connecteur désactivé. Cela n’est pas une validation de droits sur d’anciens contenus d’une base non inspectée.
- DPO obligatoire : **pas établi**, donc ne pas classer sans réserve « non applicable ». Selon la [CNIL](https://www.cnil.fr/fr/le-delegue-la-protection-des-donnees-dpo/devenir-delegue-la-protection-des-donnees), l’obligation concerne notamment organismes publics, suivi régulier/systématique à grande échelle dans les activités de base, ou traitements sensibles/pénaux à grande échelle. Le premier cas ne correspond pas à cette EI ; aucun traitement sensible/pénal de base identifié. La publicité et l’audience imposent d’évaluer le critère de suivi à grande échelle. Micro-entreprise ne signifie pas dispense automatique. Sans DPO désigné ni obligation établie, ne pas inventer de coordonnées ; le contact RGPD reste nécessaire.
- TVA : **non déterminée** ; la réponse « je pense que je n’en ai pas » n’est pas une confirmation fiscale. Le RCS de Bernay est désormais fourni par l’éditeur. Une franchise de TVA n’exclut pas nécessairement un numéro intracommunautaire, notamment selon les opérations : voir [administration fiscale](https://www.impots.gouv.fr/professionnel/questions/je-suis-micro-entrepreneur-ou-la-tete-dune-micro-entreprise-ai-je-des). Vérifier auprès du SIE sans publier d’exonération présumée.

## C. Paramètres et preuves à confirmer

- **AdMob, par application iOS/Android** : contrôle déclaré du message européen, des applications/URL et des trois rubriques de médiation consigné ci-dessus. Restent correspondance avec les binaires, état effectivement appliqué des réglages, listes nominatives et rôles des partenaires/acheteurs, flux réels, SDK/adaptateurs présents, retrait effectif, paramètres non documentés et réglages mineurs/âge. Ne pas redemander un contrôle des rubriques déjà confirmé.
- **iOS / UMP IDFA** : message IDFA activé ou non, parcours réel selon état ATT, cohérence du texte système et des déclarations de tracking. Refus ATT ne vaut pas refus de toutes les finalités UMP ; accord ATT ne vaut pas consentement général.
- **Boutiques** : builds distribués et version des SDK, audience cible/âge, fiches confidentialité/App Privacy/Data Safety, produits non consommables, prix et restauration. Aucun résultat de test TestFlight passé ne garantit ces réglages actuels.
- **RevenueCat** : projet/entitlement/offering correspondant aux boutiques, comportement de transfert/restauration, webhooks et intégrations analytics/attribution actifs, attributs clients, conditions acceptées et procédure de suppression. Aucun export distant effectué pour vérifier cela.
- **Infrastructure** : entité Hostinger, régions des trois services et Hobby confirmés par l’éditeur. Restent contrats/DPA exécutés, garanties, catégories et purge effective des journaux, copies hors Backups et export/CDN. Aucune console authentifiée inspectée directement.
- **Éditeur** : extrait d’immatriculation/situation fiscale, DPO éventuel, âge et audience, décision sur les bases candidates et critères de conservation. Prévoir une preuve minimale des décisions, pas uniquement des phrases dans la politique.

## D. Questions minimales pour l’éditeur

1. Quelle situation TVA ton espace professionnel/SIE confirme-t-il, et un numéro intracommunautaire est-il attribué ? L’activité de développement/édition est-elle déclarée en complément du commerce communiqué ?
2. As-tu désigné un DPO ; quelle classification officielle et quel ordre de grandeur d’audience sont retenus ? Le grand public sans ciblage enfant est désormais déclaré. Pour les versions désormais identifiées, quel est le statut du message IDFA distinct, quelles listes nominatives de partenaires/acheteurs et quelles preuves de comportement effectif sont disponibles, et quelles intégrations RevenueCat sont actives ? Le message européen et les rubriques de médiation sont désormais documentés.
3. Peux-tu confirmer les DPA/conditions réellement acceptés (notamment Railway signé), et les journaux, purges, CDN/exports et copies hors Backups ? Fournir seulement les références et réglages non secrets.
4. Quel fondement juridique retenir pour les neuf logos désormais rapprochés de Commons, notamment la capacité de Louitcho à concéder les droits et la variante 6ter ? Ensuite arrêter en une revue les bases et critères de conservation de la matrice ; ne pas valider en bloc des durées inconnues.

## E. Historique des fichiers modifiés

- `DOSSIER-JURIDIQUE-TELENOEL.md` : ce dossier, matrice et inventaire.
- `AUDIT-TELENOEL.md` : actualisation des constats, liens et résultats.
- `telenoel/confidentialite/index.html` : données locales nuancées, initialisation RevenueCat conditionnelle, compteur API documenté, HTTPS configuré, régions Railway confirmées, historique Hobby et absence de sauvegarde dans Backups, liens officiels et blocages affinés.
- `telenoel/mentions-legales/index.html` et `mentions-legales.html` : RCS, complément d’adresse, entité Hostinger, TVA hébergeur et téléphone RIPE ; régions Railway sur la page TéléNoël ; blocages conservés pour les inconnues.
- `telenoel/sources/index.html` : provenance Commons, indépendance, crédits et limites des droits ; blocage juridique maintenu.

## F. Tests et G. Conditions avant déploiement

Résultats d’exécution consignés dans `AUDIT-TELENOEL.md`. Le contrôle `--release` doit rester en échec sur les documents comportant des inconnues ; ni disparition des avertissements visibles ni succès HTML ne valent validation juridique.

Avant toute publication : compléter les décisions et preuves ci-dessus, vérifier les textes avec les builds/configurations réels, résoudre chaque commentaire `FINALISATION REQUISE`, relancer HTML/liens/release, contrôler visuellement et au clavier, puis obtenir l’autorisation explicite de déployer. La procédure de sauvegarde, publication et retour arrière de l’audit demeure applicable. Aucun accès à une console, signature contractuelle ou changement mobile n’est autorisé par la seule préparation de ce dossier.

## Mise à jour locale des crédits — 31 octobre 2026

Seuls `telenoel/sources/index.html`, `telenoel/mentions-legales/index.html`, `AUDIT-TELENOEL.md` et ce dossier sont modifiés pendant cette intervention. La page Sources suffit : URL et `#logos` conservés, `#credits-logos` ajouté, neuf fiches liées et notices des deux JPEG convertis en PNG. Même déclaration d’indépendance dans les deux pages : aucune affiliation, approbation ou sponsorisation revendiquée. Aucune page supplémentaire nécessaire.

À harmoniser ultérieurement dans le mobile, sur autorisation distincte : déclaration d’indépendance, lien accessible vers les crédits, auteur déclaré/licence/conversions et réserves ; retirer toute affirmation générale « libres de droits » ou autorisation des chaînes. Vérifier les crédits accessibles dans le binaire soumis et la cohérence des réponses App Review avec les preuves. L’archive et les pages ne constituent pas une validation complète du dossier.
