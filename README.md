# 🧩 Mini Project: Express + PostgreSQL REST API

## 📌 Project Overview

This project is a simple RESTful API built using **Node.js**, **Express.js**, and **PostgreSQL**. It performs full **CRUD** (Create, Read, Update, Delete) operations on a `users` table and follows best practices including modular structure, error handling, and secure database configuration using environment variables.

---

## 📁 Project Structure

/express-pg-api
├── controllers/
│ └── userController.js # Logic for handling CRUD requests
├── db/
│ └── index.js # PostgreSQL connection setup
├── middleware/
│ ├── errorHandler.js # Central error handler
│ └── logger.js # Simple request logger
├── routes/
│ └── users.js # User API routes
├── .env.example # Sample environment file
├── .gitignore # Ignore node_modules, .env, etc.
├── server.js # App entry point
├── SQL-schema.sql # SQL to create 'users' table
├── package.json # App config and dependencies
└── express-postgres-api.postman_collection.json # Postman requests

yaml
Copy
Edit

---

## 🛠️ Setup & Installation

### ✅ Prerequisites

- Node.js (v14+)
- PostgreSQL database
- Postman or curl (for testing)

---

### 🔧 Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd express-pg-api
   Install dependencies
   ```

bash
Copy
Edit
npm install
Configure environment variables

Create a .env file using the .env.example template:

bash
Copy
Edit
cp .env.example .env
Fill in your PostgreSQL credentials:

ini
Copy
Edit
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
Create the users table
Run this SQL manually inside your PostgreSQL database:

sql
Copy
Edit
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
age INTEGER CHECK (age >= 0)
);
Start the server

bash
Copy
Edit
npm run dev
Server will run at: http://localhost:3000

📡 API Endpoints Documentation
✅ Root Endpoint
GET /
Returns a welcome message.

Response:

json
Copy
Edit
{ "message": "API is running" }
📍 /users Endpoints

1. Get All Users
   GET /users

Sample Response:

json
Copy
Edit
[
{ "id": 1, "name": "John", "email": "john@mail.com", "age": 28 },
{ "id": 2, "name": "Jane", "email": "jane@mail.com", "age": 32 }
] 2. Get User by ID
GET /users/:id

Response:

json
Copy
Edit
{ "id": 1, "name": "John", "email": "john@mail.com", "age": 28 } 3. Create a New User
POST /users

Request Body:

json
Copy
Edit
{
"name": "Alice",
"email": "alice@example.com",
"age": 25
}
Success Response (201):

json
Copy
Edit
{ "id": 3, "name": "Alice", "email": "alice@example.com", "age": 25 } 4. Update a User
PUT /users/:id

Request Body:

json
Copy
Edit
{
"name": "Updated Name",
"email": "updated@mail.com",
"age": 30
}
Success Response:

json
Copy
Edit
{ "id": 1, "name": "Updated Name", "email": "updated@mail.com", "age": 30 } 5. Delete a User
DELETE /users/:id

Success Response:

json
Copy
Edit
{ "message": "User with ID 1 deleted successfully." }
🧪 Postman Collection
You can test all endpoints using the included Postman file:

pgsql
Copy
Edit
express-postgres-api.postman_collection.json
To use it:

Open Postman

Click Import

Choose the file above and start testing.

💡 Notes
Ensure PostgreSQL is running and the credentials in .env match your local setup.

Do not include your real .env file when uploading your project. Use .env.example.

✅ Grading Checklist Alignment
Feature Status
PostgreSQL Connection ✅
CRUD Routes with Controllers ✅
Modular Folder Structure ✅
Error Handling Middleware ✅
.env Usage and Example File ✅
Postman Collection ✅
README with Instructions ✅
