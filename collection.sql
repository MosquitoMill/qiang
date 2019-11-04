/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : collection

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2019-10-28 10:58:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `api_token` varchar(255) DEFAULT NULL COMMENT 'api访问令牌',
  `gender` int(2) DEFAULT NULL COMMENT '1男2女',
  `identity` varchar(255) DEFAULT NULL COMMENT '身份证号码',
  `role` int(11) DEFAULT NULL COMMENT '1普通2管理员',
  `department_id` int(11) DEFAULT NULL COMMENT '部门id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `admins_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('14', 'xiaodese', 'xiaodese', 'xiaodese@qq.com', '$2y$10$EkOjDncF8V.oDo7MZ7ZWQ.k1qngM2Zxkfl1kuZZNfvgq1kFLo1uye', 'VK1CopGYYrYeVLRXT76JpEYbzRwxgYHCeXbbJrYfRliFP0YC3cLsFKTkoWMf', '2017-08-28 13:24:53', '2018-11-18 10:24:57', null, null, '1', '150124199409221133', '2', '2');
INSERT INTO `admins` VALUES ('15', '大可爱', 'holyhigh', 'admin@163.com', '$2y$10$iPcD/EHHb8XVofkl8lCB5.zaI2zPy2LwdJRHk7JfXk7l2FeEt3v3m', 'YVlmpXufw65lMOUg8Dl8bKbFgpDIqCDKh7YO4vS9VSXLSIES89LQglXXmqgt', '2017-08-28 13:25:35', '2018-04-14 09:21:06', '2018-04-14 09:21:06', '3F8MgjvFWcS6ZsKQsda1oRNukfD4Zhq3M8mkwhyFMndQ16R0eAPMIwMb6Tn7', '2', null, '1', '2');
INSERT INTO `admins` VALUES ('16', '都大爽', 'dudashuang', 'dudashaung@126.com', '$2y$10$tdAkGzgbw4y0QcxdtbFSLOqF/nqMJGgjDK1XNc9Q2b1f4IuWUYZNy', 'prVTyWvGtSES6bfWg8mHcZ02nSTwIWufiKh0gXKqhnhgk3XM1KLg2wLG4nKn', '2017-08-28 13:25:45', '2018-04-14 09:21:10', '2018-04-14 09:21:10', 'yqyHRkjUTIxbh4Z5xGovxA4nxz0kIkeJhtYxM7G4qndsj2eTJPJfzBIl51i3', '1', null, '1', null);
INSERT INTO `admins` VALUES ('17', '小米', 'xiaomi', '110@qq.com', '$2y$10$4RV3quR4cm0c1iD6J52eCuSaBPKG17exksmv4VOKOTK28wJzqBNVm', 'QrSlTuow0Ei7G5X8raOEUDEvNOWjFOlBTpXzBhW9HkzcesUg3H5Epq9GhvdI', '2017-08-29 12:09:08', '2018-04-14 09:21:13', '2018-04-14 09:21:13', '5HKieYLWM3cP8VdT4LZRTpkdCCpPR6I1ihsudU1y5d0c0ZArmgwpzVrM6qlr', '1', null, '1', null);
INSERT INTO `admins` VALUES ('33', 'zhaoliu1', 'zhaoliu', 'zhaoliu1', '$2y$10$J.jPyWDnEHKREXAt3vi6MOpXpuhynCiHNkWhWuWip4RwlZPBkh/Li', 'uyI779L1LMcjHZKOO4lS12ceaEmVUdygOQrM0JW7R796jDoxMnxwUlzmYPrm', '2017-09-04 10:11:44', '2017-09-04 10:28:04', '2017-09-04 10:28:04', 'wlQNnKYAPx7z2cfEfko8MeLEftsuNFF11wO9uL7N2Ap9wbl167M2EwUXvZI5', '2', null, '1', null);
INSERT INTO `admins` VALUES ('34', 'zhangzhenxing', 'zhangzhenxing', null, '$2y$10$EkOjDncF8V.oDo7MZ7ZWQ.k1qngM2Zxkfl1kuZZNfvgq1kFLo1uye', 'zGszRkIJRmz07FP043CLD6bnjtKsWpR0N2ZWNUtDLcgwMVBSpqaVI8yS01Ak', null, '2018-04-14 09:21:16', '2018-04-14 09:21:16', 'b1LB4B6kma35zdopmXGE5ZT7bDyGekc8btF0EkFCM2cM1OrtcrSS4NizDp3M', '1', null, '1', null);
INSERT INTO `admins` VALUES ('35', 'putong', 'putong', null, '$2y$10$WrdaAFWidLyyxyPZomFLAulWxlX4dJXUx7ainIjbidhWaxsrBFqKS', 'gWd1gxHOUZMTjteHIdtfdEyX1fj9WZKjC19ZVOwK8HemwnhaN1TJIPfkHuhM', '2018-04-14 09:34:31', '2018-04-14 09:43:58', null, null, null, null, '1', '2');
INSERT INTO `admins` VALUES ('36', '1111', '1111', null, '$2y$10$M2ex3.k.LRj.G5948CxEn.2rfk5W1cvgDaK2RtpwJzBy2F0a3awzO', null, '2018-04-14 09:59:08', '2018-04-14 10:02:45', '2018-04-14 10:02:45', null, null, '11111111111111111', '0', '3');
INSERT INTO `admins` VALUES ('37', '2222', '22222', null, '$2y$10$8aJ7dwzCywWrd70QJ0k4iOFJuItsb7Wqh1LAFYnRsmNfEijd8cz8q', null, '2018-04-14 10:03:00', '2018-04-14 10:03:00', null, null, '1', '22222222222222222', '1', '2');

