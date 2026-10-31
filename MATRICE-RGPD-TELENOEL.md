# TéléNoël — matrice RGPD pour validation

Date : 31 octobre 2026. **Document interne non validé, non destiné à la publication.** Aucune base candidate n’est réputée adoptée ; aucun délai proposé n’est présenté comme déjà appliqué. Les traitements éventuels pendant les tests sont concernés même sans publication en production.

## Périmètre confirmé par l’éditeur

Ces informations proviennent du message de l’éditeur, sans inspection des consoles ni nouvelle vérification du binaire :

| Sujet | État communiqué | Ce que cela ne prouve pas |
| --- | --- | --- |
| iOS | 1.0.0 ; build 13 précédemment soumis à Apple. Build 14 compilé et téléversé dans App Store Connect, en attente de validation TestFlight, non soumis à App Review. | Ni approbation du build 13, ni validation du build 14, ni disponibilité publique. |
| Android | 1.0.1, versionCode 2, test interne Google Play. | Aucune publication en production confirmée. |
| Audience | Grand public amateur de téléfilms de Noël, sans ciblage spécifique des enfants. | Ni exclusion des mineurs, ni classification officielle, ni absence de traitement d’enfants. |
| Publicités | AdMob, quatre emplacements ; UMP iOS/Android ; parcours ATT conditionnel iOS. Message européen indiqué publié et activé, associé aux applications iOS et Android, selon le complément de l’éditeur du 31 octobre 2026 (détail T04–T05 ci-dessous). | Diffusion effective, état appliqué des éventuelles modifications, message IDFA distinct, acteurs réellement sollicités et comportement des SDK non vérifiés ; les trois rubriques de médiation ont été contrôlées par l’éditeur, selon le relevé ci-dessous. |
| Achats | Produit `telenoel.remove_ads`, entitlement `remove_ads`, offering `default`, package Lifetime ; achat unique non consommable, sans abonnement ; StoreKit/Play Billing via RevenueCat. | Paramétrage distant actuel et fonctionnement Android non vérifiés. « Lifetime » est un type de package, pas une durée de conservation illimitée. |
| Prix et restauration | Prix français annoncé 3,99 €, à confirmer dans les deux boutiques ; restauration iOS démontrée sur iPhone selon l’éditeur. | Prix effectif de chaque boutique ou fonctionnement de tous les builds et comptes. Aucun reçu ou résultat de test nouvellement inspecté. |
| Images | Neuf logos déclarés libres de droits par l’éditeur, sans référence de licence fournie. | Aucune réutilisation commerciale vérifiée. XML TV Fr ne couvre pas ces logos. |

## Complément AdMob du 31 octobre 2026 — constats pour T04 et T05

