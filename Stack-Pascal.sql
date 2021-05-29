-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
<<<<<<< HEAD
-- Generation Time: May 29, 2021 at 08:22 AM
=======
-- Generation Time: Apr 29, 2021 at 09:32 PM
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Stack-Pascal`
--

-- --------------------------------------------------------

--
-- Table structure for table `Books`
--

CREATE TABLE `Books` (
  `ID` int(5) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` float NOT NULL,
  `ISBN` varchar(20) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `book_editor` varchar(20) NOT NULL,
  `bookCondition` varchar(20) NOT NULL,
  `user_details` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `userID` int(11) NOT NULL,
<<<<<<< HEAD
  `email` varchar(20) NOT NULL,
  `luogo` varchar(255) NOT NULL
=======
  `email` varchar(20) NOT NULL
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Books`
--

<<<<<<< HEAD
INSERT INTO `Books` (`ID`, `name`, `price`, `ISBN`, `phone_number`, `subject`, `book_editor`, `bookCondition`, `user_details`, `date`, `userID`, `email`, `luogo`) VALUES
(3, '', 0, '', '', '', '', '', '', '2021-02-20', 1, '', ''),
(4, 'Hhj', 6666, 'Ghhj', '5555', 'Rtgg', 'Tygg', 'Used', 'Ghggv', '2021-02-20', 1, 'Ghhjghhtf', ''),
(5, 'Lol', 555, 'Ghhj', '255', 'Thh', 'Hhh', 'Used', 'Hhhj', '2021-02-20', 1, 'Ghj', ''),
(6, 'Yyy', 55, 'Hh', '22', 'Yhh', 'Hh', 'Used', 'Hhh', '2021-02-20', 1, 'Gg', '');
=======
INSERT INTO `Books` (`ID`, `name`, `price`, `ISBN`, `phone_number`, `subject`, `book_editor`, `bookCondition`, `user_details`, `date`, `userID`, `email`) VALUES
(3, '', 0, '', '', '', '', '', '', '2021-02-20', 1, ''),
(4, 'Hhj', 6666, 'Ghhj', '5555', 'Rtgg', 'Tygg', 'Used', 'Ghggv', '2021-02-20', 1, 'Ghhjghhtf'),
(5, 'Lol', 555, 'Ghhj', '255', 'Thh', 'Hhh', 'Used', 'Hhhj', '2021-02-20', 1, 'Ghj'),
(6, 'Yyy', 55, 'Hh', '22', 'Yhh', 'Hh', 'Used', 'Hhh', '2021-02-20', 1, 'Gg');
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `ID` int(11) NOT NULL,
  `ID_utente` int(11) NOT NULL,
  `published_date` date NOT NULL,
  `text` text NOT NULL,
<<<<<<< HEAD
  `post_id` int(11) NOT NULL
=======
  `post_id` int(11) NOT NULL,
  `upvotes` int(11) NOT NULL
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Comments`
--

<<<<<<< HEAD
INSERT INTO `Comments` (`ID`, `ID_utente`, `published_date`, `text`, `post_id`) VALUES
(69, 1, '2021-04-29', 'lol', 2),
(70, 54, '2021-04-29', 'Love this ', 7),
(71, 54, '2021-04-29', '', 7),
(72, 1, '2021-05-05', 'lol', 18),
(73, 1, '2021-05-05', 'this is real speech', 18),
(74, 1, '2021-05-06', 'arrival of the birds', 18),
(75, 1, '2021-05-06', 'Cool anime ', 19),
(76, 1, '2021-05-06', 'super', 19),
(84, 1, '2021-04-21', 'lol', 24),
(85, 1, '2021-05-08', 'test', 24);
=======
INSERT INTO `Comments` (`ID`, `ID_utente`, `published_date`, `text`, `post_id`, `upvotes`) VALUES
(69, 1, '2021-04-29', 'lol', 2, 0),
(70, 54, '2021-04-29', 'Love this ', 7, 0),
(71, 54, '2021-04-29', '', 7, 0);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

-- --------------------------------------------------------

--
-- Table structure for table `Community`
--

