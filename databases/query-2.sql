SELECT Count(*) as "Number of Users" FROM (
	SELECT user_id
	FROM transactions
	GROUP BY user_id
	HAVING SUM(usd_amount) > 1000 AND SUM(usd_amount) < 2000) as user_ids;