-- ----------------------------
-- Table structure for carry_borrow
-- ----------------------------
DROP TABLE IF EXISTS `carry_borrow`;
CREATE TABLE `carry_borrow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) DEFAULT NULL COMMENT '操作人id',
  `collection_id` int(11) DEFAULT NULL COMMENT '藏品id',
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '提借单位',
  `borrow_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '提借时间',
  `return_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '归还时间',
  `auditing_admin` int(11) DEFAULT NULL COMMENT '审核人',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of carry_borrow
-- ----------------------------
INSERT INTO `carry_borrow` VALUES ('1', '14', '2', '某某某', '2018-04-04 08:00:00', '2018-04-12 08:00:00', '14', '2018-04-14 16:39:26', '2018-04-14 16:39:26', null);

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', '钱币类', '2018-05-22 20:43:23', '2018-05-22 20:43:23', null, '#9bd598');
INSERT INTO `categories` VALUES ('6', '用品类', '2018-05-22 20:43:25', '2018-05-22 20:43:25', null, '#ffd58f');

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `period` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '年代',
  `category_id` int(11) DEFAULT NULL,
  `texture_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `size` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '尺寸',
  `weight` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '质量',
  `completion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pattern` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `character` text COLLATE utf8_unicode_ci,
  `picture_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `video_address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `source_way` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '来源方式',
  `time` date DEFAULT NULL COMMENT '入藏日期',
  `level` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '级别',
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '保存位置',
  `condition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '保存方式',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('1', '的', '2018-02-09', '1', '15', '1', '20-22-22', '好', '好', '好的', '好', 'collectionFiles/LtJsIK96CnwsIaCcdCdW2O1WaALGNFtyritMu4Aw.jpeg', null, '2018-04-09 17:20:59', '2018-04-09 17:20:59', '2018-04-09 17:20:59', null, null, null, null, null);
INSERT INTO `collection` VALUES ('2', '测试藏品', '1967', '1', '14', '1', '12-23-45', '好', '好', '的', 'd', 'collectionFiles/lOvmpv3vlaRCmT1u7fejWwsoSJdv1GUmCCqk1FIs.jpeg', null, '2018-06-10 10:12:01', '2018-06-10 10:12:01', null, null, '2018-03-25', '1', '库房3区', '常温');

-- ----------------------------
-- Table structure for collection_work_info
-- ----------------------------
DROP TABLE IF EXISTS `collection_work_info`;
CREATE TABLE `collection_work_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` date DEFAULT NULL,
  `display_area` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '展区',
  `collection_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of collection_work_info
-- ----------------------------
INSERT INTO `collection_work_info` VALUES ('1', '2018-03-09', '15-25°置于阴凉干燥处', '1', '2018-04-08 22:09:16', '2018-04-08 22:09:16', '2018-04-08 22:09:16');
INSERT INTO `collection_work_info` VALUES ('2', '2018-04-08', '20-25°阴凉干燥处', '1', '2018-04-09 17:14:18', '2018-04-09 17:14:18', '2018-04-09 17:14:18');
INSERT INTO `collection_work_info` VALUES ('3', '2018-04-19', '常温保存', '2', '2018-06-10 16:49:30', '2018-06-10 16:49:30', null);

