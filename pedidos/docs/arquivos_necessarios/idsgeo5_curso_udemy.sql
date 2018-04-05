-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 19/10/2017 às 12:01
-- Versão do servidor: 5.6.35-log
-- Versão do PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `idsgeo5_curso_udemy`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cardapio`
--

CREATE TABLE `cardapio` (
  `id` int(11) NOT NULL,
  `restaurante_id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ingredientes` tinytext COLLATE utf8_unicode_ci,
  `observacao` text COLLATE utf8_unicode_ci,
  `preco` decimal(10,2) NOT NULL,
  `img_url` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cardapios_pedido`
--

CREATE TABLE `cardapios_pedido` (
  `pedido_id` int(11) NOT NULL,
  `cardapio_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `cardapios_pedido`
--

INSERT INTO `cardapios_pedido` (`pedido_id`, `cardapio_id`) VALUES
(42, 1),
(42, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(40) DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `timestamp` int(10) UNSIGNED DEFAULT '0',
  `data` blob,
  `session_id` varchar(40) DEFAULT NULL,
  `user_agent` text,
  `last_activity` text,
  `user_data` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `timestamp`, `data`, `session_id`, `user_agent`, `last_activity`, `user_data`) VALUES
(NULL, '70.39.147.32', 0, NULL, '482172204130a29146b5badd7dfdbb6b', 'python-requests/2.9.1', '1489555056', 'a:2:{s:9:\"user_data\";s:0:\"\";s:4:\"lang\";s:2:\"en\";}'),
(NULL, '70.39.147.32', 0, NULL, '554b4055f6b742d45020de78a2f2a25b', 'python-requests/2.9.1', '1489727868', 'a:2:{s:9:\"user_data\";s:0:\"\";s:4:\"lang\";s:2:\"en\";}');

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nome_fantasia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `razao_social` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CNPJ` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `inscricao_estadual` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CPF` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `telefone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `email` tinytext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `empresa`
--

INSERT INTO `empresa` (`id`, `nome_fantasia`, `razao_social`, `CNPJ`, `inscricao_estadual`, `CPF`, `telefone`, `celular`, `password`, `email`) VALUES
(1, 'Restaurante Escondidim', NULL, NULL, NULL, '0000', ' (31) 3634 - 6735', '(31) 99384-8241', '', ''),
(2, 'DESK Coworking', '1', '1', '1', '', '(31) 3236-1400', '', '', ''),
(74, 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marm', '(31) 3413-8430', '3130779039', 'marmita12345', 'Novo Sabor Tele-marmitex'),
(73, 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marmitex', 'Novo Sabor Tele-marm', '(31) 3413-8430', '3130779039', 'marmita12345', 'Novo Sabor Tele-marmitex'),
(72, 'Tele Marmitex Miura', 'Tele Marmitex Miura', 'Tele Marmitex Miura', 'Tele Marmitex Miura', 'Tele Marmitex Miura', '(31) 3077-9039', '', 'marmita12345', 'Tele Marmitex Miura'),
(68, 'Novo Teste restaurante', 'Novo Teste restaurante', 'Novo Teste restaurante', 'Novo Teste restaurante', 'Novo Teste restauran', '43423', '434', 'marmita12345', 'Novo Teste restaurante'),
(79, 'PONTO CERTO LANCHES E TELEMARMITEX', 'PONTO CERTO LANCHES E TELEMARMITEX', 'PONTO CERTO LANCHES E TELEMARMITEX', 'PONTO CERTO LANCHES E TELEMARMITEX', 'PONTO CERTO LANCHES ', '3130779039', '3130779039', 'marmita12345', 'PONTO CERTO LANCHES E TELEMARMITEX'),
(78, 'Telemarmitex da Lu', 'Telemarmitex da Lu', 'Telemarmitex da Lu', 'Telemarmitex da Lu', 'Telemarmitex da Lu', '(31) 3283-5247', '', 'marmita12345', 'Telemarmitex da Lu'),
(77, 'Rio Manso Tele-Marmitex', 'Rio Manso Tele-Marmitex', 'Rio Manso Tele-Marmitex', 'Rio Manso Tele-Marmitex', 'Rio Manso Tele-Marmi', '(31) 3287-8529', '3130779039', 'marmita12345', 'Rio Manso Tele-Marmitex'),
(76, 'Novosabor Tele Marmitex', 'Novosabor Tele Marmitex', 'Novosabor Tele Marmitex', 'Novosabor Tele Marmitex', 'Novosabor Tele Marmi', '(31)3568-8808', '(31)98720-7821', 'marmita12345', 'Novosabor Tele Marmitex'),
(75, 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', '(31) 3072-7769', '', 'marmita12345', 'Tele Marmitex'),
(67, 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', '33333', '33333', 'marmita12345', 'Restaurante teste'),
(66, 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', 'Restaurante teste', '33333', '33333', 'marmita12345', 'Restaurante teste'),
(65, 'Teste Apagar', 'Teste Apagar', 'Teste Apagar', 'Teste Apagar', 'Teste Apagar', '333333', '3333333', 'marmita12345', 'Teste Apagar'),
(63, 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', '(31) 3498-2094', '', 'marmita12345', 'Tele Marmitex Tia Rô'),
(64, 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', '(31) 3498-2094', '', 'marmita12345', 'Tele Marmitex Tia Rô'),
(71, 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', 'Tele Marmitex Tia Rô', '(31) 3498-2094', '', 'marmita12345', 'Tele Marmitex Tia Rô'),
(70, 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', 'Tele Marmitex', '(31) 3418-6222', '', 'marmita12345', 'Tele Marmitex'),
(69, 'Naturalíssima', 'Naturalíssima', 'Naturalíssima', 'Naturalíssima', 'Naturalíssima', '(31) 3474-0054', '', 'marmita12345', 'Naturalíssima'),
(57, 'Candeia Restsurante\'s', '', '', '', 'contato@candeiaresta', '3134942256', '', 'aqswdefr', ''),
(55, 'Bar e Restaurante Temperinho da Eva', NULL, NULL, NULL, '1111', '(31) 3457-1400', '', 'q1w2e3r4', ''),
(80, 'Tele Marmitex Sabor e Cia', 'Tele Marmitex Sabor e Cia', 'Tele Marmitex Sabor e Cia', 'Tele Marmitex Sabor e Cia', 'Tele Marmitex Sabor ', '(31) 3437-8895', '3130779039', 'marmita12345', 'Tele Marmitex Sabor e Cia'),
(81, 'Restaurante Sabores Tele Marmitex', 'Restaurante Sabores Tele Marmitex', 'Restaurante Sabores Tele Marmitex', 'Restaurante Sabores Tele Marmitex', 'Restaurante Sabores ', '(31) 2565-2945', '', 'marmita12345', 'Restaurante Sabores Tele Marmitex'),
(82, 'Sagrado Sabor - Tele Marmitex', 'Sagrado Sabor - Tele Marmitex', 'Sagrado Sabor - Tele Marmitex', 'Sagrado Sabor - Tele Marmitex', 'Sagrado Sabor - Tele', '(31) 3468-0449', '', 'marmita12345', 'Sagrado Sabor - Tele Marmitex'),
(83, 'Tele-Marmitex Sabor de Verdade', 'Tele-Marmitex Sabor de Verdade', 'Tele-Marmitex Sabor de Verdade', 'Tele-Marmitex Sabor de Verdade', 'Tele-Marmitex Sabor ', '', '', 'marmita12345', 'Tele-Marmitex Sabor de Verdade'),
(85, 'Dona Alice Refeições', 'Dona Alice Refeições', 'Dona Alice Refeições', 'Dona Alice Refeições', 'Dona Alice Refeições', '03134590146', '031988606042', 'marmita12345', 'Dona Alice Refeições');

-- --------------------------------------------------------

--
-- Estrutura para tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `restaurante_id` int(11) NOT NULL,
  `endereco` text COLLATE utf8_unicode_ci NOT NULL,
  `numero` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `complemento` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cidade` text COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bairro` text COLLATE utf8_unicode_ci NOT NULL,
  `cep` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `endereco`
--

INSERT INTO `endereco` (`id`, `restaurante_id`, `endereco`, `numero`, `complemento`, `cidade`, `estado`, `bairro`, `cep`) VALUES
(1, 1, 'Av. Brasília', '1313', 'Lj 04 - Sob Loja', 'Santa Luzia', 'MG', 'São Benedito', ''),
(2, 2, 'Rua Campo Formoso', '125', '', 'Belo Horizonte', 'MG', 'Salgado Filho', ''),
(3, 69, 'R Jose Ribeiro Filho', '351', '', 'Belo Horizonte', 'MG', 'Ouro preto', ''),
(4, 71, 'Teste 333', '445', '555', 'BH', 'MG', 'Santa Lucia', '3333'),
(5, 72, 'Rua 1 bairro 2', '333', '102', 'Belo Horizonte', 'MG', 'Centro', '30360240'),
(6, 73, 'Rua 1 bairro 2', '333', '102', 'Belo Horizonte', 'MG', 'Centro', '30360240'),
(7, 74, '432423', '43242', '432432', 'Belo Horizonte', 'MG', 'Santa Lúcia', '432432'),
(8, 75, 'Av. Abílio Machado', '1669', '', 'Belo Horizonte', 'Minas Gerais', 'Glória', '30830-373'),
(9, 76, 'R. Quarenta e Oito', ' 168', '', 'Belo Horizonte', 'Minas Gerais', 'Ouro Preto', ''),
(10, 77, 'R Jose Ribeiro Filho', '351', '', 'Belo Horizonte', 'Minas Gerais', 'Ouro Preto', '31330-500'),
(11, 78, 'R. Iliada', '200', '', 'Belo Horizonte', 'Minas Gerais', 'Glória', '30880-140'),
(12, 79, 'R. Expedicionário Hereny da Costa', '211', '', 'Belo Horizonte', 'Minas Gerais', 'Caiçaras', '30770-300'),
(13, 80, 'R. Expedicionário Hereny da Costa', '211', '', 'Belo Horizonte', 'Minas Gerais', 'Caiçaras', '30770-300'),
(14, 81, 'Rua José Cleto', '901', '', 'Belo Horizonte', 'Minas Gerais', 'Palmares', '31160-290'),
(15, 82, 'R. da Descida', '56', '', 'Belo Horizonte', 'Minas Gerais', 'Jardim São José', '30820-330'),
(16, 83, 'R. Juíz Costa Val', '172', '', 'Belo Horizonte', 'Minas Gerais', 'Santa Efigênia', '30240-350'),
(17, 84, '', '', '', 'Belo Horizonte', 'Minas Gerais', 'Paraíso', ''),
(18, 85, 'Tv. C-5', '70', '', 'Contagem', 'Minas Gerais', 'Eldorado', '32310-280'),
(19, 86, 'R. Fronteira', '15', '', 'Belo Horizonte', 'Minas Gerais', 'Providência', '31814-130'),
(20, 87, 'Av. José Faria da Rocha', '2940', '', 'Contagem', 'Minas Gerais', 'Eldorado', '32310-210'),
(21, 88, 'R. Genoveva de Souza', '465', '', 'Belo Horizonte', 'Minas Gerais', 'Sagrada Família', '31030-220'),
(22, 89, 'Rua Dos Xetas', '174', '', 'Belo Horizonte', 'Minas Gerais', 'Santa Monica', '31530-130'),
(23, 90, 'R. São Pedro', '128', '', 'Ribeirão das Neves', 'MG', 'Maria Helena', '33930-310'),
(24, 91, 'R. São Pedro', '128', '', 'Ribeirão das Neves', 'MG', 'Maria Helena', '33930310');

-- --------------------------------------------------------

--
-- Estrutura para tabela `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(40) COLLATE utf8_bin NOT NULL,
  `attempts` int(11) NOT NULL,
  `login` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lastLogin` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Fazendo dump de dados para tabela `login_attempts`
--

INSERT INTO `login_attempts` (`id`, `ip_address`, `attempts`, `login`, `lastLogin`, `time`) VALUES
(11, '200.198.16.36', 2, NULL, 1409855680, '2014-09-05 01:34:40'),
(12, '200.198.16.39', 2, NULL, 1415985711, '2014-11-15 00:21:51'),
(13, '187.127.121.122', 1, NULL, 1424023348, '2015-02-16 01:02:28'),
(14, '177.27.28.204', 1, NULL, 1436908481, '2015-07-15 04:14:41'),
(19, '191.211.201.205', 2, NULL, 1455135889, '2016-02-11 01:24:49'),
(18, '152.238.142.180', 4, NULL, 1447632160, '2015-11-16 05:02:40'),
(20, '200.198.58.36', 2, NULL, 1460122215, '2016-04-08 17:30:15'),
(21, '187.78.27.249', 1, NULL, 1464550526, '2016-05-29 23:35:26'),
(22, '191.142.187.188', 1, NULL, 1466076456, '2016-06-16 15:27:36'),
(23, '189.12.229.44', 2, NULL, 1466366638, '2016-06-20 00:03:58'),
(24, '201.4.250.199', 1, NULL, 1468445253, '2016-07-14 01:27:33'),
(25, '187.82.236.78', 5, NULL, 1471435694, '2016-08-17 16:08:14'),
(26, '187.127.56.144', 1, NULL, 1471899426, '2016-08-23 00:57:06');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `cardapio_id` int(11) NOT NULL,
  `usurarios_id` int(11) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `taxa_entrega` decimal(10,2) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `observacao` tinytext COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `cardapio_id`, `usurarios_id`, `valor`, `taxa_entrega`, `nome`, `email`, `observacao`) VALUES
(1, 0, 0, '0.00', '0.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(2, 1, 1, '15.00', '10.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(3, 1, 1, '15.00', '10.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(4, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(5, 1, 1, '15.00', '10.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(6, 3, 1, '15.00', '10.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(7, 1, 1, '15.00', '10.00', 'Bruno hauck', 'brunohauck@gmail.com', NULL),
(8, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(9, 1, 104, '15.00', '10.00', 'Bruno', 'brteste123@brteste123.com', NULL),
(10, 3, 105, '15.00', '10.00', 'Bruno', 'Br@br.com', NULL),
(11, 1, 105, '15.00', '10.00', 'Bruno', 'br@br.com', NULL),
(12, 3, 104, '15.00', '10.00', 'Bruno', 'brteste123@brteste123.com', NULL),
(13, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(14, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(15, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(16, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(17, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(18, 2, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(19, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(20, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(21, 1, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(22, 2, 119, '15.00', '10.00', 'Natália Luna', 'jadson.upis@gmail.com', NULL),
(23, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(24, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(25, 1, 1, '15.00', '10.00', 'brunohauck', 'brunohauck@gmail.com', NULL),
(26, 3, 1, '15.00', '10.00', 'brunohauck', 'brunohauck@gmail.com', NULL),
(27, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(28, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(29, 1, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(30, 2, 1, '15.00', '10.00', 'Bruno Hauck', 'brunohauck@gmail.com', NULL),
(31, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(32, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(33, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(34, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(35, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(36, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(37, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(38, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(39, 1, 173, '15.00', '10.00', 'Bruno Hauck', 'habyb@teste.com', NULL),
(40, 1, 1, '30.00', '10.50', NULL, 'brunohauck@gmail.com', NULL),
(41, 1, 1, '15.00', '10.00', 'brunohauck', 'brunohauck@gmail.com', NULL),
(42, 1, 1, '30.00', '10.50', NULL, 'brunohauck@gmail.com', NULL),
(43, 1, 218, '15.00', '10.00', 'test', 'test', NULL),
(44, 3, 218, '15.00', '10.00', 'test', 'test', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `prato`
--

CREATE TABLE `prato` (
  `id` int(11) NOT NULL,
  `restaurante_id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `arroz` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `feijao` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ingredientes` tinytext COLLATE utf8_unicode_ci,
  `observacao` text COLLATE utf8_unicode_ci,
  `img_url` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flag_refeicao_montada` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `prato`
--

INSERT INTO `prato` (`id`, `restaurante_id`, `nome`, `tipo`, `arroz`, `feijao`, `ingredientes`, `observacao`, `img_url`, `flag_refeicao_montada`) VALUES
(1, 1, 'Prato do dia 01', 'Marmitex', 'Arroz', 'Feijão Tropeiro', 'Fritas', NULL, 'http://costelanobafo.loja2.com.br/img/6398fdbba7d52cea6ccf8ad74fb4b8f7.jpg', 'Nao'),
(2, 1, 'Prato do dia 02', 'Marmitex', 'Arroz Branco', 'Feijão ', ' Batata Palha Temperada', NULL, 'http://costelanobafo.loja2.com.br/img/6398fdbba7d52cea6ccf8ad74fb4b8f7.jpg', 'Nao'),
(3, 1, 'Prato do dia 03', 'Marmitex', 'Arroz', 'Feijão', 'Creme de Batata c/cheiro Verde, Batata Palha, Espaguete ao Molho Napolitano', 'Escolha Carne e Informe no Campo Alteração do Prato', 'http://costelanobafo.loja2.com.br/img/6398fdbba7d52cea6ccf8ad74fb4b8f7.jpg', 'Nao');

-- --------------------------------------------------------

--
-- Estrutura para tabela `restaurante`
--

CREATE TABLE `restaurante` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telefone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `celular` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img_url` tinytext COLLATE utf8_unicode_ci,
  `pedido_url` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `endereco` tinytext COLLATE utf8_unicode_ci,
  `flag_pedido_cadastrado` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `longitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `data_criacao` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Fazendo dump de dados para tabela `restaurante`
--

INSERT INTO `restaurante` (`id`, `empresa_id`, `nome`, `tipo`, `telefone`, `celular`, `img_url`, `pedido_url`, `endereco`, `flag_pedido_cadastrado`, `latitude`, `longitude`, `data_criacao`) VALUES
(1, 1, 'Escondidim', 'Restaurante e entregas', '(31) 3634 - 6735', '(31) 99384-8241', 'http://dev.escondidim.com.br/images/escondidim_app.png', NULL, 'Av. Brasília, 1313 Lj 04 - Sob Loja\r\nSão Benedito - Santa Luzia', 'Nao', '-19.7925697', '-43.9346231', '2016-07-24 13:43:19'),
(2, 2, 'Marmitex Online BH', 'Tele Marmitex', '(31) 3459-8862', '', 'http://assets.lwsite.com.br/uploads/widget_image/image/307/967/307967/logo_1759846566.png', NULL, 'R. Consuelo, 3 - Jardim dos Comerciários,Belo Horizonte - MG,31650-100', 'Nao', '-19.7922574 ', '-43.9737068', '2016-07-24 13:43:19'),
(61, 3, 'Temperinho da Eva', 'Marmitex', '(31) 3457-1400 / 2520-2509', '', 'http://www.poenoprato.com.br/system/restaurants/photos/000/000/003/thumb/logomarca_temperinho.jpg', 'http://www.poenoprato.com.br/temperinho-da-eva/pedido_online', 'Rua Joaquim de Pinho, 440 Loja\r\n31510-420\r\nBelo Horizonte / Minas Gerais ', 'url', '-19.8168257', '-43.9675658', '2016-07-24 13:43:19'),
(62, 0, 'Restaurante Requinte', 'Telemarmitex', '(31) 3637-2020', '(31) 99540-7498', NULL, 'http://www.poenoprato.com.br/restaurante-requinte/pedido_online', 'Rua Maria Piedade Leandro, 31 Cristina A - 2º ANDAR\r\n33105-250', 'url', '-19.7834209', '-43.9258064', '2016-07-24 13:43:19'),
(65, 57, 'Candeia Restsurante\'s', 'Tele Marmitex', '3134942256', '333', NULL, NULL, 'Rua Osório Duque Estrada 156 Planalto', 'Nao', '-19.8332699', '-43.9481284', '2016-07-24 13:43:19'),
(69, 63, 'Tele Marmitex Tia Rô', 'Telemarmitex', '(31) 3498-2094', '', NULL, NULL, NULL, 'Nao', '', '', '2016-09-11 19:24:47'),
(75, 69, 'Naturalíssima', 'Telemarmitex', '(31) 3474-0054', '', NULL, NULL, 'Av. Abílio Machado', 'Nao', '', '', '2016-10-24 19:36:51'),
(76, 70, 'Tele Marmitex', 'Telemarmitex', '(31) 3418-6222', '', NULL, NULL, 'R. Quarenta e Oito', 'Nao', '', '', '2016-11-29 21:06:21'),
(78, 72, 'Tele Marmitex Miura', 'Telemarmitex', '(31) 3077-9039', '', NULL, NULL, 'R. Iliada', NULL, '', '', '2016-12-01 16:41:02'),
(79, 73, 'Novo Sabor Tele-marmitex', 'Telemarmitex', '(31) 3413-8430', '3130779039', NULL, NULL, 'R. Expedicionário Hereny da Costa', 'Nao', '', '', '2016-12-01 16:42:41'),
(92, 86, '', 'Telemarmitex', '82764652325', 'deliv@try-rx.com', NULL, NULL, 'Acheter Du Priligy Quebec Viagra 100mg 4st  <a href=http://byuvaigranonile.com>viagra</a> Stendra Without Perscription Internet Overseas ', NULL, '', '', '2017-05-05 18:28:03'),
(91, 85, 'Dona Alice Refeições', 'Telemarmitex', '03134590146', '031988606042', NULL, NULL, 'R. São Pedro', 'Nao', '', '', '2017-01-31 18:41:54'),
(83, 77, 'Rio Manso Tele-Marmitex', 'Telemarmitex', '(31) 3287-8529', '3130779039', NULL, NULL, 'R. Juíz Costa Val', 'Nao', '', '', '2016-12-01 16:47:33'),
(84, 78, 'Telemarmitex da Lu', 'Telemarmitex', '(31) 3283-5247', '', NULL, NULL, '', 'Nao', '', '', '2016-12-01 16:51:26'),
(85, 79, 'PONTO CERTO LANCHES E TELEMARMITEX', 'Telemarmitex', '3130779039', '3130779039', NULL, NULL, 'Tv. C-5', 'Nao', '', '', '2016-12-01 16:52:33'),
(86, 80, 'Tele Marmitex Sabor e Cia', 'Telemarmitex', '(31) 3437-8895', '3130779039', NULL, NULL, 'R. Fronteira', 'Nao', '', '', '2016-12-01 16:53:34'),
(87, 81, 'Restaurante Sabores Tele Marmitex', 'Telemarmitex', '(31) 2565-2945', '', NULL, NULL, 'Av. José Faria da Rocha', 'Nao', '', '', '2016-12-01 16:54:43'),
(88, 82, 'Sagrado Sabor - Tele Marmitex', 'Telemarmitex', '(31) 3468-0449', '', NULL, NULL, 'R. Genoveva de Souza', 'Nao', '', '', '2016-12-01 17:07:11'),
(89, 83, 'Tele-Marmitex Sabor de Verdade', 'Telemarmitex', '', '', NULL, NULL, 'Rua Dos Xetas', 'Nao', '', '', '2016-12-01 17:08:20'),
(93, 87, '', 'Telemarmitex', '89243148336', 'emailk@try-rx.com', NULL, NULL, 'Perfect Rx Meds Buy Viagra Usa  <a href=http://viacheap.com>viagra online pharmacy</a> Amoxicillin Order From Canada Le Cialis Blog  <a href=http://cial40mg.com/buy-cheap-cialis-pills.php>Buy Cheap Cialis Pills</a> Amoxil 500 Mg Viagra Marocaine  <a href=', NULL, '', '', '2017-06-21 17:05:34');

-- --------------------------------------------------------

--
-- Estrutura para tabela `restaurante_foto`
--

CREATE TABLE `restaurante_foto` (
  `id` int(11) NOT NULL,
  `restaurante_id` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL,
  `img_url` tinytext NOT NULL,
  `flag_capa` varchar(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `restaurante_foto`
--

INSERT INTO `restaurante_foto` (`id`, `restaurante_id`, `nome`, `img_url`, `flag_capa`) VALUES
(1, 1, 'Logo', 'http://dev.escondidim.com.br/images/escondidim_app.png', 'Sim'),
(2, 2, 'teste444', 'http://assets.lwsite.com.br/uploads/widget_image/image/307/967/307967/logo_1759846566.png', 'Sim'),
(6, 62, 'Requinte', 'http://dev.escondidim.com.br/images/requinte.png', 'Sim'),
(5, 61, 'eva', 'http://www.poenoprato.com.br/system/restaurants/photos/000/000/003/thumb/logomarca_temperinho.jpg', 'Sim'),
(7, 65, 'logo', 'http://dev.escondidim.com.br/imagens/candeia_restaurante.png', 'Sim'),
(8, 69, 'Marmitex', 'http://dev.escondidim.com.br/images/marmitex.png', 'Sim'),
(9, 74, '6c119c5dbae3e37a5a150f88d63a101c.jpg', 'http://dev.escondidim.com.br/images/6c119c5dbae3e37a5a150f88d63a101c.jpg', NULL),
(10, 75, '1a6c57c8e305770a23b0a900c6b53793.jpg', 'http://dev.escondidim.com.br/images/1a6c57c8e305770a23b0a900c6b53793.jpg', NULL),
(28, 90, '761b76982a83aab5b3ab9b86d8fa3b7a.png', 'http://dev.escondidim.com.br/images/761b76982a83aab5b3ab9b86d8fa3b7a.png', NULL),
(12, 76, '9aff7a4a43aad86661e8d99a2d7f7988.jpg', 'http://dev.escondidim.com.br/images/9aff7a4a43aad86661e8d99a2d7f7988.jpg', NULL),
(29, 91, 'cdb840b51de2be09d73e7004a59db98d.png', 'http://dev.escondidim.com.br/images/cdb840b51de2be09d73e7004a59db98d.png', NULL),
(14, 77, 'd145059775d9c7d05e89b13efa6fa7a6.jpg', 'http://dev.escondidim.com.br/images/d145059775d9c7d05e89b13efa6fa7a6.jpg', NULL),
(15, 78, '589c00c8a9b7eadef5bc382359243562.jpg', 'http://dev.escondidim.com.br/images/589c00c8a9b7eadef5bc382359243562.jpg', NULL),
(16, 79, '0d4d9d7c8c5c5ab82a6bf1aefc52b097.jpg', 'http://dev.escondidim.com.br/images/0d4d9d7c8c5c5ab82a6bf1aefc52b097.jpg', NULL),
(17, 81, '6f29f25503b666dc84ba2712f2ef5900.jpg', 'http://dev.escondidim.com.br/images/6f29f25503b666dc84ba2712f2ef5900.jpg', NULL),
(19, 82, 'b5e5c49efbbdef66ca71d24e2650e1bd.jpg', 'http://dev.escondidim.com.br/images/b5e5c49efbbdef66ca71d24e2650e1bd.jpg', NULL),
(20, 83, '593179c9a80154fd785bd349eaf7ff14.jpg', 'http://dev.escondidim.com.br/images/593179c9a80154fd785bd349eaf7ff14.jpg', NULL),
(21, 84, '2223b2e5c569aaf27ac1057c35416cc4.jpg', 'http://dev.escondidim.com.br/images/2223b2e5c569aaf27ac1057c35416cc4.jpg', NULL),
(22, 85, 'cd01256d927bfa4b9ebaac3101db25d2.jpg', 'http://dev.escondidim.com.br/images/cd01256d927bfa4b9ebaac3101db25d2.jpg', NULL),
(23, 86, '91d8847988879c07743fdf21e68017aa.jpg', 'http://dev.escondidim.com.br/images/91d8847988879c07743fdf21e68017aa.jpg', NULL),
(24, 87, '8045a668fca9ecc10d1364802cc7be9d.jpg', 'http://dev.escondidim.com.br/images/8045a668fca9ecc10d1364802cc7be9d.jpg', NULL),
(26, 88, '9c3e0578aa3099380557d9480820f722.jpg', 'http://dev.escondidim.com.br/images/9c3e0578aa3099380557d9480820f722.jpg', NULL),
(27, 89, '38f2b174d2f18520b500dbe26dac1863.jpg', 'http://dev.escondidim.com.br/images/38f2b174d2f18520b500dbe26dac1863.jpg', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios_app`
--

CREATE TABLE `usuarios_app` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `usuarios_app`
--

INSERT INTO `usuarios_app` (`id`, `nome`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Bruno hauck', 'brunohauck@gmail.com', '123456', '2017-08-22 16:26:12', NULL),
(2, 'asdf ', 'www@fwe', 'd2d2d2', '2017-09-07 01:21:18', NULL),
(3, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:41:59', NULL),
(4, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:42:07', NULL),
(5, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:43:08', NULL),
(6, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:09', NULL),
(7, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(8, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(9, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(10, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(11, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(12, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(13, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:10', NULL),
(14, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:11', NULL),
(15, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:11', NULL),
(16, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:11', NULL),
(17, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:11', NULL),
(18, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:44:11', NULL),
(19, 'Udemy', 'teste@teste.com.br', '123456', '2017-09-10 17:45:39', NULL),
(20, 'Udemy', 'Teste@teste.com.br', '123456', '2017-09-10 17:46:05', NULL),
(21, 'Udemy', 'Teste@teste.com.br', '123456', '2017-09-10 17:47:16', NULL),
(22, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:49:54', NULL),
(23, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:54', NULL),
(24, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(25, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(26, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(27, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(28, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(29, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(30, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:50:59', NULL),
(31, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:51:00', NULL),
(32, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:51:00', NULL),
(33, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:53:15', NULL),
(34, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:54:10', NULL),
(35, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:56:11', NULL),
(36, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:56:14', NULL),
(37, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:56:15', NULL),
(38, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:56:15', NULL),
(39, 'Udemy', 'udemy@teste.com.br', '123456', '2017-09-10 17:56:16', NULL),
(40, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:02:16', NULL),
(41, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:02:32', NULL),
(42, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:02:32', NULL),
(43, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:02:32', NULL),
(44, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:03:52', NULL),
(45, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:03:55', NULL),
(46, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:03:55', NULL),
(47, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:03:55', NULL),
(48, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:03:55', NULL),
(49, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:01', NULL),
(50, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:03', NULL),
(51, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:04', NULL),
(52, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:04', NULL),
(53, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:04', NULL),
(54, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:04', NULL),
(55, 'Escondidim', 'escondidim@teste.com.br', '123456', '2017-09-11 02:04:04', NULL),
(56, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:40', NULL),
(57, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:51', NULL),
(58, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(59, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(60, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(61, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(62, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(63, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:54', NULL),
(64, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:55', NULL),
(65, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:55', NULL),
(66, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:55', NULL),
(67, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:55', NULL),
(68, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:55', NULL),
(69, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(70, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(71, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(72, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(73, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(74, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:56', NULL),
(75, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(76, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(77, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(78, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(79, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(80, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:57', NULL),
(81, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:10:58', NULL),
(82, 'udemy', 'udemy@teste.com.br', 'q1w2e3r4t5', '2017-09-11 02:11:53', NULL),
(83, 'udemy', 'udemy@teste.com.br', '123456', '2017-09-11 02:13:05', NULL),
(84, 'udemy', 'udemy@teste.com.br', '123456', '2017-09-11 02:13:36', NULL),
(85, 'udemy', 'udemy@tste.com.br', '123456', '2017-09-11 02:15:17', NULL),
(86, 'Teste', 'guajajaras@gmail.com', '123456', '2017-09-11 20:58:03', NULL),
(87, 'Maico', 'asd@as.com', '123456', '2017-09-11 21:28:04', NULL),
(88, 'Maico', 'asd@as.com', '123456', '2017-09-11 21:28:27', NULL),
(89, 'asdf', 'asdf@asdf', 'asdf', '2017-09-12 14:20:39', NULL),
(90, 'asdf', 'asdf@asdf', 'asdf', '2017-09-12 14:20:44', NULL),
(91, 'asdfasdf', 'asdf@asdf.asdf', 'asdf', '2017-09-12 14:46:07', NULL),
(92, 'asdfasdf', 'asdf@asdf.asdf', 'asdf', '2017-09-12 14:46:12', NULL),
(93, 'asdf', 'asdf@asdf.asdf', 'asdf', '2017-09-12 14:47:15', NULL),
(94, 'junioe', 'sd@gmail.com', '123456', '2017-09-16 17:10:49', NULL),
(95, 'JUNIOR', 'sd@gmail.com', '123456', '2017-09-18 12:13:47', NULL),
(96, 'JUNIOR', 'sd@gmail.com', '123456', '2017-09-18 12:55:18', NULL),
(97, 'testebr', 'testebr@testebr.com', 'testebr', '2017-09-20 14:57:50', NULL),
(98, 'testebr', 'testebr@testebr.com', 'testebr', '2017-09-20 14:57:51', NULL),
(99, 'testebr', 'testebr@testebr.com', 'testebr', '2017-09-20 14:57:52', NULL),
(100, 'testebr', 'testebr@testebr.com', 'testebr', '2017-09-20 14:57:52', NULL),
(101, 'testebr', 'testebr@testebr.com', 'testebr', '2017-09-20 14:58:09', NULL),
(102, 'testbr', 'testbr@testbr.com', 'testbr', '2017-09-20 15:00:26', NULL),
(103, 'emails', 'emails@emails.com', 'emails', '2017-09-20 15:02:53', NULL),
(104, 'brteste123', 'brteste123@brteste123.com', 'brteste123', '2017-09-20 15:09:17', NULL),
(105, 'Br', 'Br@br.com', 'br', '2017-09-20 20:59:45', NULL),
(106, 'asd', 'asda', 'sadas', '2017-09-27 17:00:20', NULL),
(107, 'asd', 'asda', 'sadas', '2017-09-27 17:00:25', NULL),
(108, 'aldoprogramador', 'aldoprogramador@teste.com', '36213304', '2017-09-27 18:06:55', NULL),
(109, 'Udemy', 'udemy@teste.com.mz', 'olamundo', '2017-09-30 00:15:32', NULL),
(110, 'Udemy', 'leonel@teste.com', '12345', '2017-09-30 00:16:34', NULL),
(111, 'Udemy', 'leonel@teste.com', '12345', '2017-09-30 00:16:48', NULL),
(112, 'udem', 'udemy@teste.com.mz', '123456', '2017-09-30 01:02:10', NULL),
(113, 'udem', 'udemy@teste.com.mz', '123456', '2017-09-30 01:02:33', NULL),
(114, 'LEO', 'leo@123.com', '123456', '2017-09-30 06:47:09', NULL),
(115, 'Matsinhe', 'ola@teste.com', '123456', '2017-09-30 12:21:48', NULL),
(116, 'Leonel', 'leo@teste.com', '123456', '2017-09-30 12:22:30', NULL),
(117, 'Leonel', 'ola@teste.com', '123456', '2017-09-30 12:22:58', NULL),
(118, 'Leonel', 'ola@teste.com.br', '123456', '2017-09-30 12:24:32', NULL),
(119, 'Jadson', 'jadson.upis@gmail.com', '123', '2017-09-30 20:56:44', NULL),
(120, 'Matsinhe', 'leonel@gmail.com', '123456', '2017-10-02 09:22:34', NULL),
(121, 'Matsinhe', 'leonel@gmail.com', '123456', '2017-10-02 09:22:40', NULL),
(122, 'Udemy', 'udemy@teste.com.br', 'q1w2e3r4', '2017-10-04 19:01:08', NULL),
(123, 'Udemy', 'udemy@teste.com.br', 'q1w2e3r4', '2017-10-04 19:07:18', NULL),
(124, 'Udemy', 'udemy@teste.com.br', 'q1w2e3r4', '2017-10-04 19:53:16', NULL),
(125, 'Lucia', 'lucia@teste.com.br', '123456', '2017-10-04 19:53:39', NULL),
(126, 'teste', 'teste', 'teste', '2017-10-05 01:32:01', NULL),
(127, 'teste', 'teste', 'teste', '2017-10-05 01:33:09', NULL),
(128, 'jhemerson', 'jhemerson', 'jhemerson', '2017-10-05 01:51:55', NULL),
(129, 'Udemy', 'udemy@teste.com', '123456', '2017-10-08 22:51:36', NULL),
(130, 'Udemy', 'udemy@teste.com', '123456', '2017-10-08 22:52:00', NULL),
(131, 'Udemy', 'udemy@teste.com', '123456', '2017-10-08 22:52:51', NULL),
(132, 'TESTE', 'teste@teste.com', 'teste', '2017-10-08 22:55:59', NULL),
(133, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:54:53', NULL),
(134, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:22', NULL),
(135, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:22', NULL),
(136, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:22', NULL),
(137, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:22', NULL),
(138, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:22', NULL),
(139, 'Teste', 'teste@teste.com', '1212', '2017-10-09 19:55:23', NULL),
(140, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:08', NULL),
(141, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:20', NULL),
(142, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:21', NULL),
(143, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:21', NULL),
(144, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:22', NULL),
(145, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:19:35', NULL),
(146, 'Teste', 'teste@teste.com', '1212', '2017-10-09 20:21:24', NULL),
(147, 'Teste', 'teste@teste.com', '1212', '2017-10-09 20:21:30', NULL),
(148, 'Ramon', 'teste@teste.com', '1212', '2017-10-09 20:23:00', NULL),
(149, 'Teste', 'teste@teste.com', '1212', '2017-10-09 20:24:25', NULL),
(150, 'Ramon', 'ramon@aa.com', '1212', '2017-10-09 20:32:22', NULL),
(151, 'Ramon', 'rmoura@rmoura.com', '1212', '2017-10-09 20:35:05', NULL),
(152, 'Rita', 'rita@rita.com', '1212', '2017-10-09 20:38:00', NULL),
(153, 'Ramon', 'ramon@ramon.com', '1212', '2017-10-09 20:43:56', NULL),
(154, 'wesley', 'wesley@gmail.com', '123456', '2017-10-10 20:07:29', NULL),
(155, 'wesley', 'wesley@gmail.com', '123456', '2017-10-10 20:07:34', NULL),
(156, 'wesley', 'wesley@gmail,com', '123456', '2017-10-10 20:11:33', NULL),
(157, 'wesley', 'wesley@gmail,com', '123456', '2017-10-10 20:11:35', NULL),
(158, 'wesley', 'wesley@gmail.com', '123456', '2017-10-10 21:29:32', NULL),
(159, 'wesley', 'wesley@gmail.com', '123456', '2017-10-10 21:29:34', NULL),
(160, 'wesley', 'wesley@gmail.com', '123456', '2017-10-10 21:30:16', NULL),
(161, 'Wesley', 'wesley@gmail.com', '123456', '2017-10-11 13:39:43', NULL),
(162, 'Wesley', 'wesley@gmail.com', '123456', '2017-10-11 13:39:46', NULL),
(163, 'Matsinhe', 'matsinhe@gmail.com', 'MarciA2002', '2017-10-14 11:38:42', NULL),
(164, 'Almeida', 'almeida@gmail.com', '123456', '2017-10-14 11:56:58', NULL),
(165, 'Almeida', 'almeida@gmail.com', '123456', '2017-10-14 11:57:17', NULL),
(166, 'ALmeida12', 'alm@gmail.com', '123456', '2017-10-14 11:58:56', NULL),
(167, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:35:22', NULL),
(168, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:35:57', NULL),
(169, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:35:59', NULL),
(170, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:52:49', NULL),
(171, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:53:33', NULL),
(172, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:54:12', NULL),
(173, 'Habyb', 'habyb@teste.com', 'q1w2e3r4t5', '2017-10-15 19:54:27', NULL),
(174, 'teste', 'teste@teste.com', 'teste', '2017-10-16 17:04:51', NULL),
(175, 'teste', 'teste@teste.com', 'teste', '2017-10-16 17:04:55', NULL),
(176, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:02', NULL),
(177, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:04', NULL),
(178, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:05', NULL),
(179, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:06', NULL),
(180, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:07', NULL),
(181, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:08', NULL),
(182, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:09', NULL),
(183, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:09', NULL),
(184, 'teste', 'teste@teste.com', 'q1w2e3r4', '2017-10-16 17:05:09', NULL),
(185, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:50', NULL),
(186, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:51', NULL),
(187, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:53', NULL),
(188, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:53', NULL),
(189, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:53', NULL),
(190, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:54', NULL),
(191, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:54', NULL),
(192, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:54', NULL),
(193, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:54', NULL),
(194, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:54', NULL),
(195, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:55', NULL),
(196, 'teste', 'teste@teste.com', 'q1w2e3r4t5', '2017-10-16 17:05:55', NULL),
(197, 'Teste', 'teste@teste.com.br', 'q1w2e3r4t5', '2017-10-16 17:14:17', NULL),
(198, 'shandryll', 'shandryll@teste.com', 'shandryll', '2017-10-16 17:41:47', NULL),
(199, 'abc', 'abc@teste.com', 'abc123', '2017-10-16 17:49:10', NULL),
(200, 'test', 'test', 'test', '2017-10-17 18:31:10', NULL),
(201, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:16', NULL),
(202, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:21', NULL),
(203, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:22', NULL),
(204, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:22', NULL),
(205, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(206, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(207, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(208, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(209, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(210, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:23', NULL),
(211, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:24', NULL),
(212, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:24', NULL),
(213, 'udemyantonio', 'antoniomarcosmg@gmail.com', 'toni3032', '2017-10-17 18:55:24', NULL),
(214, 'shandryll', 'shandryll', 'shandryll', '2017-10-17 19:22:01', NULL),
(215, 'shandryll', 'shandryll', 'shandryll', '2017-10-17 19:22:06', NULL),
(216, 'antonioudemy', 'info@wcreator.com.br', 'toni3032', '2017-10-17 19:33:18', NULL),
(217, 'udemytoni', 'newslleters@gmail.com', 'toni3032', '2017-10-17 19:39:23', NULL),
(218, 'test', 'test', 'test', '2017-10-17 19:52:44', NULL),
(219, 'test', 'test@test.com', 'test', '2017-10-17 19:52:52', NULL),
(220, 'udemyteste3', 'webmaster@wcreator.com.br', 'toni3032', '2017-10-18 02:29:29', NULL),
(221, 'udemytestetoni', 'teste@wcreator.com.br', 'toni3032', '2017-10-18 02:32:59', NULL),
(222, 'fgfg', 'ffff', '', '2017-10-18 23:34:54', NULL),
(223, 'ass', 'ass', 'ssss', '2017-10-19 00:19:18', NULL),
(224, 'escondidim', 'escondidim@teste.com', '123', '2017-10-19 00:26:55', NULL),
(225, 'escondidim', 'escondidim@teste.com.br', '123', '2017-10-19 00:31:32', NULL);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `cardapio`
--
ALTER TABLE `cardapio`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD KEY `ci_sessions_timestamp` (`timestamp`);

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `prato`
--
ALTER TABLE `prato`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `restaurante`
--
ALTER TABLE `restaurante`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `restaurante_foto`
--
ALTER TABLE `restaurante_foto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios_app`
--
ALTER TABLE `usuarios_app`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `cardapio`
--
ALTER TABLE `cardapio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de tabela `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT de tabela `prato`
--
ALTER TABLE `prato`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `restaurante`
--
ALTER TABLE `restaurante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
--
-- AUTO_INCREMENT de tabela `restaurante_foto`
--
ALTER TABLE `restaurante_foto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT de tabela `usuarios_app`
--
ALTER TABLE `usuarios_app`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
