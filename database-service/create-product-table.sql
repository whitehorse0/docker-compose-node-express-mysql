CREATE TABLE product (
  id      INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name    VARCHAR(40)                        NULL,
  label   VARCHAR(40)                        NULL,
  amount  DOUBLE                             NULL,
  tax_id  INT(5)                             NULL
) ENGINE = INNODB;

/* INSERT DATA */
INSERT INTO product (name, label, amount, tax_id)
VALUES ('big-mac', 'Big Mac', 1000, 1),
       ('lucky-stretch', 'Lucky Stretch', 1000, 2),
       ('movie', 'Movie', 150, 3);

DROP PROCEDURE IF EXISTS sp_GetProduct;
DELIMITER //
CREATE PROCEDURE sp_GetProduct()
  BEGIN
    SELECT * FROM product;
  END //
DELIMITER ;

CALL sp_GetProduct();