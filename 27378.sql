SELECT
    c.name,
    ROUND(((c.math * 2 + c.specific * 3 + c.project_plan * 5) / 10.0), 2) AS avg
FROM
    candidate c
JOIN
    score s ON c.id = s.candidate_id
ORDER BY
    avg DESC;