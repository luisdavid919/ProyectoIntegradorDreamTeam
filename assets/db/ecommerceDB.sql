-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;
-- USE ecommercedbUser;
-- -----------------------------------------------------
-- Table `mydb`.`registro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommercedbUser`.`registro` (
  `idregistro` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidoPat` VARCHAR(45) NOT NULL,
  `apellidoMat` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `user` VARCHAR(45) NOT NULL,
  `contra` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NULL,
  `correo2` VARCHAR(45) NULL,
  `terminos` VARCHAR(45) NULL,
  PRIMARY KEY (`idregistro`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`login` (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(45) NOT NULL,
  `user` VARCHAR(45) NULL,
  `contra` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idlogin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`contactanos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`contactanos` (
  `idcontactanos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` INT(15) NOT NULL,
  `comentario` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`idcontactanos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`compra` (
  `idcompra` INT NOT NULL AUTO_INCREMENT,
  `idproducto` VARCHAR(45) NOT NULL,
  `totalPrecio` INT(6) NOT NULL,
  PRIMARY KEY (`idcompra`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` INT(6) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `urlImagen` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidoPat` VARCHAR(45) NOT NULL,
  `apellidoMat` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `user` VARCHAR(45) NOT NULL,
  `telefono` INT(15) NOT NULL,
  `contra` VARCHAR(20) NOT NULL,
  `registro_idregistro` INT NOT NULL,
  `login_idlogin` INT NOT NULL,
  `contactanos_idcontactanos` INT NOT NULL,
  `compra_idcompra` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `contactanos_idcontactanos`, `producto_idproducto`),
  INDEX `fk_usuario_registro_idx` (`registro_idregistro` ASC) VISIBLE,
  INDEX `fk_usuario_login1_idx` (`login_idlogin` ASC) VISIBLE,
  INDEX `fk_usuario_contactanos1_idx` (`contactanos_idcontactanos` ASC) VISIBLE,
  INDEX `fk_usuario_compra1_idx` (`compra_idcompra` ASC) VISIBLE,
  INDEX `fk_usuario_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_registro`
    FOREIGN KEY (`registro_idregistro`)
    REFERENCES `mydb`.`registro` (`idregistro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_login1`
    FOREIGN KEY (`login_idlogin`)
    REFERENCES `mydb`.`login` (`idlogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_contactanos1`
    FOREIGN KEY (`contactanos_idcontactanos`)
    REFERENCES `mydb`.`contactanos` (`idcontactanos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_compra1`
    FOREIGN KEY (`compra_idcompra`)
    REFERENCES `mydb`.`compra` (`idcompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `mydb`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
