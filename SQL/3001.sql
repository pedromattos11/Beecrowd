SELECT name, price
FROM (
    SELECT id, name, type,
           CASE
             WHEN type = 'A' THEN 20
             WHEN type = 'B' THEN 70
             WHEN type = 'C' THEN 530.5
           END AS price
    FROM products
) AS t
ORDER BY t.type, t.id DESC;
