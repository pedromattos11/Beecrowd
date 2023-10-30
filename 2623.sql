SELECT c.name
FROM customers c
JOIN legal_person l ON c.id = l.id_customers
WHERE l.cnpj IS NOT NULL;