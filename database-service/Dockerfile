FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE db_test
ENV MYSQL_USER user
ENV MYSQL_PASSWORD password

ADD create-tax-table.sql /docker-entrypoint-initdb.d
ADD create-product-table.sql /docker-entrypoint-initdb.d
ADD create-order-table.sql /docker-entrypoint-initdb.d
