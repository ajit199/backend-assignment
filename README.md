# ECOMMERCE

This repository contains the code for the frontend and backend of the ECOMMERCE application.

## Backend

The backend of the application is built using Express.js framework and Sequelize ORM for querying from a PostgreSQL database. Here are some key features of the backend:

- **Express Framework:** Used for building the RESTful API endpoints.
- **Sequelize ORM:** Utilized for interacting with the PostgreSQL database, providing an easy-to-use interface for database operations.
- **JWT Token Authentication:** Implemented JWT (JSON Web Tokens) for user authentication, providing secure access to protected routes.
- **Models:** Includes user and category models. User model stores category IDs for reference.
- **Nodemailer:** Used for sending static emails, particularly for sending OTPs.

## Frontend

The frontend of the application is developed using React.js and utilizes react-router-dom for routing. Here are some key features of the frontend:

- **React Framework:** Used for building dynamic user interfaces.
- **React Router DOM:** Utilized for client-side routing, enabling navigation between different pages.
- **Login and Register Pages:** Created according to the Figma design, providing user-friendly authentication interfaces.
- **Logout Functionality:** After successful login, a logout link appears on the top-left corner, allowing users to log out securely.

## Getting Started

To get started with running the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the backend directory and install dependencies using `npm install`.
3. Set up your PostgreSQL database and configure the connection in the `.env` file.
4. Start the backend server using `npm start`.
5. Navigate to the frontend directory and install dependencies using `npm install`.
6. Start the frontend server using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.
