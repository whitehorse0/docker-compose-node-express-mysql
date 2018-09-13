CREATE TABLE orders (
  id      INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_id   INT(5)                        NULL,
  tax_amount   DOUBLE                        NULL,
  total_amount DOUBLE                        NULL
) ENGINE = INNODB;


DROP PROCEDURE IF EXISTS sp_GetOrders;
DELIMITER //
CREATE PROCEDURE sp_GetOrders()
  BEGIN
    SELECT * FROM orders;
  END //
DELIMITER ;

CALL sp_GetOrders();