-- ----------------------------
-- Table structure for damage
-- ----------------------------
DROP TABLE IF EXISTS `damage`;
CREATE TABLE `damage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `collection_id` int(11) DEFAULT NULL,
  `damage_people` int(11) DEFAULT NULL,
  `damage_reason` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '损坏原因',
  `is_repair` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '是否可以修复',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of damage
-- ----------------------------
INSERT INTO `damage` VALUES ('1', '2', '14', 'buxiaoxin', '1', '2018-04-18 20:24:31', '2018-04-18 20:24:31', '2018-04-18 20:24:31');
INSERT INTO `damage` VALUES ('2', '2', '14', '不小心', '1', '2018-05-02 14:58:56', '2018-05-02 14:58:56', null);

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `department_role` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `number` int(11) DEFAULT '0' COMMENT '人数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('1', '人事部门', null, '2018-03-31 16:14:55', '2018-03-31 16:14:55', '2018-03-31 16:14:55', '0');
INSERT INTO `department` VALUES ('2', '技术部', null, '2018-03-31 16:14:36', '2018-03-31 16:14:36', null, '0');
INSERT INTO `department` VALUES ('3', '人事部', null, '2018-03-31 17:22:35', '2018-03-31 17:22:35', null, '0');
INSERT INTO `department` VALUES ('4', '人事部11', null, '2018-04-01 18:17:29', '2018-04-01 18:17:29', '2018-04-01 18:17:29', '0');

-- ----------------------------
-- Table structure for go_out_manage
-- ----------------------------
DROP TABLE IF EXISTS `go_out_manage`;
CREATE TABLE `go_out_manage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) DEFAULT NULL,
  `collection_id` int(11) DEFAULT NULL,
  `time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remark` text COLLATE utf8_unicode_ci COMMENT '描述',
  `number` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '藏品出入数量',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of go_out_manage
-- ----------------------------
INSERT INTO `go_out_manage` VALUES ('1', '35', '2', '2018-05-06 16:00:00', '2018-05-02 14:47:22', '2018-05-02 14:47:22', null, '带出藏品', '3');

-- ----------------------------
-- Table structure for knowledge
-- ----------------------------
DROP TABLE IF EXISTS `knowledge`;
CREATE TABLE `knowledge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `start_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `end_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of knowledge
-- ----------------------------
INSERT INTO `knowledge` VALUES ('3', '1', '1950-01-01 00:00:00', '2018-01-01 00:00:00', '2018-06-10 16:11:13', '2018-06-10 16:11:13', null, '测试知识库内容测试知识库内容测试知识库内容测试知识库');

-- ----------------------------
-- Table structure for logs
-- ----------------------------
DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) DEFAULT NULL COMMENT '操作人id',
  `time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `active` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `object` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of logs
