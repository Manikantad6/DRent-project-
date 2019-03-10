-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2019 at 10:27 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drent`
--

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `mobileno` int(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `usertype` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`username`, `password`, `mobileno`, `address`, `usertype`) VALUES
('geethanjaligeetha1997@gmail.co', '81dc9bdb52d04dc20036dbd8313ed0', 2147483647, '9/37, KOTHA VURU', 'Landlord');

-- --------------------------------------------------------

--
-- Table structure for table `usertable1`
--

CREATE TABLE `usertable1` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `mobileno` varchar(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `usertype` varchar(15) NOT NULL,
  `eth_address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable1`
--

INSERT INTO `usertable1` (`id`, `name`, `username`, `password`, `mobileno`, `address`, `usertype`, `eth_address`) VALUES
(1, '', 'arunanukala2015@gmail.com', 'd48477958ae13379aa42bfd98f3b9a3e', '6300298828', 'chinnagonnuru', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(2, '', 'bhavanibhanu593@gmail.com', '88a3ef211df5c4fe4b50c94ab3a2bb12', '9876543201', 'pamarru', 'Tenant', ''),
(3, '', 'haneesha252@gmail.com', 'af4140ce62d084527859db4790908655', '9876543201', 'machilipatnam', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(4, '', 'hemalatha23798@gmail.com', 'f668e8a5f26d88c43ef06194a4c2a10f', '7780653909', '1/101 nadupuru', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(5, '', 'lakshminarmada543@gmail.com', '379aaca0662db8d1bf1294c1477a9d3a', '8247515153', 'Challapalli', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(6, '', 'm.devanabohgfhtyina@gmailh.com', '07cd55c7b42715ec44c133a6a165e8d2', '9160300573', 'this is test address', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(7, '', 'm.devanaboyina@gmailh.com', '07cd55c7b42715ec44c133a6a165e8d2', '9160300573', 'this is test address', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(8, '', 'preethi.appikatla@gmail.com', '7e6a037ed05d51023c83f0133be9b986', '6302621793', 'pamarru', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(9, '', 'preethi3872@gmail.com', 'af2f6fe177905cd1fbabaa9dbf13b4d3', '6302621792', 'Pamarru', 'Tenant', ''),
(10, '', 'singgfsgh.deepkmendra793@gmail', '07cd55c7b42715ec44c133a6a165e8d2', '7837945618', 'S.NO-12, H.NO-06, FLAT NO.-03, MARUNJI,', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(11, '', 'singh.deenfghfghpendra793@gmai', '8a9bd22a553cfc58b5a17ceb84cf67f1', '7837945618', 'S.NO-12, H.NO-06, FLAT NO.-03, MARUNJI,', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(12, '', 'singh.deepbfgdfgendra793@gmail', '26a71f4c9f76750d77c5a154b0898860', '7837945618', 'S.NO-12, H.NO-06, FLAT NO.-03, MARUNJI,', 'Tenant', ''),
(13, '', 'singh.deependra793@gmail.com', 'bdfg', '7837945618', 'S.NO-12, H.NO-06, FLAT NO.-03, MARUNJI,', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(14, '', 'singh.dfgrfgeependra793@gmail.', '<md5 HASH object @ 0x00000239C121B508>', '7837945618', 'S.NO-12, H.NO-06, FLAT NO.-03, MARUNJI,', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(15, '', 'sowjanyaprathi19@gmail.com', 'e255d3dbea1aea6c7e9e3d344fa9085c', '6300362049', 'penduru', 'Tenant', ''),
(16, '', 'm.devanaboyina111@gmailh.com', '07cd55c7b42715ec44c133a6a165e8d2', '9912025195', '22/4 kankerkhera, meerut cantt 27/8/1994', 'Tenant', ''),
(18, '', 'mani@gmail.com', '07cd55c7b42715ec44c133a6a165e8d2', '9912025195', 'vsfgs', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903'),
(19, '', 'singh@gmail.com', '07cd55c7b42715ec44c133a6a165e8d2', '7837945618', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903', 'Landlord', '0xb65c9e197d6ca7f1a52d66f9e6cb425c63f5f903');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usertable1`
--
ALTER TABLE `usertable1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usertable1`
--
ALTER TABLE `usertable1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
