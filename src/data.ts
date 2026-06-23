import { Project, Experience, SkillCategory } from "./types";
import profileImage from "./assets/images/antema_profile_pic_1782162044773.jpg";
import cuaPreview from "./assets/images/cua/control_panneau.jpeg";
import meonPreview from "./assets/images/meOn/dashboard.png";
import motorlandPreview from "./assets/images/motorland/dashboard.png";

export const PROFILE_DATA = {
  name: "ANDRIAMBELOMANANA Ny Antema Fiderana",
  title: "Developpeur Fullstack",
  subtitle: "Je concois et developpe des applications web modernes, des plateformes SaaS et des solutions integrant l'intelligence artificielle.",
  email: "antema.fy01@gmail.com",
  phone: "+261 38 58 278 75",
  github: "https://github.com/Nyantemafy",
  linkedin: "https://www.linkedin.com/in/ny-antema-fiderana-andriambelomanana-872414349",
  avatar: profileImage,
  itUniversityUrl: "https://www.ituniversity-mg.com/page",
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "meon",
    title: "ME.ON",
    subtitle: "Plateforme collaborative etudiante intelligente",
    description: "Plateforme collaborative etudiante integrant entraide, evenements, projets collaboratifs, quiz, gamification et intelligence artificielle.",
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind CSS", "WebRTC"],
    features: [
      "Systeme de quiz interactifs generes par IA avec gamification et badges",
      "Salles d'etudes virtuelles et salons d'entraide vocaux en temps reel via WebRTC",
      "Espace de travail agile collaboratif avec tableaux de taches Kanban pour travaux de groupe",
      "Chat d'assistance intelligent connecte aux cours partages par les etudiants",
    ],
    role: "Developpeur Fullstack Lead et architecte initial. Responsable de la structure WebRTC et de l'architecture des modules IA.",
    challenges: "La difficulte principale venait de la synchronisation des salons d'entraide multi-utilisateurs et de la gestion de la bande passante WebRTC.",
    results: "Adoption immediate par plus de 350 etudiants de la promotion, avec un temps d'organisation des projets de groupe divise par deux.",
    image: meonPreview,
  },
  {
    id: "motorland",
    title: "MOTORLAND ERP",
    subtitle: "ERP industriel connecte",
    description: "Conception et developpement d'un ERP metier complet destine a optimiser les processus de gestion commerciale et logistique.",
    technologies: ["React", "Node.js", "PostgreSQL", "Nginx", "Linux"],
    features: [
      "Suivi des commandes, tresorerie, facturation automatique et export PDF",
      "Gestion d'inventaire dynamique avec notifications de seuil d'alerte",
      "Tableau de bord de rentabilite financiere et rapports analytiques",
      "Planification optimisee des equipes et des ressources materielles",
    ],
    role: "Developpeur Fullstack Freelance unique. Analyse des besoins metiers, conception PostgreSQL, API REST et deploiement complet sur VPS Linux.",
    challenges: "Migrer une ancienne base Excel fragmentee vers une structure relationnelle robuste sans perte d'historique de facturation.",
    results: "Outil metier operationnel 24/7 qui reduit de 35% le temps de gestion administrative hebdomadaire.",
    image: motorlandPreview,
  },
  {
    id: "cua",
    title: "GESTION DES PANNEAUX CUA",
    subtitle: "Geolocalisation, cadastre public et versions mobile/desktop",
    description: "Application metier de gestion, suivi fiscal et cartographie geolocalisee des panneaux publicitaires d'Antananarivo. Le projet comprend une version mobile React Expo livree en APK et une version desktop executable (.exe).",
    technologies: ["React", "React Expo", "APK mobile", "EXE desktop", "Node.js", "PostgreSQL", "Leaflet"],
    features: [
      "Cartographie interactive en temps reel des mobiliers publicitaires municipaux",
      "Gestion des redevances fiscales publicitaires et suivi des renouvellements",
      "Module terrain d'inspection des infractions avec fiches de conformite",
      "Versions mobile React Expo APK et desktop executable pour les agents CUA",
    ],
    role: "Prestataire developpeur principal. Developpement de l'interface geographique, de la version mobile React Expo (.apk), de la version desktop executable (.exe) et des requetes geospatiales.",
    challenges: "Uniformiser des donnees de geolocalisation heterogenes pour les projeter correctement sur la carte d'Antananarivo.",
    results: "Processus administratifs numerises et productivite des controleurs municipaux augmentee de 50% lors des tournees d'inspection.",
    image: cuaPreview,
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    company: "JO DESIGNS - BRANDING & DIGITAL",
    role: "Developpeur Fullstack Stagiaire",
    period: "Janvier 2026 - Present",
    description: "Participation au cycle de vie complet de Me.On, plateforme collaborative etudiante.",
    responsibilities: [
      "Developpement de composants frontend reactifs avec React et Tailwind CSS.",
      "Developpement backend NestJS avec une architecture modulaire et scalable.",
      "Modelisation et optimisation des requetes PostgreSQL.",
      "Integration d'APIs REST et de protocoles WebRTC temps reel.",
      "Implementation de fonctionnalites IA pour synthese de cours et generation de quiz.",
      "Collaboration avec le chef de produit pour aligner architecture et besoins utilisateurs.",
    ],
    technologies: ["React", "NestJS", "PostgreSQL", "Tailwind CSS", "WebRTC", "OpenAI API"],
  },
  {
    company: "MOTORLAND ERP",
    role: "Developpeur Fullstack Freelance",
    period: "Fevrier 2026 - Mai 2026",
    description: "Conception, developpement et deploiement en production d'un ERP metier complet.",
    responsibilities: [
      "Analyse des besoins operationnels et modelisation des processus de facturation.",
      "Architecture de la base de donnees PostgreSQL relationnelle indexee.",
      "Developpement d'un serveur REST performant avec Express.js et Node.js.",
      "Integration d'un client React fluide avec tableaux de bord metier.",
      "Deploiement sur VPS Linux avec PM2 et Nginx.",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Nginx", "Linux VPS", "PM2"],
  },
  {
    company: "COMMUNE URBAINE D'ANTANANARIVO (CUA)",
    role: "Prestataire Developpeur",
    period: "Juillet 2025 - Janvier 2026",
    description: "Developpement d'une solution de gestion des panneaux publicitaires, avec version mobile React Expo APK et version desktop executable.",
    responsibilities: [
      "Conception d'une interface cartographique interactive pour visualiser les zones.",
      "Adaptation de la solution en application mobile React Expo avec livraison APK.",
      "Preparation d'une version desktop executable pour les postes administratifs.",
      "Mise en place du backend Node.js pour les requetes par arrondissements.",
      "Structuration d'une base PostgreSQL pour les metadonnees geographiques et paiements.",
      "Documentation de maintenance et transfert de competences aux equipes techniques.",
    ],
    technologies: ["React", "React Expo", "APK", "EXE", "Node.js", "Express", "PostgreSQL", "Leaflet", "GeoJSON"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "APIs REST"],
  },
  {
    title: "Base de donnees",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Infrastructure",
    skills: ["Linux", "Nginx", "VPS", "Docker", "Git", "GitHub"],
  },
  {
    title: "IA & Automatisation",
    skills: ["Integration APIs IA", "Groq", "OpenAI", "Automatisation de processus"],
  },
  {
    title: "Soft Skills",
    skills: ["Autonomie", "Communication", "Organisation", "Travail en equipe", "Resolution de problemes", "Apprentissage rapide"],
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyse du besoin",
    description: "Comprehension approfondie des besoins utilisateurs, redaction des specifications techniques et fonctionnelles.",
  },
  {
    step: "02",
    title: "Conception de la solution",
    description: "Modelisation de la base de donnees, architecture systeme et wireframing de l'experience utilisateur.",
  },
  {
    step: "03",
    title: "Developpement Frontend",
    description: "Creation d'interfaces fluides sous React ou Next.js avec Tailwind CSS, en priorisant performance et ergonomie.",
  },
  {
    step: "04",
    title: "Developpement Backend",
    description: "Mise en place d'APIs REST sous NestJS ou Node.js, securisation des endpoints et integration IA.",
  },
  {
    step: "05",
    title: "Tests",
    description: "Tests unitaires, integration API et validation finale de l'UX pour garantir une solution robuste.",
  },
  {
    step: "06",
    title: "Deploiement",
    description: "Mise en production sur VPS Linux, configuration Nginx, automatisation et monitoring.",
  },
];
