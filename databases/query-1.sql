SELECT id, email, country FROM (
	SELECT user_id
	FROM transactions 
	GROUP BY user_id 
	ORDER BY SUM(usd_amount) DESC LIMIT 3) 
AS best_customers
INNER JOIN users ON users.id = best_customers.user_id