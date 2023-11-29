SELECT
  year,
  sender.name AS sender,
  receiver.name AS receiver
FROM
  users AS sender
  INNER JOIN packages
    ON sender.id = packages.id_user_sender
  INNER JOIN users AS receiver
    ON packages.id_user_receiver = receiver.id
WHERE
  (packages.color = 'blue' OR packages.year = 2015)
  AND (sender.address <> 'Taiwan' OR receiver.address <> 'Taiwan')
ORDER BY
  year DESC;
