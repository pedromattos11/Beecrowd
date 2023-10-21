SELECT
    c.name AS category_name,
    SUM(p.amount) AS total_amount
FROM
    categories c
LEFT JOIN
    products p ON c.id = p.id_categories
GROUP BY
    c.name;
