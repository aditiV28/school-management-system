# school-management-system
This API is designed to facilitate the management of schools, classrooms and students. It allows users to perform basic CRUD operations on the mentioned entities. The API also supports authentication and authorization mechanisms to ensure that only authorized users can perform certain operations. 

Features
1. User Management: Register and login users with two roles (Superadmin, SchoolAdmin).
2. School Management: Superadmins can add, update, view, and delete schools.
3. Classroom Management: SchoolAdmins can add, update, view, and delete classrooms within their respective schools.
4. Student Management: SchoolAdmins can add, update, view, and delete students within their respective classrooms.

Technology Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- API Documentation: OpenAPI (Swagger)

Prerequisites
- Node.js (>=14.x)
- MongoDB

Installation
1. Clone the repository
2. install dependencies
3. Set up environment variables
4. Start the server

For API endpoints and documentation, error handling and input-output expected formats please refer to the openapi.yml file under /utils. Copy-paste the openapi.yml file into a swagger editor (https://editor.swagger.io/) to get a better understanding.

Authentication and Authorization

This API uses JWT for authorization purpose. Include the token (returned by login function provided login is successful) in the header of your requests. 

Roles and permissions:

1. Superadmin: Can manage all schools.
2. SchoolAdmin: Can manage classrooms and students within their respective schools.

   
