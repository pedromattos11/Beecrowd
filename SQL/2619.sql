SELECT
    p.name AS product_name,
    pr.name AS provider_name,
    p.price
FROM
    products p
JOIN
    providers pr ON p.id_providers = pr.id
WHERE
    p.price > 1000
    AND p.id_categories = (SELECT id FROM categories WHERE name = 'Super Luxury');