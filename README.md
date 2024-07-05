
This API is designed to facilitate the management of schools, classrooms and students. It allows users to perform basic CRUD operations on the mentioned entities. The API also supports authentication and authorization mechanisms to ensure that only authorized users can perform certain operations.

Features

User Management: Register and login users with two roles (Superadmin, SchoolAdmin).
School Management: Superadmins can add, update, view, and delete schools.
Classroom Management: SchoolAdmins can add, update, view, and delete classrooms within their respective schools.
Student Management: SchoolAdmins can add, update, view, and delete students within their respective classrooms.
Technology Stack

Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
API Documentation: OpenAPI (Swagger)
Prerequisites

Node.js (>=14.x)
MongoDB
Installation

Clone the repository
install dependencies
Set up environment variables
Start the server
For API endpoints, error handling and input-output expected formats please refer to the openapi.yml file under /utils. Copy-paste the openapi.yml file into a swagger editor (https://editor.swagger.io/) to get a better understanding.

Authentication and Authorization

This API uses JWT for authorization purpose. Include the token (returned by login function provided login is successful) in the header of your requests.

Roles and permissions:

Superadmin: Can manage all schools.
SchoolAdmin: Can manage classrooms and students within their respective schools.
