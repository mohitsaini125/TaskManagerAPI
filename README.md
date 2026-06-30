# TaskManager API
A RESTful TaskManager API built using Node.js, Express.js, MongoDB, and Mongoose following the MVC architecture.

## Overview
This project provides CRUD operations for blog management.

Features:
- Create a task
- Read all tasks
- Read a single task by Id
- Read tasks by page number (pagination)
- Update a task ("pending" or "completed" enumeration)
- Delete a task

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Nodemon
- Postman

# Installation

1. Clone the repo

git clone https://github.com/mohitsaini125/TaskManagerAPI.git

2. Navigate to the project repository

cd TaskManager

3. Install project dependencies

npm install

4. Replace the empty string of the dbURL in index.js with your connection string

const dbURL = "insert your mongodb connection string here" (in the index.js)

5. Run the project API

npm run