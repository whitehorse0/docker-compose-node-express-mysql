/***CREATING ALL TABLES*/
CREATE TABLE TAX (
  TaxId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Name    VARCHAR(40)                    NULL,
  Label   VARCHAR(40)                    NULL
)
  ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO TAX (Name, Label)
VALUES ('food', 'Food'),
       ('tobacco', 'Tobacco'),
       ('entertainment', 'Entertainment');

DROP PROCEDURE IF EXISTS sp_GetTax;
DELIMITER //
CREATE PROCEDURE sp_GetTax()
  BEGIN
    SELECT * FROM TAX;
  END //
DELIMITER ;

/**Drop StoreProcedure**/
CALL sp_GetTax();
/******************************************************************/






