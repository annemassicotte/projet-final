-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 26, 2024 at 03:04 AM
-- Server version: 8.0.31
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `videos`
--

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `id` int NOT NULL,
  `note` int NOT NULL,
  `commentaire` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fk_video` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avis`
--

INSERT INTO `avis` (`id`, `note`, `commentaire`, `fk_video`) VALUES
(4, 9, 'Quel beau chien!', 1),
(5, 10, 'Emma, il est tellement mignon! J\'ai hâte de le voir dans de futures vidéos!', 1),
(6, 10, 'Son nom lui va trop bien! J\'adore!', 1),
(7, 7, 'J\'ajouterais aussi le Mont Blanc à ton classement. Sinon, c\'est une bonne vidéo!', 2),
(8, 8, 'Merci pour cette vidéo, John! J\'ajoute tes recommandations à ma liste d\'endroits à explorer.', 2),
(9, 8, 'La vidéo est très intéressante, merci!', 4),
(10, 9, 'Merci Alice, j\'ai beaucoup appris grâce à ta vidéo.', 4),
(11, 7, 'Ton contenu est très informatif, comme toujours! Continue ton bon travail!', 4),
(12, 4, 'C\'est une bonne vidéo, mais la qualité du son laisse à désirer. Serait-ce un problème technique?', 5),
(13, 6, 'Je vais tenter de mettre tes trucs en pratique, merci David! Mon seul commentaire constructif serait d\'alléger un peu tes prochaines vidéos, car il y a beaucoup d\'animations.', 5),
(14, 10, 'Merci pour cette performance, j\'adore vos chansons!', 6),
(15, 9, 'Quelle belle performance!', 6),
(16, 10, 'Vous êtes tellement talentueux! J\'ai très hâte de vous voir en spectacle!', 6),
(17, 10, 'Les Vagabonds de l\'Horizon: ma découverte musicale de l\'année!', 6),
(18, 10, 'Je suis complètement en amour avec cette chanson. Les paroles sont tellement touchantes!', 7),
(19, 8, 'J\'aime beaucoup la vidéo, elle s\'agence très bien avec la chanson. J\'ai hâte d\'en voir plus!', 7),
(20, 6, 'Je trouve la recette un peu trop sucrée à mon goût: j\'ai dû ajuster les mesures.', 8),
(21, 7, 'Merci pour le partage, j\'aime bien faire ce yogourt pour déjeuner! Le crumble est un peu sucré, mais qui n\'aime pas le sucre?', 8),
(22, 3, 'Mon terrarium meurt à chaque fois que je tente l\'expérience! Pourtant, je suis toutes tes instructions à la lettre. À l\'aide!', 9),
(23, 6, 'Bonne vidéo, mais je trouve que ton débit de voix est un peu rapide. Prends ton temps :)', 9),
(24, 10, 'Ton chien ressemble au mien!', 1);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `categories` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_publication` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `duree` int NOT NULL,
  `nombre_vues` int NOT NULL DEFAULT '0',
  `score` int NOT NULL DEFAULT '0',
  `sous_titres` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `url_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nom_auteur` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `utilisateur` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `verifie` tinyint(1) NOT NULL,
  `description_auteur` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `nom`, `description`, `code`, `categories`, `date_publication`, `duree`, `nombre_vues`, `score`, `sous_titres`, `url_image`, `nom_auteur`, `utilisateur`, `verifie`, `description_auteur`) VALUES
(1, 'Je vous présente mon nouveau CHIEN! - VLOG #202', 'Découvrez le tout dernier membre de notre famille, Zorro! Dans ce 202e vlog, je vous présente mon adorable nouveau chien et partage avec vous les moments spéciaux de notre première rencontre.', '123BBC', 'Style de vie;Vlog', '2020-04-26', 743, 79403, 8001, 'ss', 'https://picsum.photos/id/237/300/200', 'Emma Johnson', 'emma_johnson', 1, 'Amoureuse des animaux, passionnée de photographie et toujours en quête d\'aventures.'),
(2, 'Top 12 des plus beaux endroits pour une excursion en montagne', 'Découvrez les endroits les plus incroyables pour une aventure en montagne dans cette vidéo palpitante!', '456ABC', 'Aventure;Style de vie', '2024-02-26', 430, 5683, 300, 'ss', 'https://picsum.photos/id/29/300/200', 'John Smith', 'john_smith99', 0, 'Amateur de randonnée et amoureux de la nature qui aime partager et faire découvrir sa passion.'),
(4, 'L\'évolution de la photographie au fil des années', 'Plongez avec moi dans l\'histoire de la photographie et découvrez comment elle a évolué au fil des décennies!', '767JDK', 'Historique;Éducation', '2019-07-09', 360, 14632, 3100, 'ss', 'https://picsum.photos/id/250/300/200', 'Alice Dupont', 'alice_photographe', 0, 'Photographe professionnelle passionnée par l\'art visuel.'),
(5, 'Les 5 meilleurs trucs pour être plus productif - À VOIR!', 'Apprenez 5 astuces essentielles pour améliorer votre productivité au quotidien.', '819AIF', 'Style de vie', '2023-07-23', 240, 98656, -5001, 'ss', 'https://picsum.photos/id/180/300/200', 'David Martin', 'david_martin88', 0, 'Entrepreneur et coach en efficacité.'),
(6, 'Les Vagabonds de l\'Horizon - Spectacle complet', 'Visionnez un spectacle époustouflant du groupe Les Vagabonds de l\'Horizon, qui interprètent les chansons de leur nouvel album Rêves d\'émeraude.', '154JDI', 'Musique', '2022-04-05', 4495, 1200009, 8600, 'ss', 'https://picsum.photos/id/453/300/200', 'Les Vagabonds de l\'Horizon', 'lesvagabondsdelhorizon', 1, 'Groupe musical folk explorant de nouveaux horizons artistiques.'),
(7, 'Élise Maréchal - Lueurs d\'aurore (Vidéoclip officiel)', 'Découvrez le vidéoclip officiel tant attendu de ma nouvelle chanson, Lueurs d\'aurore!', '482SUB', 'Musique', '2023-01-14', 240, 243655, 6800, 'ss', 'https://picsum.photos/id/399/300/200', 'Élise Maréchal', 'elisemarechal', 1, 'Artiste musicale émergente qui allie guitare, piano et voix pour livrer des pièces envoûtantes aux tonalités pop.'),
(8, 'Yogourt avec crumble aux fraises maison - Les recettes d\'Aurélie', 'Découvrez ma délicieuse recette de yogourt avec crumble aux fraises! Il s\'agit du déjeuner parfait.', '130CIR', 'Cuisine;Style de vie', '2019-03-08', 300, 87324, 4600, 'cc', 'https://picsum.photos/id/493/300/200', 'Les Recettes d\'Aurélie', 'lesrecettesdaurelie', 0, 'Passionnée de cuisine et créatrice de recettes originales.'),
(9, 'Comment créer son propre terrarium? - Jardinez avec Sophie', 'Apprenez à créer votre propre terrarium en visionnant cette vidéo, qui explique chaque étape nécessaire pour y arriver!', '182ODA', 'Style de vie', '2017-01-15', 425, 57888, -7000, 'cc', 'https://picsum.photos/id/530/300/200', 'Sophie Tremblay', 'sophie_jardinage', 0, 'Jardinière expérimentée qui aime partager sa passion pour les plantes.'),
(10, 'Le mystère des pyramides d\'Égypte', 'Les pyramides d\'Égypte vous ont toujours fasciné? Apprenez-en davantage sur ce mystère historique!', '987POI', 'Historique', '2023-12-19', 980, 1, 7000, 'ss', 'https://picsum.photos/id/46/300/200', 'Canal Découverte', 'canal_decouverte', 1, 'Canal destiné aux adeptes de mystères et d\'enquêtes.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_avis` (`fk_video`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `videos_avis` FOREIGN KEY (`fk_video`) REFERENCES `videos` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
