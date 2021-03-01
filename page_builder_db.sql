/*
Navicat MySQL Data Transfer

Source Server         : sss
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : page_builder_db

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-03-01 13:28:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for templates
-- ----------------------------
DROP TABLE IF EXISTS `templates`;
CREATE TABLE `templates` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `temp_name` varchar(30) DEFAULT NULL,
  `content` text,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `templates_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of templates
-- ----------------------------
INSERT INTO `templates` VALUES ('b1c83b35-d0ad-49e8-8e41-7e28e5f44fd7', '2', '[{\"label\":\"普通盒子\",\"type\":\"normalBox\",\"style\":{\"width\":\"auto\",\"height\":100,\"fontSize\":14,\"fontWeight\":500,\"borderWidth\":1,\"lineHeight\":14,\"textAlign\":\"center\",\"borderColor\":\"#ddd\",\"color\":\"#333333\",\"opacity\":1,\"borderStyle\":\"solid\",\"display\":\"flex\",\"flexDirection\":\"row\",\"flexWrap\":\"wrap\",\"justifyContent\":\"flex-start\",\"alignItems\":\"flex-start\",\"position\":\"relative\",\"backgroundImage\":\"\",\"backgroundPosition\":\"0px 0px\",\"backgroundSize\":\"100% 100%\",\"backgroundColor\":\"#f5f5f5\",\"backgroundRepeat\":\"no-repeat\"},\"children\":[],\"id\":0}]', 'b9535363-dd24-4615-89e9-94006b8ba3fe');
INSERT INTO `templates` VALUES ('ca53276a-c4a5-4073-bd13-69a2dd1dcd90', 'sss', '[{\"label\":\"普通盒子\",\"type\":\"normalBox\",\"style\":{\"width\":\"auto\",\"height\":100,\"fontSize\":14,\"fontWeight\":500,\"borderWidth\":1,\"lineHeight\":14,\"textAlign\":\"center\",\"borderColor\":\"#ddd\",\"color\":\"#333333\",\"opacity\":1,\"borderStyle\":\"solid\",\"display\":\"flex\",\"flexDirection\":\"row\",\"flexWrap\":\"wrap\",\"justifyContent\":\"flex-start\",\"alignItems\":\"flex-start\",\"position\":\"relative\",\"backgroundImage\":\"\",\"backgroundPosition\":\"0px 0px\",\"backgroundSize\":\"100% 100%\",\"backgroundColor\":\"#f5f5f5\",\"backgroundRepeat\":\"no-repeat\"},\"children\":[],\"id\":0}]', '062a2a2e-55f5-4743-b6d9-3b5f7f69fbc1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `account` varchar(11) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('062a2a2e-55f5-4743-b6d9-3b5f7f69fbc1', 'zdq', '18781408774', '111');
INSERT INTO `users` VALUES ('b9535363-dd24-4615-89e9-94006b8ba3fe', '2222222', '18718408774', '1');
