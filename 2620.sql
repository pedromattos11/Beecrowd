SELECT c.name, o.id
FROM customers c
INNER JOIN orders o ON c.id = o.id_customers
WHERE EXTRACT(YEAR FROM o.orders_date) = 2016 AND EXTRACT(MONTH FROM o.orders_date) <= 6;