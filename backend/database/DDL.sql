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
    `year` YEAR NOT NULL,
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

-- Disparador para insertar una imagen cuando se agrega un automovil --
DELIMITER $$
CREATE TRIGGER `imagen_automovil_insert`
AFTER INSERT ON `Automovil`
FOR EACH ROW
BEGIN
    -- Ruta --
    DECLARE imagen_ruta TEXT;

    -- Jeep --
    IF NEW.marca = 'Jeep' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = 'Cherokee' THEN CONCAT('Jeep/Cherokee/Cherokee-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Compass' THEN CONCAT('Jeep/Compass/Compass-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Grand Cherokee' THEN CONCAT('Jeep/Grand_Cherokee/Grand_Cherokee-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Mini --
    IF NEW.marca = 'Mini' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = 'Clubman' THEN CONCAT('Mini/Clubman/Clubman-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Cooper' THEN CONCAT('Mini/Cooper/Cooper-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Cooper S' THEN CONCAT('Mini/Cooper_S/Cooper_S-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Nissan --
    IF NEW.marca = 'Nissan' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = '370Z' THEN CONCAT('Nissan/370Z/370Z-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Altima' THEN CONCAT('Nissan/Altima/Altima-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Armada' THEN CONCAT('Nissan/Armada/Armada-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Tesla --
    IF NEW.marca = 'Tesla' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = 'Model 3' THEN CONCAT('Tesla/Model_3/Model_3-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Model S' THEN CONCAT('Tesla/Model_S/Model_S-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Model Y' THEN CONCAT('Tesla/Model_Y/Model_Y-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Toyota --
    IF NEW.marca = 'Toyota' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = 'Avanza' THEN CONCAT('Toyota/Avanza/Avanza-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'C-HR' THEN CONCAT('Toyota/C-HR/C-HR-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Camry' THEN CONCAT('Toyota/Camry/Camry-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Volkswagen --
    IF NEW.marca = 'Volkswagen' THEN
        SET imagen_ruta = CASE
            WHEN NEW.modelo = 'Amarok' THEN CONCAT('Volkswagen/Amarok/Amarok-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Beetle' THEN CONCAT('Volkswagen/Beetle/Beetle-',NEW.color,'.jpg')
            WHEN NEW.modelo = 'Bora' THEN CONCAT('Volkswagen/Bora/Bora-',NEW.color,'.jpg')
            ELSE 'default.jpg'
        END;
    END IF;

    -- Insertamos la imagen --
    INSERT INTO Imagen (idAutomovil, ruta) VALUES (NEW.idAutomovil, imagen_ruta);

END $$
DELIMITER ;


-- Extras

-- Ver todos los usuarios --
-- SELECT user FROM mysql.user;

-- Verifica si existe sebs --
-- SELECT COUNT(*) FROM mysql.user WHERE user = 'sebs' AND host = 'localhost';

-- Eliminar usuario sebs
-- DROP USER 'sebs'@'localhost';

