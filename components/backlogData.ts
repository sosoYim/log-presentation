export type Priority = "Must have" | "Should have" | "Could have" | "Won't have";

export type UserStory = {
  id: string;
  description: string;
  criteria: string[];
  exclusions: string[];
  priority: Priority;
};

export type Epic = { id: string; name: string; stories: UserStory[] };

export const epics: Epic[] = [
  {
    id: "Epic 01",
    name: "Authentification",
    stories: [
      {
        id: "US-01",
        description:
          "En tant qu'utilisateur, je souhaite me connecter sans mot de passe via un lien magique envoyé par e-mail afin d'accéder simplement et de manière sécurisée à mon compte sans avoir à mémoriser de mot de passe.",
        criteria: [
          "Saisie d'une adresse e-mail valide.",
          "Envoi immédiat d'un lien magique à usage unique (valable 15 min).",
          "Connexion automatique et redirection vers l'accueil au clic sur le lien.",
          "Message d'erreur explicite si le lien est expiré ou déjà utilisé.",
        ],
        exclusions: [
          "Connexion classique par identifiant et mot de passe.",
          "Authentification via réseaux sociaux tiers (Google, Apple, etc.).",
        ],
        priority: "Must have",
      },
      {
        id: "US-02",
        description:
          "En tant qu'étudiant, je souhaite valider mon adresse e-mail universitaire à la première connexion afin de certifier mon statut d'étudiant auprès de la communauté.",
        criteria: [
          "Saisie obligatoire d'une adresse académique reconnue (@univ-lyon1.fr, @insa-lyon.fr, etc.).",
          "Envoi d'un code ou lien de vérification sur l'adresse académique.",
          "Attribution du badge « Étudiant vérifié » après validation.",
          "Blocage des fonctionnalités de réservation tant que l'e-mail n'est pas validé.",
        ],
        exclusions: [
          "Connexion directe via les annuaires ENT / Edugain.",
          "Validation d'adresses personnelles grand public (Gmail, Yahoo).",
        ],
        priority: "Won't have",
      },
    ],
  },
  {
    id: "Epic 02",
    name: "Inscription",
    stories: [
      {
        id: "US-03",
        description:
          "En tant que nouvel utilisateur, je souhaite renseigner mes informations personnelles d'identité et de contact, avec le scan obligatoire de ma carte d'identité et facultatif de ma carte étudiante, afin de fiabiliser mon profil et sécuriser les démarches de sous-location.",
        criteria: [
          "Formulaire complet : nom, prénom, e-mail.",
          "Téléversement obligatoire de la CNI / passeport (formats : PDF, JPG, PNG ; max 5 Mo).",
          "Téléversement facultatif de la carte étudiante.",
          "Blocage de la validation de profil sans pièce d'identité valide.",
          "Stockage chiffré et sécurisé des pièces d'identité.",
        ],
        exclusions: [
          "Reconnaissance faciale biométrique en temps réel.",
          "Signature électronique d'un contrat cadre à l'inscription.",
        ],
        priority: "Must have",
      },
      {
        id: "US-04",
        description:
          "En tant qu'étudiant, je souhaite déclarer mon statut d'étudiant et mon campus de rattachement à Lyon afin de trouver des logements et interlocuteurs pertinents par rapport à mon lieu d'études.",
        criteria: [
          "Liste déroulante ou autocomplétion pour sélectionner son campus lyonnais (Doua, Manufacture, Berges du Rhône, Gerland...).",
          "Précision de la filière et de l'année d'études en cours.",
          "Enregistrement et affichage de l'information sur le récapitulatif du profil.",
        ],
        exclusions: [
          "Campus situés hors de l'académie de Lyon.",
          "Vérification automatisée des certificats de scolarité via API.",
        ],
        priority: "Could have",
      },
    ],
  },
  {
    id: "Epic 03",
    name: "Profil",
    stories: [
      {
        id: "US-05",
        description:
          "En tant qu'utilisateur, je souhaite disposer d'un profil complet (nom, prénom) et sélectionner mon rôle (annonceur ou demandeur) afin d'adapter l'expérience et l'interface de la plateforme à mes besoins.",
        criteria: [
          "Affichage du nom et prénom certifiés lors de l'inscription.",
          "Sélecteur de rôle clair : « Annonceur » ou « Demandeur ».",
          "Possibilité de basculer ou cumuler les rôles ultérieurement depuis les paramètres.",
          "Redirection vers le tableau de bord ou la recherche selon le rôle actif.",
        ],
        exclusions: [
          "Profils professionnels ou agences immobilières.",
          "Rôles d'administrateurs ou modérateurs.",
        ],
        priority: "Must have",
      },
      {
        id: "US-06",
        description:
          "En tant qu'utilisateur, je souhaite compléter ou modifier mes paramètres de profil et mes coordonnées afin de tenir mes informations personnelles à jour.",
        criteria: [
          "Écran d'édition dédié pour modifier son numéro de téléphone, sa biographie et sa photo de profil.",
          "Bouton d'enregistrement avec message de succès.",
          "Contrôle des formats de saisie (téléphone, adresse e-mail).",
        ],
        exclusions: [
          "Modification du nom/prénom certifié sans validation du support.",
          "Changement d'adresse universitaire sans nouvelle procédure de contrôle.",
        ],
        priority: "Should have",
      },
    ],
  },
  {
    id: "Epic 04",
    name: "Navigation",
    stories: [
      {
        id: "US-07",
        description:
          "En tant qu'utilisateur mobile, je souhaite naviguer entre les rubriques via une barre mobile fixe en bas d'écran avec les boutons « Logements », « Favoris », « Messages » et « Profil » afin d'accéder facilement à chaque section clé.",
        criteria: [
          "Barre inférieure fixe et visible lors du défilement.",
          "4 boutons présents avec icône et libellé respectifs.",
          "Mise en surbrillance visuelle de l'onglet actif.",
          "Navigation fluide et immédiate sans rechargement lourd.",
        ],
        exclusions: [
          "Menu tiroir latéral (burger menu) sur smartphone.",
          "Personnalisation de l'agencement des boutons par l'utilisateur.",
        ],
        priority: "Must have",
      },
      {
        id: "US-08",
        description:
          "En tant qu'annonceur, je souhaite accéder à mon tableau de bord regroupant mes annonces et mes demandes reçues afin de piloter la gestion de mes sous-locations au même endroit.",
        criteria: [
          "Espace dédié accessible depuis le profil / rôle annonceur.",
          "Liste des annonces publiées, masquées ou en brouillon.",
          "Liste des demandes reçues avec statut de traitement.",
          "Accès direct aux actions d'édition et de réponse.",
        ],
        exclusions: [
          "Tableaux de bord financiers avancés ou déclarations fiscales.",
          "Export automatisé des statistiques en format tableur.",
        ],
        priority: "Must have",
      },
    ],
  },
  {
    id: "Epic 05",
    name: "Annonce - Création",
    stories: [
      {
        id: "US-09",
        description:
          "En tant qu'annonceur, je souhaite saisir l'adresse du logement avec autocomplétion et géocodage (étape 1/5) afin de localiser précisément mon bien sans risque d'erreur.",
        criteria: [
          "Champ adresse connecté à une API de géocodage.",
          "Suggestions interactives dès 3 caractères saisis.",
          "Renseignement automatique de la rue, du code postal, de la ville et des coordonnées GPS.",
          "Affichage d'un marqueur de confirmation sur une mini-carte.",
          "Passage à l'étape suivante conditionné à une adresse géocodée.",
        ],
        exclusions: [
          "Saisie manuelle libre sans géocodage valide.",
          "Adresses situées hors de la zone métropolitaine de Lyon.",
        ],
        priority: "Must have",
      },
      {
        id: "US-10",
        description:
          "En tant qu'annonceur, je souhaite téléverser les photos de mon logement (étape 2/5) afin de valoriser visuellement mon offre de sous-location.",
        criteria: [
          "Zone de dépôt par glisser-déposer ou explorateur de fichiers.",
          "Téléversement d'au minimum 1 photo (maximum 10 photos).",
          "Formats supportés : JPG, PNG, WEBP (taille max 5 Mo par image).",
          "Prévisualisation, réorganisation et suppression de chaque photo avant validation.",
          "Choix de la photo de couverture principale.",
        ],
        exclusions: [
          "Téléversement de vidéos ou de visites virtuelles 3D.",
          "Outils intégrés de retouche d'image (recadrage, filtres).",
        ],
        priority: "Must have",
      },
      {
        id: "US-11",
        description:
          "En tant qu'annonceur, je souhaite préciser le type de bien (Studio, T1, T2...), la surface en m² et les équipements (meublé, wifi, lave-linge...) (étape 3/5) afin de décrire fidèlement les spécificités de mon logement.",
        criteria: [
          "Sélecteur de typologie : Studio, T1, T2, T3, Colocation, Chambre.",
          "Champ numérique pour la superficie en m².",
          "Cases à cocher pour les équipements clés : meublé, wifi, lave-linge, cuisine équipée, balcon, etc.",
          "Zone de texte pour le descriptif libre du logement.",
        ],
        exclusions: [
          "Téléversement obligatoire de diagnostics immobiliers complets (DPE).",
          "Métrage certifié loi Carrez.",
        ],
        priority: "Must have",
      },
      {
        id: "US-12",
        description:
          "En tant qu'annonceur, je souhaite renseigner le loyer mensuel et les dates de sous-location autorisées (étape 4/5) afin de fixer les critères financiers et temporels de mon offre.",
        criteria: [
          "Saisie du montant du loyer mensuel charges comprises en euros.",
          "Sélecteur de date de début et de fin autorisées via calendrier.",
          "Contrôle de cohérence (date de fin obligatoirement postérieure à la date de début).",
          "Champ optionnel pour le dépôt de garantie (caution).",
        ],
        exclusions: [
          "Grille tarifaire dynamique par nuitée ou week-end.",
          "Séquestre en ligne de la caution à cette étape.",
        ],
        priority: "Must have",
      },
      {
        id: "US-13",
        description:
          "En tant qu'annonceur, je souhaite publier l'annonce après confirmation de l'accord du propriétaire (étape 5/5) afin de garantir la conformité juridique de ma sous-location.",
        criteria: [
          "Écran récapitulatif complet des informations saisies (étapes 1 à 4).",
          "Case à cocher obligatoire attestant de l'accord écrit du propriétaire bailleur.",
          "Bouton « Publier » activé uniquement si la case est cochée.",
          "Publication immédiate et redirection vers la vue publique de l'annonce.",
        ],
        exclusions: [
          "Contrôle juridique préalable par huissier ou modérateur humain.",
          "Notification automatique envoyée par courrier au propriétaire.",
        ],
        priority: "Must have",
      },
    ],
  },
  {
    id: "Epic 06",
    name: "Géolocalisation - Carte",
    stories: [
      {
        id: "US-14",
        description:
          "En tant que demandeur, je souhaite visualiser les logements disponibles sur une carte interactive claire et intuitive afin d'explorer l'offre selon sa localisation géographique.",
        criteria: [
          "Carte interactive affichant les marqueurs des logements disponibles.",
          "Regroupement en clusters lors du dézoom pour une lisibilité optimale.",
          "Clic sur un marqueur ouvrant une vignette d'aperçu (photo, prix, type).",
          "Déplacement et zoom réactifs avec mise à jour des biens affichés.",
        ],
        exclusions: [
          "Affichage public de l'adresse exacte et du numéro de rue.",
          "Vue 3D ou Street View intégrée.",
        ],
        priority: "Should have",
      },
      {
        id: "US-15",
        description:
          "En tant qu'utilisateur, je souhaite utiliser ma géolocalisation afin de centrer directement la recherche et la carte autour de ma position actuelle.",
        criteria: [
          "Fonction de géolocalisation.",
          "Demande d'autorisation de géolocalisation via le navigateur.",
          "Centrage automatique de la carte sur l'emplacement de l'utilisateur.",
          "Centrage par défaut sur le centre de Lyon en cas de refus d'autorisation.",
        ],
        exclusions: [
          "Géolocalisation continue en tâche de fond.",
          "Partage de coordonnées GPS privées avec d'autres utilisateurs.",
        ],
        priority: "Could have",
      },
    ],
  },
  {
    id: "Epic 07",
    name: "Recherche - Filtres & Choix",
    stories: [
      {
        id: "US-16",
        description:
          "En tant que demandeur, je souhaite filtrer les annonces par dates de séjour et budget loyer maximum afin d'isoler les offres compatibles avec mes disponibilités et mes moyens.",
        criteria: [
          "Sélecteur de date d'arrivée et date de départ souhaitées.",
          "Curseur ou champ de saisie du loyer mensuel maximum.",
          "Filtrage immédiat masquant les logements indisponibles ou hors budget.",
          "Compteur du nombre de résultats correspondant aux critères.",
        ],
        exclusions: [
          "Négociation directe du loyer sur les résultats de recherche.",
          "Alertes e-mail programmées sur de nouvelles offres.",
        ],
        priority: "Must have",
      },
      {
        id: "US-17",
        description:
          "En tant que demandeur, je souhaite filtrer les annonces par secteur de la Métropole de Lyon et équipements clés afin de cibler les quartiers et le confort désirés.",
        criteria: [
          "Liste à choix multiples des arrondissements de Lyon (1er au 9e) et communes métropolitaines.",
          "Filtres à cocher pour les équipements indispensables (wifi, meublé, machine à laver).",
          "Actualisation instantanée des logements correspondants.",
          "Bouton permettant de réinitialiser tous les filtres en un clic.",
        ],
        exclusions: [
          "Filtre par ligne précise de transport en commun (métro, tramway).",
          "Filtres basés sur l'étage ou l'exposition.",
        ],
        priority: "Should have",
      },
      {
        id: "US-18",
        description:
          "En tant que demandeur, je souhaite consulter les résultats sous forme de liste de vignettes responsive afin de lire confortablement les caractéristiques des offres sur tous les écrans.",
        criteria: [
          "Présentation en grille de vignettes adaptée au support (mobile, tablette, desktop).",
          "Informations visibles sur la vignette : photo, prix, quartier, type de bien, dates.",
          "Bouton d'ajout aux favoris accessible directement sur la vignette.",
          "Clic sur une vignette ouvrant la fiche détaillée du logement.",
        ],
        exclusions: ["Comparateur côte à côte multi-annonces.", "Exportation des fiches au format PDF."],
        priority: "Must have",
      },
    ],
  },
  {
    id: "Epic 08",
    name: "Annonce - Information",
    stories: [
      {
        id: "US-19",
        description:
          "En tant que demandeur, je souhaite consulter la fiche détaillée avec carrousel photos, caractéristiques, équipements, profil de l'hôte et bouton réserver/contacter afin de disposer de toutes les informations pour choisir mon hébergement.",
        criteria: [
          "Carrousel interactif des photos du logement.",
          "Bloc récapitulant les caractéristiques : loyer, charges, superficie, dates.",
          "Liste claire des équipements fournis.",
          "Encadré profil de l'hôte (prénom, statut vérifié, campus).",
          "Boutons d'action visibles : « Réserver » et « Contacter l'hôte ».",
        ],
        exclusions: [
          "Affichage public du numéro de téléphone ou de l'adresse exacte de l'hôte.",
          "Téléchargement d'un livret d'accueil en PDF.",
        ],
        priority: "Must have",
      },
      {
        id: "US-20",
        description:
          "En tant que demandeur, je souhaite simuler le coût indicatif global du séjour selon les dates choisies afin de connaître précisément la dépense totale liée à la sous-location.",
        criteria: [
          "Sélecteur de dates de séjour sur la page de l'annonce.",
          "Calcul dynamique au prorata temporis selon le loyer mensuel.",
          "Détail transparent : loyer global estimé, charges incluses, caution indicative.",
          "Mention explicite « Coût indicatif non contractuel ».",
        ],
        exclusions: [
          "Simulation d'aides au logement (APL / CAF).",
          "Échéancier de prélèvements bancaires fractionnés.",
        ],
        priority: "Should have",
      },
    ],
  },
  {
    id: "Epic 09",
    name: "Annonce - Favoris",
    stories: [
      {
        id: "US-21",
        description:
          "En tant que demandeur, je souhaite enregistrer des annonces en favoris et les retrouver dans un onglet dédié « Mes Favoris » afin de mémoriser mes offres préférées et les retrouver rapidement.",
        criteria: [
          "Bouton favori (cœur) disponible sur les vignettes et sur la fiche détaillée.",
          "Ajout et suppression instantanés avec changement d'état visuel du bouton.",
          "Onglet « Favoris » listant toutes les annonces sauvegardées par l'utilisateur connecté.",
          "Mémorisation pérenne des favoris d'une session à l'autre.",
        ],
        exclusions: [
          "Création de dossiers ou sous-catégories de favoris personnalisés.",
          "Partage public de listes de favoris par lien externe.",
        ],
        priority: "Should have",
      },
    ],
  },
  {
    id: "Epic 10",
    name: "Messagerie & Conversation",
    stories: [
      {
        id: "US-22",
        description:
          "En tant que demandeur, je souhaite initier une conversation contextuelle directement depuis une annonce afin de poser mes questions à l'annonceur en référence directe au bien.",
        criteria: [
          "Clic sur « Contacter l'hôte » ouvrant directement un fil de discussion.",
          "En-tête du fil rappelant la photo, le titre et le montant du bien concerné.",
          "Notification instantanée envoyée à l'annonceur à la réception du message.",
          "Rapprochement du fil dans l'onglet « Messages » des deux comptes.",
        ],
        exclusions: [
          "Envoi de pièces jointes lourdes lors du premier message.",
          "Appels audio ou vidéo intégrés à l'application.",
        ],
        priority: "Must have",
      },
      {
        id: "US-23",
        description:
          "En tant qu'utilisateur, je souhaite échanger des messages en temps réel pour planifier une visite afin de fixer une date de visite sans quitter la plateforme.",
        criteria: [
          "Envoi et réception instantanés sans rafraîchissement d'écran.",
          "Horodatage précis de chaque message échangé.",
          "Indicateur de message non lu dans la navigation.",
          "Historique de conversation conservé et consultable.",
        ],
        exclusions: [
          "Synchronisation automatique avec un calendrier externe (Google Calendar).",
          "Visioconférence intégrée pour visite virtuelle en direct.",
        ],
        priority: "Should have",
      },
    ],
  },
  {
    id: "Epic 11",
    name: "Disponibilité & Réservation",
    stories: [
      {
        id: "US-24",
        description:
          "En tant que demandeur, je souhaite faire et voir mes demandes de réservation aux dates indiquées afin de formaliser mon souhait d'occuper le bien et suivre le traitement de mon dossier.",
        criteria: [
          "Formulaire de réservation avec choix précis des dates de séjour.",
          "Envoi de la demande à l'annonceur et confirmation visuelle pour le demandeur.",
          "Suivi en temps réel de l'état : « En attente », « Acceptée », « Refusée », « Annulée ».",
          "Possibilité d'annuler une demande tant qu'elle n'est pas traitée.",
        ],
        exclusions: [
          "Paiement en ligne immédiat par carte bancaire.",
          "Gestion de pénalités d'annulation financière.",
        ],
        priority: "Must have",
      },
      {
        id: "US-25",
        description:
          "En tant qu'annonceur, je souhaite accepter ou refuser une réservation afin de sélectionner le candidat retenu pour la période définie.",
        criteria: [
          "Notification reçue pour toute nouvelle demande de réservation.",
          "Consultation des dates demandées et du profil vérifié de l'étudiant.",
          "Actions possibles en un clic : « Accepter » ou « Refuser ».",
          "Mise à jour du calendrier du logement en cas d'acceptation.",
          "Notification automatique transmise au demandeur avec le résultat.",
        ],
        exclusions: [
          "Signature électronique automatique du bail de sous-location.",
          "Critères de validation automatique sans accord explicite.",
        ],
        priority: "Must have",
      },
    ],
  },
  {
    id: "Epic 12",
    name: "Compte - Information",
    stories: [
      {
        id: "US-26",
        description:
          "En tant qu'annonceur, je souhaite gérer mon annonce, mettre à jour les disponibilités de mon logement à sous-louer et consulter les demandes reçues pour les accepter/refuser afin de maîtriser mon offre et son occupation.",
        criteria: [
          "Tableau de bord complet de gestion de l'annonce.",
          "Outil de mise à jour du calendrier de disponibilité à tout moment.",
          "Possibilité d'ajuster le loyer ou de suspendre la visibilité de l'annonce.",
          "Suivi centralisé des demandes traitées et en attente.",
        ],
        exclusions: [
          "Synchronisation multi-plateforme via calendrier iCal (Airbnb, Booking).",
          "Multi-gestion de parc immobilier sur un compte étudiant unique.",
        ],
        priority: "Must have",
      },
    ],
  },
  {
    id: "Epic 13",
    name: "Compte - Avis",
    stories: [
      {
        id: "US-27",
        description:
          "En tant que demandeur, je souhaite attribuer une note de 1 à 5 étoiles et publier un avis à la fin de la sous-location afin d'évaluer mon séjour et informer les futurs étudiants.",
        criteria: [
          "Formulaire d'avis débloqué uniquement après la fin de la période de séjour réservée.",
          "Notation obligatoire de 1 à 5 étoiles et champ de commentaire textuel.",
          "Publication de l'avis sur la fiche du logement et sur le profil de l'hôte.",
          "Recalcul dynamique de la moyenne des avis de l'annonceur.",
        ],
        exclusions: [
          "Dépôt d'avis sans séjour préalablement validé et effectué sur la plateforme.",
          "Évaluation du demandeur par l'annonceur dans ce premier périmètre.",
        ],
        priority: "Could have",
      },
    ],
  },
];
