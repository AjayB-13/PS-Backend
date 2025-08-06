# Backend: Password Reset API

## gmail-id stored in DB - ajaybabu1109@gmail.com

This is the backend API for the password reset application. It is responsible for handling all the business logic, database interactions, token management, and email sending. The API follows a Model-View-Controller (MVC) structure for clean organization and scalability.

##  Features

- **RESTful API:** Provides `POST` endpoints for user registration, forgot password, and password reset.
- **User Authentication:** Uses `bcrypt` to securely hash and store user passwords.
- **Token-Based Security:** Generates a secure JSON Web Token (JWT) for each password reset request.
- **Secure Links:** Adds an expiration time to the password reset token to prevent its misuse.
- **Email Service:** Integrates with Nodemailer to send password reset emails to users.
- **Database:** Connects to a MongoDB database to store and manage user data.

##  Technologies Used

- **Node.js:** The JavaScript runtime environment.
- **Express:** A flexible Node.js web application framework.
- **Mongoose:** An object data modeling (ODM) library for MongoDB.
- **JWT (JsonWebToken):** For creating and verifying secure tokens.
- **Bcrypt:** For hashing passwords.
- **Nodemailer:** For sending emails.
- **CORS:** To enable communication with the frontend.
- **Dotenv:** To manage environment variables securely.

## 🤝 API Endpoints

-   **`POST /api/register`**: Registers a new user.
    -   Body: `{ "email": "user@example.com", "password": "securepassword" }`
-   **`POST /api/forgot-password`**: Initiates the password reset process.
    -   Body: `{ "email": "user@example.com" }`
-   **`POST /api/reset-password/:token`**: Resets the user's password using a valid token.
    -   Body: `{ "password": "new_secure_password" }`