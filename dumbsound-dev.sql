-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 29, 2020 at 02:50 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbsound-dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `typeId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `startAcareer` int(11) DEFAULT NULL,
  `bio` varchar(1000) DEFAULT NULL,
  `pic` varchar(500) DEFAULT NULL,
  `cover` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `typeId`, `name`, `old`, `startAcareer`, `bio`, `pic`, `cover`, `createdAt`, `updatedAt`) VALUES
(5, 5, 'Blackpink', 4, 2016, 'a', 'https://www.wowkeren.com/display/images/photo/2020/06/03/00313737.jpg', 'https://i.pinimg.com/originals/5f/cc/06/5fcc06cbfa11feb233b129b2cdfe7ad0.jpg', '2020-06-23 08:49:10', '2020-06-23 08:49:10'),
(6, 5, 'Dewa19', 25, 1986, 'a', 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/04/18/1168286/content_images/670x335/20200418113257-1-ari-lasso-unggah-foto-lawas-band-dewa-001-endang-saputra.jpg', 'https://ignitegki.com/storage/post_thumbnail/201905/artikel-359-header.jpg.jpg', '2020-06-23 08:49:10', '2020-06-23 08:49:10'),
(7, 5, 'Nirvana', 33, 1987, 'a', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/3/577067304/577067304_95c773c2-a340-4808-b947-d7691520eabe_680_680.jpg', 'https://cdn140.picsart.com/281044521015201.jpg', '2020-06-23 09:00:56', '2020-06-23 09:00:56'),
(11, 4, 'Didi Kempot', 54, 2000, 'a', 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2020/05/3644ce5bd039cca0f167c763d7a76618.jpg', 'https://blogpictures.99.co/lagu-didi-kempot-header.jpg', '2020-06-24 16:21:16', '2020-06-24 16:21:16'),
(12, 4, 'Sayuri', 24, 2010, 'She start playing guitar since sixth grade. Her inspiration at the time were a japanese boyband group name Kanjani8. She start playing guitar because she want cover their song in band and wanted to accompany the vocals with guitar. Then she start to write her own song and performed live in the street at second year of middle school.', 'https://cdn.myanimelist.net/images/voiceactors/1/57707.jpg', 'https://1.bp.blogspot.com/-qD5Wd4Vm8dg/WnLUPOIoVEI/AAAAAAAABxc/FwptjnXOtcQ1dSG6sYOf0Y1QbkGWMZvnwCLcBGAs/s1600/Sayuri%2Bmikazuki%2Bno%2Bkoukai.jpg', '2020-06-24 16:29:15', '2020-06-24 16:29:15'),
(13, 5, 'Kufaku Band', 99, 1090, 'Band lagend dalam hal keburukan , anda jangan mendengarkan lagu-lagunya, bila anda tidak mau terkena diare akut', 'https://www.memecomic.id/data/articleimage/2f6f72ee060739b005bd2beb8c3d4a8b.jpg', 'https://f4.bcbits.com/img/0016335910_10.jpg', '2020-06-24 23:42:21', '2020-06-24 23:42:21'),
(14, 5, 'One Oke Rock', 15, 2005, 'a', 'https://matamatamusik.com/wp-content/uploads/2020/01/ONE-OK-ROCK.jpg', 'https://oneokrockfst.files.wordpress.com/2013/06/header-blog.jpg', '2020-06-24 23:42:21', '2020-06-24 23:42:21');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200611223645-create-user.js'),
('20200611223702-create-transaction.js'),
('20200623011625-create-type.js'),
('20200623011647-create-artist.js'),
('20200623011713-create-song.js');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `artistId` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `musicLink` varchar(255) DEFAULT NULL,
  `thumbnailLink` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `artistId`, `title`, `year`, `musicLink`, `thumbnailLink`, `createdAt`, `updatedAt`) VALUES
(1, 5, 'Kill This Love', 2019, 'https://gdurl.com/P1bZ', 'https://kpopchart.net/wp-content/uploads/2019/07/BLACKPINK-1.jpg', '2020-06-23 10:00:27', '2020-06-23 10:00:27'),
(2, 5, 'BOOMBAYAH', 2016, 'https://gdurl.com/8uFH', 'https://i.pinimg.com/564x/70/e2/68/70e268542c426592b9a7ad37427106ef.jpg', '2020-06-23 10:00:27', '2020-06-23 10:00:27'),
(3, 6, 'Sedang ingin bercinta', 2006, 'https://gdurl.com/te_X', 'https://images.genius.com/8ee59faa5330e2ebb8f10834c79848f8.1000x1000x1.jpg', '2020-06-23 10:01:08', '2020-06-23 10:01:08'),
(4, 7, 'Smells like teen spirit', 1991, 'https://gdurl.com/QUZA', 'https://i.pinimg.com/originals/ea/62/45/ea6245b12fd1c062c0f226285b64cb45.jpg', '2020-06-23 10:15:31', '2020-06-23 10:15:31'),
(6, 7, 'Come as you are', 1991, 'https://gdurl.com/tibh', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/ComeAsYouAre.jpg/220px-ComeAsYouAre.jpg', '2020-06-23 11:50:37', '2020-06-23 11:50:37'),
(7, 7, 'Lithium', 1991, 'https://gdurl.com/5WoZ', 'https://upload.wikimedia.org/wikipedia/en/6/6c/Nirvana-lithium-geffen-2-s.jpg', '2020-06-23 11:56:00', '2020-06-23 11:56:00'),
(9, 11, 'Ninggal tatu', 2018, 'https://gdurl.com/iSAk', 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/didi-kempot-nyanyi-di-panggung.jpg', '2020-06-24 16:24:38', '2020-06-24 16:24:38'),
(10, 12, 'Mikazuki', 2015, 'https://gdurl.com/2D1k', 'https://upload.wikimedia.org/wikipedia/en/f/f4/Mikazuki_no_Koukai_-_Sayuri_Reguler_Edition.jpg', '2020-06-24 16:30:51', '2020-06-24 16:30:51'),
(19, 13, 'Berak Tak Cebok', 1090, 'https://gdurl.com/HYElf', 'http://4.bp.blogspot.com/-hJPo1QozoWI/VZPKgzv2uXI/AAAAAAAAApE/jf0a6rmv68c/s400/kufaku.PNG', '2020-06-24 23:44:27', '2020-06-24 23:44:27'),
(20, 14, 'The Beginning', 2012, 'https://gdurl.com/noI5', 'https://data.whicdn.com/images/71799445/original.gif', '2020-06-24 23:44:27', '2020-06-24 23:44:27'),
(21, 14, 'We Are', 2017, 'https://gdurl.com/d5sv3', 'https://i1.sndcdn.com/artworks-000411634038-rj2bhf-t500x500.jpg', '2020-06-24 23:47:54', '2020-06-24 23:47:54'),
(22, 12, 'レイメイ', 2018, 'https://gdurl.com/KvVD', 'https://img.hmv.co.jp/hybridimage/news/images/18/1015/1008/headline_L.jpeg', '2020-06-24 23:47:54', '2020-06-24 23:47:54');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `startDate` datetime DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `bankAccount` varchar(255) DEFAULT NULL,
  `status` enum('Approved','Pending','Denied') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `startDate`, `dueDate`, `attachment`, `bankAccount`, `status`, `createdAt`, `updatedAt`) VALUES
(4, 9, '2020-06-25 09:20:01', '2020-07-25 10:27:50', 'asdawd', '1111', 'Approved', '2020-06-25 09:20:01', '2020-06-25 10:27:52');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(4, 'Solo', '2020-06-23 08:40:54', '2020-06-23 08:40:54'),
(5, 'Group', '2020-06-23 08:40:54', '2020-06-23 08:40:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `isAdmin`, `gender`, `phone`, `address`, `subscribe`, `createdAt`, `updatedAt`) VALUES
(8, 'admin', 'admin@gmail.com', '$2b$10$d2dFm7pRHM184SpvGDsV/erJWw7Da4kgbtxwQPqOp/HYgsGQA/qHG', 1, 'Male', '0101010101', 'In column on database', 1, '2020-06-24 04:14:44', '2020-06-24 04:14:44'),
(9, 'User', 'user@gmail.com', '$2b$10$w7nJNE9EEesmj4x0n9idbuDBJ/w7QDyw58Bd/hdadn4YB6tXfenHi', 0, 'Male', '08889898', 'Jl aja', 1, '2020-06-24 04:27:46', '2020-06-25 10:27:52'),
(34, 'Native', 'Native@gmail.com', '$2b$10$O2mVgLvrGh65jXLazlmEfOcHqjSlzXEmmG.fACqcKvmURQ/5ee6Qi', 0, 'Male', '097678', 'JL. Belokan depan perapatan', 0, '2020-06-29 12:30:25', '2020-06-29 12:30:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeId` (`typeId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artists`
--
ALTER TABLE `artists`
  ADD CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
