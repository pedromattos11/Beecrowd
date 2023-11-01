WITH UserPairs AS (
    SELECT
        u1.user_id AS u1_id,
        u1.user_name AS u1_name,
        u1.posts AS u1_posts,
        u2.user_id AS u2_id,
        u2.user_name AS u2_name,
        u2.posts AS u2_posts
    FROM
        users u1
    JOIN
        followers f1 ON u1.user_id = f1.user_id_fk
    JOIN
        followers f2 ON u1.user_id = f2.following_user_id_fk
    JOIN
        users u2 ON f2.user_id_fk = u2.user_id
    WHERE
        u1.user_id < u2.user_id
)
SELECT
    u1_name,
    u2_name
FROM
    UserPairs
WHERE
    u1_posts < u2_posts
UNION
SELECT
    u2_name,
    u1_name
FROM
    UserPairs
WHERE
    u1_posts >= u2_posts
ORDER BY
    u1_name;