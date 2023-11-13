import { Video } from './video';

export const TABLEAUVIDEOS: Video[] = [
  {
    nom: 'Je vous présente mon nouveau chien! - VLOG #311',
    description:
      'Découvrez le tout dernier membre de notre famille, Zorro! Dans ce 311e vlog, je vous présente mon adorable nouveau chien et partage avec vous les moments spéciaux de notre première rencontre.',
    code: '123AAA',
    categories: ['Vlog', 'Style de vie', 'Divertissement'],
    auteur: {
      nom: 'Emma Johnson',
      utilisateur: 'emma_johnson',
      verifie: true,
      description:
        "Amoureuse des animaux, passionnée de photographie et toujours en quête d'aventures.",
    },
    datePublication: '12/12/2021',
    duree: 543,
    nombreVues: 43000,
    score: 5500,
    sousTitres: 'cc',
    avis: [
      {
        note: 9,
        commentaire: 'Quel beau chien!',
      },
      {
        note: 10,
        commentaire:
          "Emma, il est tellement mignon! J'ai hâte de le voir dans de futures vidéos!",
      },
      {
        note: 10,
        commentaire: "Son nom lui va trop bien! J'adore!",
      },
    ],
    image: 'https://picsum.photos/id/237/300/200',
  },

  {
    nom: 'Top 10 des plus beaux endroits pour une excursion en montagne',
    description:
      'Découvrez les endroits les plus incroyables pour une aventure en montagne dans cette vidéo palpitante!',
    code: '456ABC',
    categories: ['Aventure', 'Style de vie'],
    auteur: {
      nom: 'John Smith',
      utilisateur: 'john_smith99',
      verifie: false,
      description:
        'Amateur de randonnée et amoureux de la nature qui aime partager et faire découvrir sa passion.',
    },
    datePublication: '16/08/2022',
    duree: 430,
    nombreVues: 7900,
    score: 3000,
    sousTitres: 'ss',
    avis: [
      {
        note: 7,
        commentaire:
          "J'ajouterais aussi le Mont Blanc à ton classement. Sinon, c'est une bonne vidéo!",
      },
      {
        note: 8,
        commentaire:
          "Merci pour cette vidéo, John! J'ajoute tes recommandations à ma liste d'endroits à explorer.",
      },
    ],
    image: 'https://picsum.photos/id/29/300/200',
  },

  {
    nom: "L'évolution de la photographie au fil des années",
    description:
      "Plongez avec moi dans l'histoire de la photographie et découvrez comment elle a évolué au fil des décennies!",
    code: '767JDK',
    categories: ['Historique', 'Éducation'],
    auteur: {
      nom: 'Alice Dupont',
      utilisateur: 'alice_photographe',
      verifie: false,
      description: "Photographe professionnelle passionnée par l'art visuel.",
    },
    datePublication: '30/04/2020',
    duree: 360,
    nombreVues: 25000,
    score: 5100,
    sousTitres: 'ss',
    avis: [
      {
        note: 8,
        commentaire: 'La vidéo est très intéressante, merci!',
      },
      {
        note: 9,
        commentaire: "Merci Alice, j'ai beaucoup appris grâce à ta vidéo.",
      },
      {
        note: 7,
        commentaire:
          'Ton contenu est très informatif, comme toujours! Continue ton bon travail!',
      },
    ],
    image: 'https://picsum.photos/id/250/300/200',
  },

  {
    nom: 'Les 5 meilleurs trucs pour être plus productif - À VOIR!',
    description:
      'Apprenez 5 astuces essentielles pour améliorer votre productivité au quotidien.',
    code: '819AIF',
    categories: ['Style de vie'],
    auteur: {
      nom: 'David Martin',
      utilisateur: 'david_martin88',
      verifie: false,
      description: 'Entrepreneur et coach en efficacité.',
    },
    datePublication: '23/07/2023',
    duree: 240,
    nombreVues: 13000,
    score: 2000,
    sousTitres: 'ss',
    avis: [
      {
        note: 4,
        commentaire:
          "C'est une bonne vidéo, mais la qualité du son laisse à désirer. Serait-ce un problème technique?",
      },
      {
        note: 6,
        commentaire:
          "Je vais tenter de mettre tes trucs en pratique, merci David! Mon seul commentaire constructif serait d'alléger un peu tes prochaines vidéos, car il y a beaucoup d'animations.",
      },
    ],
    image: 'https://picsum.photos/id/180/300/200',
  },

  {
    nom: "Les Vagabonds de l'Horizon - Rêves d'émeraude (Performance Live)",
    description:
      "Visionnez une performance live époustouflante du groupe Les Vagabonds de l'Horizon, qui interprètent leur nouvelle chanson Rêves d'émeraude.",
    code: '154JDI',
    categories: ['Musique'],
    auteur: {
      nom: "Les Vagabonds de l'Horizon",
      utilisateur: 'lesvagabondsdelhorizon',
      verifie: true,
      description:
        'Groupe musical folk explorant de nouveaux horizons artistiques.',
    },
    datePublication: '04/05/2022',
    duree: 180,
    nombreVues: 300500,
    score: 8600,
    sousTitres: 'ss',
    avis: [
      {
        note: 10,
        commentaire: "Merci pour cette performance, j'adore cette chanson!",
      },
      {
        note: 9,
        commentaire: 'Quelle belle performance!',
      },
      {
        note: 10,
        commentaire:
          "Vous êtes tellement talentueux! J'ai très hâte de vous voir en spectacle!",
      },
      {
        note: 10,
        commentaire:
          "Les Vagabonds de l'Horizon: ma découverte musicale de l'année!",
      },
    ],
    image: 'https://picsum.photos/id/453/300/200',
  },

  {
    nom: "Élise Maréchal - Lueurs d'aurore (Vidéoclip officiel)",
    description:
      "Découvrez le vidéoclip officiel tant attendu de ma nouvelle chanson, Lueurs d'aurore!",
    code: '482SUB',
    categories: ['Musique'],
    auteur: {
      nom: 'Élise Maréchal',
      utilisateur: 'elisemarechal',
      verifie: true,
      description:
        'Artiste musicale émergente qui allie guitare, piano et voix pour livrer des pièces envoûtantes aux tonalités pop.',
    },
    datePublication: '14/01/2023',
    duree: 240,
    nombreVues: 59400,
    score: 6800,
    sousTitres: 'ss',
    avis: [
      {
        note: 10,
        commentaire:
          'Je suis complètement en amour avec cette chanson. Les paroles sont tellement touchantes!',
      },
      {
        note: 8,
        commentaire:
          "J'aime beaucoup la vidéo, elle s'agence très bien avec la chanson. J'ai hâte d'en voir plus!",
      },
    ],
    image: 'https://picsum.photos/id/399/300/200',
  },

  {
    nom: "Yogourt avec crumble aux fraises maison - Les recettes d'Aurélie",
    description:
      "Découvrez ma délicieuse recette de yogourt avec crumble aux fraises! Il s'agit du déjeuner parfait.",
    code: '130CIR',
    categories: ['Cuisine', 'Style de vie'],
    auteur: {
      nom: "Les Recettes d'Aurélie",
      utilisateur: 'lesrecettesdaurelie',
      verifie: false,
      description: 'Passionnée de cuisine et créatrice de recettes originales.',
    },
    datePublication: '08/03/2019',
    duree: 300,
    nombreVues: 42000,
    score: 4600,
    sousTitres: 'cc',
    avis: [
      {
        note: 6,
        commentaire:
          "Je trouve la recette un peu trop sucrée à mon goût: j'ai dû ajuster les mesures.",
      },
      {
        note: 7,
        commentaire:
          "Merci pour le partage, j'aime bien faire ce yogourt pour déjeuner! Le crumble est un peu sucré, mais qui n'aime pas le sucre?",
      },
    ],
    image: 'https://picsum.photos/id/493/300/200',
  },

  {
    nom: 'Comment créer son propre terrarium? - Jardinez avec Sophie',
    description:
      'Apprenez à créer votre propre terrarium en visionnant cette vidéo, qui explique chaque étape nécessaire pour y arriver!',
    code: '182ODA',
    categories: ['Style de vie'],
    auteur: {
      nom: 'Sophie Tremblay',
      utilisateur: 'sophie_jardinage',
      verifie: false,
      description:
        'Jardinière expérimentée qui aime partager sa passion pour les plantes.',
    },
    datePublication: '15/01/2017',
    duree: 425,
    nombreVues: 72000,
    score: 300,
    sousTitres: 'cc',
    avis: [
      {
        note: 3,
        commentaire:
          "Mon terrarium meurt à chaque fois que je tente l'expérience! Pourtant, je suis toutes tes instructions à la lettre. À l'aide!",
      },
      {
        note: 6,
        commentaire:
          'Bonne vidéo, mais je trouve que ton débit de voix est un peu rapide. Prends ton temps :)',
      },
    ],
    image: 'https://picsum.photos/id/530/300/200',
  },
];
