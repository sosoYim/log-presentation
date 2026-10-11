export type Screen = { src: string; width: number; height: number };

export type MaquetteStep = { title: string; desktop?: Screen; mobile?: Screen };

export type MaquetteSection = { id: string; label: string; description: string; steps: MaquetteStep[] };

export const maquetteSections: MaquetteSection[] = [
  {
    "id": "landing",
    "label": "Landing page",
    "description": "Promesse, recherche par dates et présentation du service.",
    "steps": [
      {
        "title": "Page d'accueil",
        "desktop": {
          "src": "/images/maquettes/landing/accueil-desktop.webp",
          "width": 1440,
          "height": 4453
        },
        "mobile": {
          "src": "/images/maquettes/landing/accueil-mobile.webp",
          "width": 398,
          "height": 5576
        }
      }
    ]
  },
  {
    "id": "connexion",
    "label": "Connexion",
    "description": "Connexion sans mot de passe : un lien envoyé par e-mail, puis le choix du rôle.",
    "steps": [
      {
        "title": "Créer un compte",
        "desktop": {
          "src": "/images/maquettes/connexion/creer-compte-desktop.webp",
          "width": 1440,
          "height": 900
        },
        "mobile": {
          "src": "/images/maquettes/connexion/creer-compte-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Se connecter",
        "desktop": {
          "src": "/images/maquettes/connexion/connexion-desktop.webp",
          "width": 1440,
          "height": 900
        },
        "mobile": {
          "src": "/images/maquettes/connexion/connexion-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Erreur de saisie",
        "desktop": {
          "src": "/images/maquettes/connexion/connexion-erreur-desktop.webp",
          "width": 1440,
          "height": 900
        },
        "mobile": {
          "src": "/images/maquettes/connexion/connexion-erreur-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Lien envoyé",
        "desktop": {
          "src": "/images/maquettes/connexion/lien-envoye-desktop.webp",
          "width": 1440,
          "height": 900
        },
        "mobile": {
          "src": "/images/maquettes/connexion/lien-envoye-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Choix du rôle",
        "desktop": {
          "src": "/images/maquettes/connexion/choix-role-desktop.webp",
          "width": 1440,
          "height": 900
        },
        "mobile": {
          "src": "/images/maquettes/connexion/choix-role-mobile.webp",
          "width": 390,
          "height": 760
        }
      }
    ]
  },
  {
    "id": "recherche",
    "label": "Demandeur · Rechercher",
    "description": "De la recherche à la demande : résultats en liste ou sur carte, fiche du logement, demande envoyée au locataire.",
    "steps": [
      {
        "title": "Résultats de recherche",
        "desktop": {
          "src": "/images/maquettes/recherche/resultats-desktop.webp",
          "width": 1440,
          "height": 1525
        },
        "mobile": {
          "src": "/images/maquettes/recherche/resultats-mobile.webp",
          "width": 390,
          "height": 2391
        }
      },
      {
        "title": "Vue carte",
        "mobile": {
          "src": "/images/maquettes/recherche/carte-mobile.webp",
          "width": 390,
          "height": 917
        }
      },
      {
        "title": "Fiche du logement",
        "desktop": {
          "src": "/images/maquettes/recherche/annonce-desktop.webp",
          "width": 1440,
          "height": 1485
        },
        "mobile": {
          "src": "/images/maquettes/recherche/annonce-mobile.webp",
          "width": 390,
          "height": 1608
        }
      },
      {
        "title": "Demande de réservation",
        "desktop": {
          "src": "/images/maquettes/recherche/demande-desktop.webp",
          "width": 1440,
          "height": 1451
        },
        "mobile": {
          "src": "/images/maquettes/recherche/demande-mobile.webp",
          "width": 390,
          "height": 1346
        }
      },
      {
        "title": "Demande envoyée",
        "desktop": {
          "src": "/images/maquettes/recherche/demande-envoyee-desktop.webp",
          "width": 1442,
          "height": 1470
        },
        "mobile": {
          "src": "/images/maquettes/recherche/demande-envoyee-mobile.webp",
          "width": 390,
          "height": 1679
        }
      }
    ]
  },
  {
    "id": "demandeur-compte",
    "label": "Demandeur · Compte",
    "description": "L'espace du demandeur : réservations, logements enregistrés, messagerie et paramètres.",
    "steps": [
      {
        "title": "Réservations",
        "desktop": {
          "src": "/images/maquettes/demandeur-compte/reservations-desktop.webp",
          "width": 1440,
          "height": 1394
        },
        "mobile": {
          "src": "/images/maquettes/demandeur-compte/reservations-mobile.webp",
          "width": 390,
          "height": 1354
        }
      },
      {
        "title": "Logements enregistrés",
        "desktop": {
          "src": "/images/maquettes/demandeur-compte/favoris-desktop.webp",
          "width": 1440,
          "height": 1480
        },
        "mobile": {
          "src": "/images/maquettes/demandeur-compte/favoris-mobile.webp",
          "width": 390,
          "height": 1996
        }
      },
      {
        "title": "Messages",
        "desktop": {
          "src": "/images/maquettes/demandeur-compte/messagerie-desktop.webp",
          "width": 1440,
          "height": 1300
        },
        "mobile": {
          "src": "/images/maquettes/demandeur-compte/messagerie-mobile.webp",
          "width": 390,
          "height": 894
        }
      },
      {
        "title": "Conversation",
        "mobile": {
          "src": "/images/maquettes/demandeur-compte/conversation-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Paramètres du compte",
        "desktop": {
          "src": "/images/maquettes/demandeur-compte/parametres-desktop.webp",
          "width": 1440,
          "height": 1474
        },
        "mobile": {
          "src": "/images/maquettes/demandeur-compte/parametres-mobile.webp",
          "width": 390,
          "height": 984
        }
      }
    ]
  },
  {
    "id": "depot-annonce",
    "label": "Annonceur · Déposer une annonce",
    "description": "Le dépôt d'annonce étape par étape, jusqu'à la mise en ligne.",
    "steps": [
      {
        "title": "Étape 1 · Le logement",
        "desktop": {
          "src": "/images/maquettes/depot-annonce/1-logement-desktop.webp",
          "width": 1440,
          "height": 1480
        },
        "mobile": {
          "src": "/images/maquettes/depot-annonce/1-logement-mobile.webp",
          "width": 390,
          "height": 1950
        }
      },
      {
        "title": "Étape 2 · Photos",
        "desktop": {
          "src": "/images/maquettes/depot-annonce/2-photos-desktop.webp",
          "width": 1440,
          "height": 1271
        },
        "mobile": {
          "src": "/images/maquettes/depot-annonce/2-photos-mobile.webp",
          "width": 390,
          "height": 1956
        }
      },
      {
        "title": "Étape 3 · Équipements",
        "desktop": {
          "src": "/images/maquettes/depot-annonce/3-equipements-desktop.webp",
          "width": 1440,
          "height": 1580
        },
        "mobile": {
          "src": "/images/maquettes/depot-annonce/3-equipements-mobile.webp",
          "width": 390,
          "height": 1799
        }
      },
      {
        "title": "Étape 5 · Aperçu",
        "desktop": {
          "src": "/images/maquettes/depot-annonce/5-apercu-desktop.webp",
          "width": 1448,
          "height": 1750
        },
        "mobile": {
          "src": "/images/maquettes/depot-annonce/5-apercu-mobile.webp",
          "width": 390,
          "height": 1855
        }
      },
      {
        "title": "Annonce publiée",
        "desktop": {
          "src": "/images/maquettes/depot-annonce/publiee-desktop.webp",
          "width": 1450,
          "height": 1310
        },
        "mobile": {
          "src": "/images/maquettes/depot-annonce/publiee-mobile.webp",
          "width": 390,
          "height": 1045
        }
      }
    ]
  },
  {
    "id": "annonceur-compte",
    "label": "Annonceur · Compte",
    "description": "L'espace de l'annonceur : tableau de bord, annonces, disponibilités et réponse aux demandes.",
    "steps": [
      {
        "title": "Tableau de bord",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/tableau-de-bord-desktop.webp",
          "width": 1440,
          "height": 1340
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/tableau-de-bord-mobile.webp",
          "width": 390,
          "height": 1959
        }
      },
      {
        "title": "Mes annonces",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/mes-annonces-desktop.webp",
          "width": 1440,
          "height": 1300
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/mes-annonces-mobile.webp",
          "width": 390,
          "height": 1801
        }
      },
      {
        "title": "Disponibilités",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/disponibilites-desktop.webp",
          "width": 1440,
          "height": 1200
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/disponibilites-mobile.webp",
          "width": 390,
          "height": 1931
        }
      },
      {
        "title": "Demandes reçues",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/demandes-recues-desktop.webp",
          "width": 1440,
          "height": 1200
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/demandes-recues-mobile.webp",
          "width": 390,
          "height": 1582
        }
      },
      {
        "title": "Détail d'une demande",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/demande-detail-desktop.webp",
          "width": 1440,
          "height": 1200
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/demande-detail-mobile.webp",
          "width": 390,
          "height": 1892
        }
      },
      {
        "title": "Accepter la demande",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/accepter-desktop.webp",
          "width": 1440,
          "height": 1200
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/accepter-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Refuser la demande",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/refuser-desktop.webp",
          "width": 1440,
          "height": 1400
        },
        "mobile": {
          "src": "/images/maquettes/annonceur-compte/refuser-mobile.webp",
          "width": 390,
          "height": 844
        }
      },
      {
        "title": "Messages",
        "desktop": {
          "src": "/images/maquettes/annonceur-compte/messagerie-desktop.webp",
          "width": 1440,
          "height": 1330
        }
      }
    ]
  },
  {
    "id": "etats",
    "label": "États intermédiaires",
    "description": "Les écrans hors du chemin nominal : recherche sans résultat, espaces vides, page 404 et menu mobile.",
    "steps": [
      {
        "title": "Aucun résultat",
        "desktop": {
          "src": "/images/maquettes/etats/aucun-resultat-desktop.webp",
          "width": 1440,
          "height": 1320
        },
        "mobile": {
          "src": "/images/maquettes/etats/aucun-resultat-mobile.webp",
          "width": 390,
          "height": 1283
        }
      },
      {
        "title": "Aucune réservation",
        "desktop": {
          "src": "/images/maquettes/etats/reservations-vide-desktop.webp",
          "width": 1440,
          "height": 824
        },
        "mobile": {
          "src": "/images/maquettes/etats/reservations-vide-mobile.webp",
          "width": 390,
          "height": 843
        }
      },
      {
        "title": "Tableau de bord vide",
        "desktop": {
          "src": "/images/maquettes/etats/tableau-de-bord-vide-desktop.webp",
          "width": 1440,
          "height": 1330
        },
        "mobile": {
          "src": "/images/maquettes/etats/tableau-de-bord-vide-mobile.webp",
          "width": 390,
          "height": 1104
        }
      },
      {
        "title": "Page 404",
        "desktop": {
          "src": "/images/maquettes/etats/404-desktop.webp",
          "width": 1440,
          "height": 990
        },
        "mobile": {
          "src": "/images/maquettes/etats/404-mobile.webp",
          "width": 390,
          "height": 759
        }
      },
      {
        "title": "Menu mobile",
        "mobile": {
          "src": "/images/maquettes/etats/menu-mobile.webp",
          "width": 390,
          "height": 1906
        }
      }
    ]
  }
];
