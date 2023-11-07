SELECT 'Approved: ' || name || ' ' || grade AS result
FROM students
WHERE grade >= 7
ORDER BY grade DESC, name;