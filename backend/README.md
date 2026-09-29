# Digital Milk Management System - Backend

Spring Boot backend for the Digital Milk Management System.

Requirements:
- Java 17+
- Maven 3.9+

Run with:
mvn spring-boot:run

Server:
http://localhost:8080

Default admin:
Email: admin@digitalmilk.com
Password: Admin@123

Main endpoints:
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
GET  /api/dashboard/stats
GET  /api/dashboard/my-stats
GET  /api/dashboard/farmer-stats
GET/POST/PUT/DELETE /api/farmers
GET/POST/DELETE /api/milk-collections
GET /api/users
GET /api/payments

H2 database:
jdbc:h2:file:./data/digitalmilk
user: sa
password: empty

IMPORTANT:
This is a starter backend matching the current frontend structure. Before production deployment,
change the JWT secret and default admin password and use a production database.
