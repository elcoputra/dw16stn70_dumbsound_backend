-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 25, 2020 at 07:36 AM
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
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `typeId`, `name`, `old`, `startAcareer`, `createdAt`, `updatedAt`) VALUES
(5, 5, 'Blackpink', 4, 2016, '2020-06-23 08:49:10', '2020-06-23 08:49:10'),
(6, 5, 'Dewa19', 25, 1986, '2020-06-23 08:49:10', '2020-06-23 08:49:10'),
(7, 5, 'Nirvana', 33, 1987, '2020-06-23 09:00:56', '2020-06-23 09:00:56'),
(10, 5, 'BMTH', 200, 123, '2020-06-23 14:56:51', '2020-06-23 14:56:51'),
(11, 4, 'Didi Kempot', 54, 2000, '2020-06-24 16:21:16', '2020-06-24 16:21:16'),
(12, 4, 'Sayuri Fujita', 40, 2007, '2020-06-24 16:29:15', '2020-06-24 16:29:15'),
(13, 5, 'Kufaku Band', 9999, 1090, '2020-06-24 23:42:21', '2020-06-24 23:42:21'),
(14, 5, 'One Oke Rock', 15, 2005, '2020-06-24 23:42:21', '2020-06-24 23:42:21');

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
(1, 5, 'Kill This Love', 2019, 'https://gdurl.com/P1bZ', 'https://i.pinimg.com/564x/27/91/fb/2791fb957b146bab8c6997b4e7a508d5.jpg', '2020-06-23 10:00:27', '2020-06-23 10:00:27'),
(2, 5, 'BOOMBAYAH', 2016, 'https://gdurl.com/8uFH', 'https://i.pinimg.com/564x/70/e2/68/70e268542c426592b9a7ad37427106ef.jpg', '2020-06-23 10:00:27', '2020-06-23 10:00:27'),
(3, 6, 'Sedang ingin bercinta', 2006, 'https://gdurl.com/te_X', 'https://images.genius.com/8ee59faa5330e2ebb8f10834c79848f8.1000x1000x1.jpg', '2020-06-23 10:01:08', '2020-06-23 10:01:08'),
(4, 7, 'Smells like teen spirit', 1991, 'https://gdurl.com/QUZA', 'https://i.pinimg.com/originals/ea/62/45/ea6245b12fd1c062c0f226285b64cb45.jpg', '2020-06-23 10:15:31', '2020-06-23 10:15:31'),
(6, 7, 'Come as you are', 1991, 'https://gdurl.com/tibh', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/ComeAsYouAre.jpg/220px-ComeAsYouAre.jpg', '2020-06-23 11:50:37', '2020-06-23 11:50:37'),
(7, 7, 'Lithium', 1991, 'https://gdurl.com/5WoZ', 'https://upload.wikimedia.org/wikipedia/en/6/6c/Nirvana-lithium-geffen-2-s.jpg', '2020-06-23 11:56:00', '2020-06-23 11:56:00'),
(9, 11, 'Ninggal tatu', 2018, 'https://gdurl.com/iSAk', 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/didi-kempot-nyanyi-di-panggung.jpg', '2020-06-24 16:24:38', '2020-06-24 16:24:38'),
(10, 12, 'Mikazuki', 2015, 'https://gdurl.com/2D1k', 'https://upload.wikimedia.org/wikipedia/en/f/f4/Mikazuki_no_Koukai_-_Sayuri_Reguler_Edition.jpg', '2020-06-24 16:30:51', '2020-06-24 16:30:51'),
(19, 13, 'Berak Tak Cebok', 1090, 'https://gdurl.com/HYElf', 'http://4.bp.blogspot.com/-hJPo1QozoWI/VZPKgzv2uXI/AAAAAAAAApE/jf0a6rmv68c/s400/kufaku.PNG', '2020-06-24 23:44:27', '2020-06-24 23:44:27'),
(20, 14, 'The Beginning', 2012, 'https://gdurl.com/noI5', 'https://i1.sndcdn.com/artworks-000029576585-ccytyw-t500x500.jpg', '2020-06-24 23:44:27', '2020-06-24 23:44:27'),
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
(3, 9, '2020-06-24 04:28:52', '2020-07-24 04:28:52', 'test.jpg', '123123123123', 'Approved', '2020-06-24 04:28:52', '2020-06-24 14:30:09');

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
(8, 'admin', 'admin@gmail.com', '$2b$10$d2dFm7pRHM184SpvGDsV/erJWw7Da4kgbtxwQPqOp/HYgsGQA/qHG', 1, 'Male', '0101010101', 'In row on database', 1, '2020-06-24 04:14:44', '2020-06-24 04:14:44'),
(9, 'User', 'user@gmail.com', '$2b$10$w7nJNE9EEesmj4x0n9idbuDBJ/w7QDyw58Bd/hdadn4YB6tXfenHi', 0, 'Male', '08889898', 'Jl aja', 1, '2020-06-24 04:27:46', '2020-06-24 14:30:09'),
(10, 'user2 pass 1234', 'user2@gmail.com', '$2b$10$v8y.5/PeBNhvfzyBotn.HuAhZ0XM5n7iQMF1gkDlx6ci84Zjrylky', 0, 'Male', '081', 'Jl user2', 0, '2020-06-24 14:32:55', '2020-06-24 14:32:55');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
