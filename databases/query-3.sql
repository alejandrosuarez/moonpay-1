SELECT country
FROM transactions
INNER JOIN users ON users.id = transactions.user_id
GROUP BY country
HAVING AVG(usd_amount) < 500