-- ----------------------------
INSERT INTO `logs` VALUES ('1', '14', '2018-04-14 10:05:59', '修改了藏品测试藏品', null, '2018-04-14 10:05:59', '2018-04-14 10:05:59', null);
INSERT INTO `logs` VALUES ('2', '14', '2018-04-14 10:06:08', '修改了藏品测试藏品', null, '2018-04-14 10:06:08', '2018-04-14 10:06:08', null);
INSERT INTO `logs` VALUES ('3', '14', '2018-04-14 15:50:32', '修改了藏品测试藏品', null, '2018-04-14 15:50:32', '2018-04-14 15:50:32', null);
INSERT INTO `logs` VALUES ('4', '14', '2018-04-14 15:50:48', '修改了藏品测试藏品', null, '2018-04-14 15:50:48', '2018-04-14 15:50:48', null);
INSERT INTO `logs` VALUES ('5', '14', '2018-04-14 15:55:27', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 15:55:27', '2018-04-14 15:55:27', null);
INSERT INTO `logs` VALUES ('6', '14', '2018-04-14 15:55:35', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 15:55:35', '2018-04-14 15:55:35', null);
INSERT INTO `logs` VALUES ('7', '14', '2018-04-14 16:01:54', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 16:01:54', '2018-04-14 16:01:54', null);
INSERT INTO `logs` VALUES ('8', '14', '2018-04-14 16:03:33', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 16:03:33', '2018-04-14 16:03:33', null);
INSERT INTO `logs` VALUES ('9', '14', '2018-04-14 16:08:12', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 16:08:12', '2018-04-14 16:08:12', null);
INSERT INTO `logs` VALUES ('10', '14', '2018-04-14 16:09:54', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 16:09:54', '2018-04-14 16:09:54', null);
INSERT INTO `logs` VALUES ('11', '14', '2018-04-14 16:12:34', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-04-14 16:12:34', '2018-04-14 16:12:34', null);
INSERT INTO `logs` VALUES ('12', '14', '2018-04-14 16:33:33', '添加提借信息-提借单位:某某某id:1', null, '2018-04-14 16:33:33', '2018-04-14 16:33:33', null);
INSERT INTO `logs` VALUES ('13', '14', '2018-04-14 16:39:26', '修改提借信息-提借单位:某某某id:1', null, '2018-04-14 16:39:26', '2018-04-14 16:39:26', null);
INSERT INTO `logs` VALUES ('14', '14', '2018-04-16 20:29:17', '修改了藏品测试藏品', null, '2018-04-16 20:29:17', '2018-04-16 20:29:17', null);
INSERT INTO `logs` VALUES ('15', '14', '2018-04-18 19:31:14', '添加了损坏信息', null, '2018-04-18 19:31:14', '2018-04-18 19:31:14', null);
INSERT INTO `logs` VALUES ('16', '14', '2018-04-18 20:23:17', '修改了损坏信息1', null, '2018-04-18 20:23:17', '2018-04-18 20:23:17', null);
INSERT INTO `logs` VALUES ('17', '14', '2018-04-18 20:23:29', '修改了损坏信息1', null, '2018-04-18 20:23:29', '2018-04-18 20:23:29', null);
INSERT INTO `logs` VALUES ('18', '14', '2018-04-18 20:23:34', '修改了损坏信息1', null, '2018-04-18 20:23:34', '2018-04-18 20:23:34', null);
INSERT INTO `logs` VALUES ('19', '14', '2018-04-18 20:24:31', '删除了损坏信息1', null, '2018-04-18 20:24:31', '2018-04-18 20:24:31', null);
INSERT INTO `logs` VALUES ('20', '14', '2018-05-02 14:58:56', '添加了损坏信息', null, '2018-05-02 14:58:56', '2018-05-02 14:58:56', null);
INSERT INTO `logs` VALUES ('21', '14', '2018-05-07 22:10:11', '修改了藏品测试藏品', null, '2018-05-07 22:10:11', '2018-05-07 22:10:11', null);
INSERT INTO `logs` VALUES ('22', '14', '2018-06-10 09:55:46', '修改了藏品测试藏品', null, '2018-06-10 09:55:46', '2018-06-10 09:55:46', null);
INSERT INTO `logs` VALUES ('23', '14', '2018-06-10 09:55:55', '修改了藏品测试藏品', null, '2018-06-10 09:55:55', '2018-06-10 09:55:55', null);
INSERT INTO `logs` VALUES ('24', '14', '2018-06-10 09:56:56', '修改了藏品测试藏品', null, '2018-06-10 09:56:56', '2018-06-10 09:56:56', null);
INSERT INTO `logs` VALUES ('25', '14', '2018-06-10 10:08:09', '修改了藏品测试藏品', null, '2018-06-10 10:08:09', '2018-06-10 10:08:09', null);
INSERT INTO `logs` VALUES ('26', '14', '2018-06-10 10:11:01', '修改了藏品测试藏品', null, '2018-06-10 10:11:01', '2018-06-10 10:11:01', null);
INSERT INTO `logs` VALUES ('27', '14', '2018-06-10 10:11:35', '修改了藏品测试藏品', null, '2018-06-10 10:11:35', '2018-06-10 10:11:35', null);
INSERT INTO `logs` VALUES ('28', '14', '2018-06-10 10:11:51', '修改了藏品测试藏品', null, '2018-06-10 10:11:51', '2018-06-10 10:11:51', null);
INSERT INTO `logs` VALUES ('29', '14', '2018-06-10 10:12:01', '修改了藏品测试藏品', null, '2018-06-10 10:12:01', '2018-06-10 10:12:01', null);
INSERT INTO `logs` VALUES ('30', '14', '2018-06-10 16:43:41', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-06-10 16:43:41', '2018-06-10 16:43:41', null);
INSERT INTO `logs` VALUES ('31', '14', '2018-06-10 16:49:30', '修改了藏品工作信息-藏品ID：2ID：3', null, '2018-06-10 16:49:30', '2018-06-10 16:49:30', null);

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2016_06_01_000001_create_oauth_auth_codes_table', '1');
INSERT INTO `migrations` VALUES ('2', '2016_06_01_000002_create_oauth_access_tokens_table', '1');
INSERT INTO `migrations` VALUES ('3', '2016_06_01_000003_create_oauth_refresh_tokens_table', '1');
INSERT INTO `migrations` VALUES ('4', '2016_06_01_000004_create_oauth_clients_table', '1');
INSERT INTO `migrations` VALUES ('5', '2016_06_01_000005_create_oauth_personal_access_clients_table', '1');
INSERT INTO `migrations` VALUES ('6', '2018_01_26_103921_add_store_id_to_delivery_men_table', '2');
INSERT INTO `migrations` VALUES ('7', '2018_02_22_145124_create_property_table', '2');
INSERT INTO `migrations` VALUES ('9', '2018_03_14_140604_add_sort_to_products_table', '3');
INSERT INTO `migrations` VALUES ('10', '2018_03_23_142238_add_is_show_to_products_table', '4');

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------
INSERT INTO `oauth_auth_codes` VALUES ('28406431761aedf4f516521d001a998b8edb62bb9806f41a3da4f9ee90f2cce5d6334bef13caf6f2', '15', '4', '[]', '0', '2017-11-22 18:19:11');
INSERT INTO `oauth_auth_codes` VALUES ('6c18044e16d6bab2ef4d7222d4d6e5562cd457bbad24fdcaf3e9fc56974291a424daf230da5b54e9', '15', '4', '[]', '0', '2017-11-23 10:39:41');
INSERT INTO `oauth_auth_codes` VALUES ('b5121ee89f3e86d9ffb63e04b0ee10830db380202371316378fc4b549d57687f259d21c8ae7d4895', '15', '4', '[]', '0', '2017-11-22 18:18:56');

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('1', '15', 'Laravel Personal Access Client', 'ty8LPXaGQdbujPmJUTyv2wKg8bXdqf0pvqLn1hjs', 'http://localhost', '1', '0', '0', '2017-11-21 11:51:14', '2017-11-21 11:51:14');
INSERT INTO `oauth_clients` VALUES ('2', null, 'Laravel Password Grant Client', 'OQB05kBBJVJm4Nb4SysJl8PuqKJCZUNByAbS0Rn0', 'http://localhost', '0', '1', '0', '2017-11-21 11:51:14', '2017-11-21 11:51:14');
INSERT INTO `oauth_clients` VALUES ('3', '0', 'test user', 'yxHiXgWkcTWQYyvkvIdtzSwqqpzT8c9fOg7HCNjN', 'http://localhost/auth/callback', '0', '0', '0', '2017-11-21 13:35:21', '2017-11-21 13:35:21');
INSERT INTO `oauth_clients` VALUES ('4', '15', 'Test ID 15', 'A8SjeEDsgFi3w3SKdTlF0jjfOevHyuYbr88SNnjV', 'http://localhost/auth/callback', '0', '0', '0', '2017-11-22 18:00:20', '2017-11-22 18:00:20');

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------
INSERT INTO `oauth_personal_access_clients` VALUES ('1', '1', '2017-11-21 11:51:14', '2017-11-21 11:51:14');

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for texture
-- ----------------------------
DROP TABLE IF EXISTS `texture`;
CREATE TABLE `texture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of texture
-- ----------------------------
INSERT INTO `texture` VALUES ('11', 'ceshid', '2018-04-02 12:54:42', '2018-04-02 12:54:42', '2018-04-02 12:54:42');
INSERT INTO `texture` VALUES ('12', 'sssssd', '2018-04-02 12:57:02', '2018-04-02 12:57:02', '2018-04-02 12:57:02');
INSERT INTO `texture` VALUES ('13', 'ssseeeeddd', '2018-04-02 12:59:38', '2018-04-02 12:59:38', '2018-04-02 12:59:38');
INSERT INTO `texture` VALUES ('14', '陶瓷类', '2018-04-07 17:48:30', '2018-04-07 17:48:30', null);
INSERT INTO `texture` VALUES ('15', '金属类', '2018-04-07 17:48:37', '2018-04-07 17:48:37', null);
