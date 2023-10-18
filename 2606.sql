SELECT p.id, p.name
FROM products p
JOIN categories c ON p.id_categories = c.id
WHERE LOWER(c.name) LIKE 'super%';