-- Comments in SQL Start with dash-dash --

--Find the app with an ID of 1880.
SELECT * FROM analytics WHERE ID = 1880;

--Find the ID and app name for all apps that were last updated on August 01, 2018.
SELECT ID, app_name FROM analytics where last_updated = '2018-08-01';

--Count the number of apps in each category, e.g. “Family | 1972”.
SELECT category, COUNT(app_name) FROM analytics GROUP BY category;

--Find the top 5 most-reviewed apps and the number of reviews for each.
SELECT app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;

--Find the app that has the most reviews with a rating greater than equal to 4.8.
SELECT * FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;

--Find the average rating for each category ordered by the highest rated to lowest rated.
SELECT category, AVG(rating) from analytics GROUP BY CATEGORY ORDER BY AVG(rating) DESC;

--Find the name, price, and rating of the most expensive app with a rating that’s less than 3.
SELECT app_name, price, rating FROM analytics WHERE RATING < 3 ORDER BY PRICE DESC LIMIT 1;

--Find all apps with a min install not exceeding 50, that have a rating. Order your results by highest rated first.
SELECT * FROM analytics WHERE min_installs <= 50 AND rating IS NOT NULL  ORDER BY rating DESC;

-- Find the names of all apps that are rated less than 3 with at least 10000 reviews.
SELECT * FROM analytics WHERE RATING < 3 AND reviews > 10000;

--Find the top 10 most-reviewed apps that cost between 10 cents and a dollar.
SELECT * FROM analytics WHERE price BETWEEN 0.10 and 1.00 ORDER BY REVIEWS DESC LIMIT 10;

--Find the most out of date app.
SELECT * FROM analytics ORDER BY last_updated LIMIT 1;

--Find the most expensive app

SELECT * FROM analytics ORDER BY price DESC LIMIT 1;

-- Count all the reviews in the Google Play Store.
SELECT SUM(reviews) FROM analytics;

--Find all the categories that have more than 300 apps in them.
SELECT category, COUNT(*) FROM analytics GROUP BY category HAVING COUNT(*) > 300;

--Find the app that has the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display the name of the app along with the number of reviews, the min_installs, and the proportion.
SELECT app_name, reviews, min_installs, reviews / min_installs AS proportion FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC LIMIT 1;