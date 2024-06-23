-- Creamos base de datos si no existe
CREATE DATABASE IF NOT EXISTS `espot`;
-- Usamos la base de datos (debe existir)
USE `espot`;

-- Si existe el procedimiento lo eliminamos
DROP PROCEDURE IF EXISTS `elimina_base_de_datos_si_existe`;
-- Procedimiento para eliminar una base de datos si existe
DELIMITER //
CREATE PROCEDURE `elimina_base_de_datos_si_existe`(IN db_name VARCHAR(64))
BEGIN
    -- Variable para verificar si existe la base de datos --
    DECLARE 
        existe_base_de_datos INT DEFAULT 0;

    -- Verifica si la base de datos existe
    SELECT COUNT(*) INTO existe_base_de_datos FROM information_schema.schemata WHERE schema_name = db_name;

    -- Si la base de datos existe la eliminamos
    IF existe_base_de_datos > 0 THEN
        SET @drop_dp = CONCAT('DROP DATABASE ', db_name);
        PREPARE stmt FROM @drop_dp;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;
    END IF;
END; //
DELIMITER ;

-- Eliminamos la base de datos
CALL `elimina_base_de_datos_si_existe`('espot');

-- Creamos la base de datos de nuevo
CREATE DATABASE `espot`;
USE `espot`;

-- Si existe el procedimiento lo eliminamos
DROP PROCEDURE IF EXISTS `crea_usuario_si_no_existe`;
-- Procedimiento almacenado para verificar si ya existe el usuario
DELIMITER //
CREATE PROCEDURE `crea_usuario_si_no_existe`()
BEGIN
    DECLARE
        existe_usuario INT DEFAULT 0;
    
    -- Verifica si el usuario existe
    SELECT COUNT(*) INTO existe_usuario FROM mysql.user WHERE user = 'sebs' AND host = 'localhost';

    -- Si el usuario no existe, crea el usuario y otorga privilegios
    IF existe_usuario = 0 THEN
        -- Crear usuario y otorgar privilegios --
        CREATE USER 'sebs'@'localhost' IDENTIFIED BY 'sebsDev123!';
        GRANT ALL PRIVILEGES ON espot.* TO 'sebs'@'localhost';
    END IF;
END; //
DELIMITER ;
-- Llamamos al procedimiento
CALL `crea_usuario_si_no_existe`;

-- Tabla Automovil --
CREATE TABLE `Automovil`(
    `idAutomovil` INT NOT NULL,
    `marca` VARCHAR(64) NOT NULL,
    `modelo`VARCHAR(64) NOT NULL,
    `año` YEAR NOT NULL,
    `precio` FLOAT NOT NULL,
    `color` VARCHAR(20) NOT NULL,
    `tipoMotor` VARCHAR(20) NOT NULL,
    `transmision` VARCHAR(20) NOT NULL,
    `kilometraje` INT NOT NULL,
    `fechaEntrada` DATE NOT NULL,
    `stock` INT NOT NULL
);
-- Llave primaria Automovil --
ALTER TABLE `Automovil`
ADD CONSTRAINT `pkAutomovil`
PRIMARY KEY (`idAutomovil`),
MODIFY `idAutomovil` INT NOT NULL UNIQUE AUTO_INCREMENT;

-- Tabla Imagen --
CREATE TABLE `Imagen`(
    `idImagen` INT NOT NULL,
    `idAutomovil` INT NOT NULL,
    `ruta` TEXT NOT NULL
);
-- Llave primaria Imagen --
ALTER TABLE `Imagen`
ADD CONSTRAINT `pkImagen`
PRIMARY KEY (`idImagen`),
MODIFY `idImagen` INT NOT NULL UNIQUE AUTO_INCREMENT;
-- Llave foranea Imagen
ALTER TABLE `Imagen`
ADD CONSTRAINT `fkImagen`
FOREIGN KEY (`idAutomovil`) REFERENCES `Automovil`(`idAutomovil`);

-- Extras

-- Ver todos los usuarios --
-- SELECT user FROM mysql.user;

-- Verifica si existe sebs --
-- SELECT COUNT(*) FROM mysql.user WHERE user = 'sebs' AND host = 'localhost';

-- Eliminar usuario sebs
-- DROP USER 'sebs'@'localhost';

