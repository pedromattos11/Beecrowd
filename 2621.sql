    SELECT p.name
    FROM products p
    INNER JOIN providers pr ON p.id_providers = pr.id
    WHERE p.amount >= 10 AND p.amount <= 20 AND LEFT(pr.name, 1) = 'P';