CREATE TABLE `Community` (
  `ID` int(1) NOT NULL,
  `name` varchar(40) NOT NULL,
  `number_participant` int(11) NOT NULL,
  `user_admin_ID` int(11) NOT NULL,
  `category` varchar(30) NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Community`
--

INSERT INTO `Community` (`ID`, `name`, `number_participant`, `user_admin_ID`, `category`, `date_created`) VALUES
(1, 'Test', 0, 1, 'Test', '2021-02-24'),
(2, 'Informatica', 0, 1, 'Lol ', '2021-02-19'),
(3, 'Relazioni ', 0, 1, 'Scuola ', '2021-02-19'),
(4, 'Storia', 0, 1, 'Storia', '2021-04-29');

-- --------------------------------------------------------

--
-- Table structure for table `Likes`
--

CREATE TABLE `Likes` (
  `like_ID` int(11) NOT NULL,
  `user_ID` int(11) NOT NULL,
  `post_ID` int(11) NOT NULL,
  `like_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Likes`
--

INSERT INTO `Likes` (`like_ID`, `user_ID`, `post_ID`, `like_date`) VALUES
(420, 1, 34, '2021-02-23'),
(436, 1, 36, '2021-02-24'),
<<<<<<< HEAD
(459, 1, 35, '2021-04-07'),
(536, 1, 23, '2021-05-08'),
(537, 1, 18, '2021-05-08'),
(538, 1, 7, '2021-05-08');
=======
(458, 1, 25, '2021-03-31'),
(459, 1, 35, '2021-04-07'),
(465, 54, 7, '2021-04-29'),
(466, 54, 6, '2021-04-29'),
(468, 1, 7, '2021-04-29'),
(469, 1, 8, '2021-04-29'),
(470, 1, 5, '2021-04-29');
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

-- --------------------------------------------------------

--
-- Table structure for table `News`
--

CREATE TABLE `News` (
  `id` int(11) NOT NULL,
  `likes` int(6) NOT NULL,
  `title` varchar(50) NOT NULL,
  `userID` int(6) NOT NULL,
  `date` date NOT NULL,
  `text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `News`
--

INSERT INTO `News` (`id`, `likes`, `title`, `userID`, `date`, `text`) VALUES
(1, 20, 'Gite', 1, '2021-01-13', 'Lorem ipsum dolor sit amet, consectetur adipisci '),
(2, 1, 'Monteore', 2, '2021-01-15', 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `Post`
--

CREATE TABLE `Post` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `date` date NOT NULL,
  `likes` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `community_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Post`
--

INSERT INTO `Post` (`ID`, `userID`, `date`, `likes`, `title`, `text`, `community_id`) VALUES
<<<<<<< HEAD
(6, 1, '2021-04-29', 3, 'blaise pascal', 'test for blaise', 2),
(7, 1, '2021-04-29', 2, 'Super ', 'Dc ', 1),
(9, 1, '2021-04-30', 0, 'Dome stai zitto', 'Dome ti uccido', 0),
(10, 1, '2021-04-30', 0, 'Matti fa schifo', 'fa sc', 0),
(14, 1, '2021-05-04', 0, 'Marvel', 'Marvel SuperHeroes', 0),
(15, 1, '2021-05-04', 0, 'Dc Marvel', 'Dc marvel super heroes', 0),
(16, 1, '2021-05-04', 0, 'ayo', 'wassup', 0),
(18, 1, '2021-05-04', 2, 'toughts about dream', 'motivational ', 3),
(22, 2, '2021-05-07', 2, 'test', 'test', 3),
(23, 1, '2021-05-07', 2, 'genio', 'genio\n\n', 2),
(26, 1, '2021-05-08', 0, 'test', 'test', 3),
(27, 1, '2021-05-08', 0, 'image-error', 'test', 2),
(28, 1, '2021-05-08', 0, 'mattia', 'ferrari', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Upvote`
--

CREATE TABLE `Upvote` (
  `id` int(11) NOT NULL,
  `comment_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Upvote`
--

INSERT INTO `Upvote` (`id`, `comment_id`, `user_id`, `date`) VALUES
(50, 74, 1, '2021-05-06'),
(56, 70, 1, '2021-05-06'),
(57, 70, 1, '2021-05-06'),
(67, 73, 1, '2021-05-06'),
(71, 72, 1, '2021-05-06'),
(72, 75, 1, '2021-05-06'),
(73, 76, 1, '2021-05-06'),
(74, 84, 1, '2021-05-08');
=======
(1, 1, '2021-04-28', 0, 'First Image Post', 'Test', 1),
(2, 1, '2021-04-29', 0, 'test', 'test', 2),
(3, 1, '2021-04-29', 0, 'final test', 'final test', 4),
(4, 1, '2021-04-29', 0, 'Real Final Test', 'lol', 2),
(5, 1, '2021-04-29', 2, 'post informatica', 'post informatica', 1),
(6, 1, '2021-04-29', 1, 'blaise pascal', 'test for blaise', 2),
(7, 1, '2021-04-29', 2, 'Super ', 'Dc ', 1),
(8, 1, '2021-04-29', 0, 'I am posting from my phone ', 'Lol', 2);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `class` varchar(2) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `course` varchar(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `followers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='//table for user login';

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`ID`, `name`, `surname`, `class`, `email`, `password`, `course`, `username`, `followers`) VALUES
(1, 'marvel', 'Asuenimhen', '5D', 'marvel', '15', 'info', 'marv150302', 1),
(2, 'Genio', 'Andrei', '5d', 'bruhgenio@gmail.com', '123', 'Info', 'raffa', 0),
(3, 'harsi', 'singh', '5d', 'harsi@gmail.com', '123', 'info', 'harisman', 0),
<<<<<<< HEAD
(55, 'fede', 'benassi', '5D', 'fede', '1', 'informatica', 'fede123', 0);
=======
(54, 'fede', 'benassi', '5D', 'fede', '1', 'informatica', 'fede1323', 0);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_comment_relation` (`ID_utente`),
  ADD KEY `post_comment_relation` (`post_id`);

--
-- Indexes for table `Community`
--
ALTER TABLE `Community`
<<<<<<< HEAD
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_admin_ID` (`user_admin_ID`);
=======
  ADD PRIMARY KEY (`ID`);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Indexes for table `Likes`
--
ALTER TABLE `Likes`
<<<<<<< HEAD
  ADD PRIMARY KEY (`like_ID`),
  ADD KEY `likes_ibfk_1` (`user_ID`),
  ADD KEY `post_ID` (`post_ID`);
=======
  ADD PRIMARY KEY (`like_ID`);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Indexes for table `News`
--
ALTER TABLE `News`
<<<<<<< HEAD
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);
=======
  ADD PRIMARY KEY (`id`);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Indexes for table `Post`
--
ALTER TABLE `Post`
<<<<<<< HEAD
  ADD PRIMARY KEY (`ID`),
  ADD KEY `community_id` (`community_id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `Upvote`
--
ALTER TABLE `Upvote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `user_id` (`user_id`);
=======
  ADD PRIMARY KEY (`ID`);
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Books`
--
ALTER TABLE `Books`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
<<<<<<< HEAD
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
=======
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- AUTO_INCREMENT for table `Community`
--
ALTER TABLE `Community`
  MODIFY `ID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `Likes`
--
ALTER TABLE `Likes`
<<<<<<< HEAD
  MODIFY `like_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=548;
=======
  MODIFY `like_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=471;
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- AUTO_INCREMENT for table `News`
--
ALTER TABLE `News`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Post`
--
ALTER TABLE `Post`
<<<<<<< HEAD
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `Upvote`
--
ALTER TABLE `Upvote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
=======
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
<<<<<<< HEAD
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
=======
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
<<<<<<< HEAD
  ADD CONSTRAINT `post_comment_relation` FOREIGN KEY (`post_id`) REFERENCES `ibus`.`Post` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_comment_relation` FOREIGN KEY (`ID_utente`) REFERENCES `ibus`.`User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Community`
--
ALTER TABLE `Community`
  ADD CONSTRAINT `community_ibfk_1` FOREIGN KEY (`user_admin_ID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Likes`
--
ALTER TABLE `Likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`post_ID`) REFERENCES `Post` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `News`
--
ALTER TABLE `News`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`community_id`) REFERENCES `Community` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Upvote`
--
ALTER TABLE `Upvote`
  ADD CONSTRAINT `upvote_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `Comments` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `upvote_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
=======
  ADD CONSTRAINT `post_comment_relation` FOREIGN KEY (`post_id`) REFERENCES `post` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_comment_relation` FOREIGN KEY (`ID_utente`) REFERENCES `user` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
>>>>>>> 5bedbad7b0d43ec1e1ec69df00f6b00f9f799eb1
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
