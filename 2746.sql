UPDATE virus
SET name = REPLACE(name, 'H1', 'X')
WHERE name LIKE '%H1%';