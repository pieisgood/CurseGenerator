CREATE DATABASE  IF NOT EXISTS `cursegenerator` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cursegenerator`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: cursegenerator
-- ------------------------------------------------------
-- Server version	5.6.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adjective`
--

DROP TABLE IF EXISTS `adjective`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adjective` (
  `idadjective` varchar(50) NOT NULL,
  PRIMARY KEY (`idadjective`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adjective`
--

LOCK TABLES `adjective` WRITE;
/*!40000 ALTER TABLE `adjective` DISABLE KEYS */;
INSERT INTO `adjective` VALUES ('small');
/*!40000 ALTER TABLE `adjective` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adverb`
--

DROP TABLE IF EXISTS `adverb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adverb` (
  `idadverb` varchar(50) NOT NULL,
  PRIMARY KEY (`idadverb`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adverb`
--

LOCK TABLES `adverb` WRITE;
/*!40000 ALTER TABLE `adverb` DISABLE KEYS */;
INSERT INTO `adverb` VALUES ('quickly');
/*!40000 ALTER TABLE `adverb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conjunction`
--

DROP TABLE IF EXISTS `conjunction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conjunction` (
  `idconjunction` varchar(50) NOT NULL,
  PRIMARY KEY (`idconjunction`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conjunction`
--

LOCK TABLES `conjunction` WRITE;
/*!40000 ALTER TABLE `conjunction` DISABLE KEYS */;
INSERT INTO `conjunction` VALUES ('and');
/*!40000 ALTER TABLE `conjunction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interjection`
--

DROP TABLE IF EXISTS `interjection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interjection` (
  `idinterjection` varchar(50) NOT NULL,
  PRIMARY KEY (`idinterjection`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interjection`
--

LOCK TABLES `interjection` WRITE;
/*!40000 ALTER TABLE `interjection` DISABLE KEYS */;
INSERT INTO `interjection` VALUES ('good lord');
/*!40000 ALTER TABLE `interjection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noun`
--

DROP TABLE IF EXISTS `noun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `noun` (
  `idnoun` varchar(50) NOT NULL,
  PRIMARY KEY (`idnoun`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noun`
--

LOCK TABLES `noun` WRITE;
/*!40000 ALTER TABLE `noun` DISABLE KEYS */;
INSERT INTO `noun` VALUES ('fucker'),('God'),('Jesus');
/*!40000 ALTER TABLE `noun` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preposition`
--

DROP TABLE IF EXISTS `preposition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preposition` (
  `idpreposition` varchar(50) NOT NULL,
  PRIMARY KEY (`idpreposition`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preposition`
--

LOCK TABLES `preposition` WRITE;
/*!40000 ALTER TABLE `preposition` DISABLE KEYS */;
INSERT INTO `preposition` VALUES ('against');
/*!40000 ALTER TABLE `preposition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pronoun`
--

DROP TABLE IF EXISTS `pronoun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pronoun` (
  `idpronoun` varchar(50) NOT NULL,
  PRIMARY KEY (`idpronoun`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pronoun`
--

LOCK TABLES `pronoun` WRITE;
/*!40000 ALTER TABLE `pronoun` DISABLE KEYS */;
/*!40000 ALTER TABLE `pronoun` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verb`
--

DROP TABLE IF EXISTS `verb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verb` (
  `idverb` varchar(50) NOT NULL,
  PRIMARY KEY (`idverb`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verb`
--

LOCK TABLES `verb` WRITE;
/*!40000 ALTER TABLE `verb` DISABLE KEYS */;
INSERT INTO `verb` VALUES ('bites');
/*!40000 ALTER TABLE `verb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-01-12  1:04:46
