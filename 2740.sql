(
  SELECT 'Podium: ' || team AS name
  FROM league
  WHERE position BETWEEN 1 AND 3
)
UNION
(
  SELECT 'Demoted: ' || team AS name
  FROM league
  WHERE position >= (SELECT MAX(position) - 1 FROM league)
)