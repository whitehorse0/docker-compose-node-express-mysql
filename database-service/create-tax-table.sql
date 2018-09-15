CREATE TABLE tax (
  id      INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name    VARCHAR(40)                        NULL,
  label   VARCHAR(40)                        NULL
) ENGINE = INNODB;

INSERT INTO tax (name, label)
VALUES ('food', 'Food'),
       ('tobacco', 'Tobacco'),
       ('entertainment', 'Entertainment');

DROP PROCEDURE IF EXISTS sp_GetTax;
DELIMITER //
CREATE PROCEDURE sp_GetTax()
  BEGIN
    SELECT * FROM tax;
  END //
DELIMITER ;

CALL sp_GetTax();