**Provenance :** relevé de captures de console communiqué par l’éditeur ; captures non directement examinées par l’assistant. Le message **« Réglementations européennes – TéléNoël – Consentement RGPD »** est indiqué **publié et activé**. Les applications sélectionnées sont **TéléNoël iOS** et **TéléNoël Android**, avec la même [URL de confidentialité](https://benjamingesland.dev/telenoel/confidentialite/index.html).

| Réglage visible communiqué | Constat de console |
| --- | --- |
| Boutons Autoriser, Refuser et Gérer les options | Activés |
| Fermeture sans choix | Désactivée |
| Ciblage du message | EEE, Royaume-Uni et Suisse |
| Partenaires publicitaires courants | 198 affichés ; liste nominative non fournie |
| Ajout automatique de partenaires | Désactivé |
| Maximisation de la couverture des messages | Activée |
| Vérification du consentement des créations | Désactivée |
| Options d’intérêt légitime | Activées, y compris par défaut |
| Mode Consentement à des fins publicitaires | Désactivé |
| Fonctionnalité spéciale 2 | Désactivée |
| Synchronisation des consentements | Aucune application ajoutée |
| Finalités supplémentaires | Aucune sélectionnée |
| Solutions de remplacement du consentement | Désactivées pour iOS et Android |

### Inventaire publicitaire — trois rubriques de médiation contrôlées

Complément communiqué par l’éditeur le **31 octobre 2026**, après contrôle de **Groupes de médiation**, **Sources d’enchères** et **Sources en cascade** ; aucune inspection directe de la console par l’assistant :

| Élément | Constat communiqué |
| --- | --- |
| Groupes visibles | Un seul : « AdMob (par défaut) » |
| Groupe personnalisé | Aucun, selon le contrôle de l’éditeur |
| Sources d’enchères | Réseau AdMob ; 407 acheteurs autorisés affichés ; aucune autre source configurée manuellement visible |
| Sources en cascade | Aucune source publicitaire tierce configurée, selon le contrôle de l’éditeur |
| Revenus estimés, sept derniers jours (relevé précédent du même jour) | 0,00 USD |
| Impressions, sept derniers jours (relevé précédent du même jour) | 0 |
| Test A/B (relevé précédent du même jour) | Aucun indiqué |

Ces statistiques portent uniquement sur la période et la vue rapportées ; les filtres précis et les bornes horaires ne sont pas fournis. Elles ne prouvent ni absence de requêtes publicitaires, ni absence de traitement par UMP/les SDK, ni absence de diffusion hors de cette période. Aucun fonctionnement ou dysfonctionnement des annonces n’en est déduit.

Les **198 partenaires des paramètres RGPD** et les **407 acheteurs autorisés du Réseau AdMob** sont deux ensembles de configuration distincts. Ils ne désignent ni un nombre de SDK intégrés ni un nombre d’acteurs effectivement sollicités lors des enchères. Ne pas additionner ces chiffres ni supposer que ces ensembles sont identiques, disjoints ou tous actifs. Leurs listes nominatives et leur éventuel recoupement ne sont pas fournis.

Le contrôle des trois rubriques est désormais rapporté comme terminé par l’éditeur : la réserve précédente sur des rubriques non vérifiées est levée à ce niveau déclaratif. Cela n’établit pas les participants à chaque enchère, les transmissions de données, les adaptateurs/SDK du binaire ou le comportement réel du service. L’absence d’autre source configurée manuellement visible ne signifie pas absence de tiers intervenant via le Réseau AdMob. « Aucun test A/B indiqué » reste limité au relevé précédent.

**Portée du constat :** le statut affiché du message et la sélection des deux applications sont désormais documentés par la déclaration de l’éditeur. Ce relevé ne prouve pas que chaque réglage visible est compris dans la version publiée plutôt que dans des modifications en attente. Il ne démontre ni affichage effectif du formulaire, ni transmission des signaux, ni respect des choix par les SDK et partenaires. Les 198 partenaires affichés ne sont pas 198 destinataires effectivement sollicités démontrés. La sélection de deux applications pour un message ne prouve pas une synchronisation des consentements entre elles.

**Portée juridique :** aucune base candidate de T04 ou T05 n’est validée par ce relevé. Les options d’intérêt légitime, même activées par défaut, ne constituent ni un consentement ni une mise en balance documentée pour chaque traitement. Les réglages désactivés ne prouvent pas à eux seuls l’absence de collecte, de traitement correspondant ou de besoin de consentement. « Mode Consentement à des fins publicitaires désactivé » est repris comme libellé de console, sans en déduire que le recueil UMP est désactivé. Le refus, la gestion des options et le retrait restent à vérifier sur appareil ; le statut du message IDFA distinct reste inconnu.

## Mode de validation

Pour chaque ligne, arrêter **une base par finalité**, vérifier sa nécessité, puis fixer la conservation active, son événement de départ, l’éventuelle archive séparée et la suppression des copies. Une durée peut être définie par un critère précis lorsque pertinent ; « aussi longtemps que nécessaire » sans explication ne suffit pas. Aucun délai chiffré arbitraire n’est proposé pour masquer une configuration inconnue.

- **Constat** : code examiné lors de l’audit ou information explicitement fournie par l’éditeur ; ne vaut pas test de production.
- **Proposition** : qualification ou règle à décider avant de l’annoncer dans la politique.
- **À établir** : preuve technique, contractuelle ou décision manquante. Toutes les lignes restent à valider pour leur portée exacte.

## Bases légales candidates

| ID | Finalité, données et acteurs | Proposition et justification | Condition de validation |
| --- | --- | --- | --- |
| T01 | Délivrer le catalogue : dates demandées, IP/métadonnées de connexion ; éditeur/Railway. Les titres/horaires communs ne constituent pas eux-mêmes un profil de spectateur. | Art. 6(1)(b), exécution du service demandé, **si** relation contractuelle établie et données objectivement nécessaires. À défaut, examiner 6(1)(f) pour fourniture minimale du guide avant toute décision, sans cumul indistinct. | Identifier les conditions du service et séparer les logs de sécurité T08. Pas d’envoi des recherches/collections dans la requête examinée. |
| T02 | Listes/préférences : statuts de films, chaînes, choix ; appareil, sauvegardes système éventuelles. Champs notes/favoris prévus par le stockage. | 6(1)(b) candidate pour mémoriser les fonctions demandées, sous réserve de l’analyse du rôle de l’éditeur dans ce traitement local. Examiner séparément l’exemption de consentement terminal pour stockage strictement nécessaire. | Ne pas déduire une exemption RGPD du seul stockage local ; distinguer champs historiques, fonctions visibles et sauvegardes Apple/Google. |
| T03 | Rappels locaux : titre, chaîne, diffusion, identifiants, délai ; appareil et système. | 6(1)(b) candidate pour exécuter un rappel demandé. Une permission de notification n’est pas à elle seule une base légale RGPD. | Limiter au rappel choisi, confirmer annulation et nettoyage ; aucun traitement push distant à ajouter sans preuve. |
| T04 | Publicité/personnalisation : IP, identifiants, impressions/interactions, données techniques ; Google et partenaires effectifs. | 6(1)(a) pour personnalisation et opérations requérant le consentement. Obligations traceurs distinctes. Pour opérations réellement distinctes de sécurité/mesure, examiner les bases propres de chaque acteur sans inventer un intérêt légitime général. | Statut publié/activé et association iOS/Android rapportés ci-dessus ; un seul groupe « AdMob (par défaut) » visible, aucun groupe personnalisé ni test A/B indiqué. Les trois rubriques sont contrôlées selon l’éditeur : Réseau AdMob avec 407 acheteurs autorisés, aucune autre source manuelle visible et aucune source tierce en cascade. Les 198 partenaires RGPD et 407 acheteurs autorisés ne comptent ni des SDK ni des acteurs effectivement sollicités. Identifier la version publiée et les éventuelles modifications en attente ; obtenir les listes des 198 partenaires et des 407 acheteurs, établir leurs rôles/finalités/bases et distinguer destinataires potentiels et effectivement sollicités ; vérifier refus/retrait et flux réels. Les options d’intérêt légitime activées par défaut ne valident pas cette base. NPA ≠ absence de consentement requis ; ATT ≠ consentement RGPD universel. |
| T05 | Mémoriser/respecter les choix et conserver leur preuve : signaux UMP/ATT, preuve minimale ; appareil/Google, éditeur selon accès réel. | 6(1)(c) candidate pour preuve et respect des obligations de consentement : art. 5(2), 7(1) et 7(3), limitée aux éléments nécessaires. Distinguer la mémorisation du refus de la preuve d’un consentement. | Message européen marqué « Publié », applications iOS/Android et même URL de confidentialité, boutons Autoriser/Refuser/Gérer les options et ciblage EEE/Royaume-Uni/Suisse confirmés par l’éditeur ; aucune synchronisation interapplications configurée. Fermeture sans choix désactivée selon le relevé précédent. Les paramètres d’intérêt légitime par défaut ne prouvent pas le choix individuel. Vérifier en pratique mémorisation, refus, réouverture/retrait et propagation des choix ; déterminer stockage, accès aux preuves et durée. Les journaux locaux de diagnostic ne sont pas une preuve serveur UMP démontrée. Les zéro impression et 0,00 USD sur sept jours n’établissent ni absence de traitement UMP ni validité du consentement. |
| T06a | Achat/restauration Sans Pub : identifiant pseudonyme, droits, transaction/reçu ; RevenueCat, Apple/Google. | 6(1)(b) candidate pour honorer l’achat non consommable et sa restauration. Les boutiques ont leurs traitements propres ; ne pas leur attribuer automatiquement le rôle de sous-traitant. | Vérifier le produit et les droits réellement associés, le minimum de données nécessaire et le parcours de suppression/restauration. |
| T06b | Vérifier les droits au lancement, y compris sans achat : profil pseudonyme/connexion RevenueCat. | 6(1)(f) à étudier : éviter des annonces indues pour les acheteurs et établir les droits ; nécessité et proportionnalité non démontrées par la seule intégration du SDK. | Documenter alternatives moins intrusives, notamment vérification locale ou initialisation différée, attentes des non-acheteurs, opposition et conséquences. Si la mise en balance échoue, revoir le traitement dans une mission mobile distincte. |
| T07 | Éventuelles pièces comptables de l’éditeur, distinctes des profils SDK et de la restauration. | 6(1)(c) seulement pour documents réellement détenus et obligation légale identifiée. Aucune obligation comptable généralisée à toutes les données RevenueCat. | Inventorier pièces, débiteur de l’obligation et texte applicable avant de fixer une durée. |
| T08 | Sécurité/disponibilité : compteur réseau, événements et incidents ; éditeur/Railway. | 6(1)(f) candidate pour prévenir les abus et diagnostiquer les pannes ; mise en balance, minimisation et accès restreint. | Identifier catégories exactes, export éventuel et besoin opérationnel ; l’article 32 ne justifie pas indistinctement tous les logs. |
| T09 | Demandes RGPD : e-mail, demande, réponse, identification strictement nécessaire ; éditeur/Gmail et prestataire sollicité. | 6(1)(c), art. 12–22, pour traiter la demande. Archive de défense éventuelle : finalité distincte, 6(1)(f) candidate à justifier. | Procédure de réponse, accès et purge ; pas de pièce d’identité systématique. Le délai de réponse d’un mois n’est pas une durée d’archive. |
| T10 | Pages web : IP/métadonnées HTTP, journaux ; éditeur/Hostinger. | 6(1)(f) candidate pour délivrer et protéger les pages, sous réserve de minimisation. Aucun consentement publicitaire web à inventer : aucun traceur ajouté par ces HTML. | Distinguer logs techniques nécessaires, mesures optionnelles et services ajoutés par l’hébergement. |

## Conservation, suppression et preuves à obtenir

| ID | Constat actuel | Règle proposée pour validation | Information ou action manquante |
| --- | --- | --- | --- |
| T01 | Catalogue remplacé lors d’actualisations ; titres connus cumulables. Fenêtre de huit jours et actualisation par défaut de 30 minutes ≠ effacement. | Catalogue courant jusqu’à remplacement/effacement ; conserver les références nécessaires aux listes. Aucun archivage de préférences serveur à introduire. | Vérifier si les anciens titres sans référence sont purgés ; sinon ne pas promettre leur purge. Logs liés : T08. |
| T02 | Pas de TTL ni bouton de purge globale ; modification locale, effacement système et éventuelles sauvegardes. | Éléments jusqu’au retrait demandé ou effacement de l’appareil ; préciser les limites pour les champs historiques et copies système. | Modalités d’effacement complet et résidu des champs notes/favoris ; aucune garantie de suppression des sauvegardes à la désinstallation. |
| T03 | Annulation et réconciliation des échéances ; intentions suspendues possibles. | Rappel actif jusqu’à annulation/échéance puis nettoyage ; notifications déjà affichées gérées par le système. | Définir fin de conservation des intentions suspendues et confirmer la purge après échéance ; ne pas annoncer une suppression immédiate automatique universelle. |
| T04 | 198 partenaires courants affichés et ajout automatique désactivé selon l’éditeur. Médiation contrôlée : « AdMob (par défaut) », Réseau AdMob avec 407 acheteurs autorisés, aucune autre source manuelle visible ni source tierce en cascade. Ces chiffres ne donnent ni les destinataires effectifs ni les SDK intégrés. Relevé précédent : zéro impression et 0,00 USD estimés sur les sept derniers jours de la vue rapportée. Aucune durée complète Google/partenaires vérifiée ; le relevé de console ne fournit pas de durée de conservation. | Arrêt des opérations fondées sur le consentement après retrait ; conservation antérieure à définir par acteur et finalité, avec exceptions justifiées. | Inventaire des catégories, rétentions/purges et copies chez les fournisseurs. Une politique Google générale n’est pas une durée unique AdMob. |
| T05 | Mécanisme UMP présent ; message indiqué publié/activé pour iOS et Android, sans application ajoutée à la synchronisation. Validité, renouvellement, stockage et archive de preuve non vérifiés ; aucun délai fourni par le relevé. Le contrôle des trois rubriques de médiation et les nombres de partenaires/acheteurs ne renseignent ni la conservation ni la purge des choix/preuves et ne prouvent pas leur propagation aux acteurs sollicités. | Choix utilisé jusqu’à modification, renouvellement requis ou effacement applicable ; preuve minimale séparée si nécessaire pour démontrer la conformité. | Durée de validité/renouvellement, point de départ et durée d’archive ; pas de durée « 13 mois » adoptée par défaut. |
| T06a | Achat Lifetime non consommable ; rétention distante et sauvegardes non vérifiées. | Conserver seulement les éléments nécessaires à la reconnaissance/restauration du droit pendant sa validité ; séparer toute archive légale et traiter les demandes d’effacement sans assimiler suppression de profil à révocation de l’achat. | Définir précisément fin du droit/service, données minimales, suppression RevenueCat, réassociation et conséquences. « À vie » n’autorise pas toute collecte à durée illimitée. |
| T06b | SDK susceptible de créer un profil sans achat ; aucune purge de ces profils établie. | Fixer une durée d’inactivité bornée et justifiée pour les profils sans achat, distincte des acheteurs. | Valeur, événement d’inactivité, capacité de purge et copies à confirmer auprès du prestataire ; aucune durée choisie arbitrairement ici. |
| T07 | Documents comptables détenus non inventoriés. | Archive séparée et accès limité, selon obligation effectivement applicable. | Texte, catégorie, durée et point de départ à identifier ; pas de « dix ans » pour tout le SDK. |
| T08 | Compteur : fenêtre 60 s ; entrée expirée supprimée à une requête ultérieure/arrêt du processus. Hobby : sept jours d’historique visible, pas preuve de destruction. Aucun backup de volume PostgreSQL dans l’onglet Backups selon l’éditeur. | Conserver le compteur selon le fonctionnement constaté. Pour logs, définir une fenêtre opérationnelle justifiée, puis purge ou extraction minimale d’incidents séparée et motivée. | Rétention effective Railway, journaux HTTP/DB, exports/CDN, copies hors Backups, terme de l’archive d’incident. Ne pas annoncer « aucune sauvegarde » de façon générale. |
| T09 | Messages reçus dans Gmail ; aucune règle de purge validée. | Dossier actif jusqu’à clôture de la réponse ; supprimer les justificatifs devenus inutiles. Éventuelle archive minimale de preuve séparée, avec durée justifiée et accès limité. | Durée après clôture et justification ; suppression corbeille/copies, éventuel gel limité en cas de litige. |
| T10 | Offre et rétentions opérationnelles Hostinger non établies. | Logs nécessaires pendant une période technique proportionnée ; copies/sauvegardes identifiées et supprimées selon calendrier documenté. | Catégories, durée active, sauvegardes et purge effective. Les délais contractuels après résiliation ne sont pas ceux des logs en activité. |

## Décisions attendues et suivi

Chaque décision doit renseigner : **ID ; base retenue et justification ; données couvertes ; début/fin ou durée ; archive séparée éventuelle ; mécanisme de purge ; responsable ; référence de preuve ; date de validation**. Statut initial pour toutes les lignes : **à valider**. La validation de la matrice ne constitue pas une modification du code ou des consoles.

Trois groupes de décisions :

1. **Éditeur** : relation de service pour T01–T03/T06a, analyses d’intérêt légitime pour T06b/T08/T10, procédure et archive T09 ; inventaire comptable T07.
2. **Prestataires/consoles** : pour T04–T05, le statut affiché et les réglages communiqués sont consignés ci-dessus ; restent la version effectivement publiée, les partenaires/finalités, les preuves et les durées, ainsi que le comportement sur appareil. Pour T06 et T08/T10, obtenir les réglages et documents encore manquants. Aucun paramètre n’est déduit du seul code.
3. **Mise en œuvre** : vérifier que chaque effacement promis est possible. Les écarts nécessitant une modification mobile/backend restent signalés, sans intervention dans ces projets.

Les transferts États-Unis, DPA et rôles des prestataires restent décrits dans le [dossier juridique](DOSSIER-JURIDIQUE-TELENOEL.md). Une base légale validée ne valide pas à elle seule un transfert international. Les droits des logos et la situation fiscale restent des points séparés : aucune licence ou exonération créée par cette matrice.

## Sources de qualification

- [CNIL — contrat](https://www.cnil.fr/fr/les-bases-legales/contrat) : nécessité objective et relation contractuelle à établir.
- [CNIL — intérêt légitime](https://www.cnil.fr/fr/les-bases-legales/interet-legitime) : finalité, nécessité et mise en balance ; pas de base par défaut.
- [CNIL — durées de conservation](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees) : distinguer usage actif et archive justifiée, avec accès limité.
- [RGPD, articles 12–22](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3) : gestion des droits et information, notamment durée ou critères de conservation.
- Les constats de code et documents des prestataires sont référencés dans le [dossier](DOSSIER-JURIDIQUE-TELENOEL.md) et l’[audit](AUDIT-TELENOEL.md). Les informations de distribution et de produit ci-dessus sont attribuées à l’éditeur.
