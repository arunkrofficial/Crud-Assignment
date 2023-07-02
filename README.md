# Crud-Assignment

User Management Backend with Express and MongoDB

  This project is a user management backend system built with Express.js and MongoDB. It provides a RESTful API for user registration and login functionality, allowing users to create an account and authenticate themselves.

# Features
     1.User Registration: Users can create a new account by providing their name, email, and password.
     2.User Login: Users can log in to their account using their registered email and password.

# Technologies Used

    1.Express.js: Fast and minimalist web application framework for Node.js.
    2.MongoDB: NoSQL database used to store user information.
    3.Node.js: JavaScript runtime environment used for server-side development.

# Prerequisites

    1.Node.js and npm (Node Package Manager) installed on your machine.
    2.MongoDB installed and running on your system.

#  Getting Started

    1.Clone the repository: git clone <repository-url>
    2.Navigate to the project directory: cd user-management-backend
    3.Install dependencies: npm install
    4.Start the server: node server.js
    5.The server will start running on http://localhost:3000 (or your specified port).

#  API Endpoints
    # Register
      Method: POST
      Endpoint: /register
      Payload:

       {
         "name": "user_name",
         "email": "user_email",
         "password": "user_password"
       }


     Response: 
       {
         "msg": "User Registered Successfully"
       }

 #  Login
    Method: POST
    Endpoint: /login
    Payload:

     {
       "email": "user_email",
       "password": "user_password"
     }

    Response:
      {
        "msg": "User Login Successfully"
      }

#  Error Handling

    The API handles the following error cases:
     1.Validation Errors: If the provided data is invalid or missing, appropriate error messages will be returned.
     2.User Already Exists: If a user tries to register with an email that already exists in the system, an error message will be returned.
     3.Invalid Credentials: If the user provides incorrect email or password during login, an error message will be returned.
     4.Internal Server Error: If any unexpected error occurs during registration or login, an internal server error message will be returned.

#  Testing with Postman

     1. Open Postman: Launch the Postman extension or desktop application.

     2.Create a new request: Click on the "New" button in Postman to create a new request.

     3.Set the request details:
   
         1.Choose the appropriate HTTP method (POST) from the dropdown menu.
         2.Enter the URL of the endpoint you want to test. For example, http://localhost:3000/register for the /register endpoint.
         3.Select the "Body" tab in the request builder.
         
    4.Add request payload:
        1.Choose the "Raw" option.
        2.Select "JSON (application/json)" as the data type.
        3.Enter the request payload in the request body in JSON format. For example:
             
         {
           "name": "John Doe",
           "email": "johndoe@example.com",
           "password": "password123"
        }

     5.Send the request: Click the "Send" button to send the request to the server.
     6.Check the response: The response from the server will be displayed in the Postman response pane. Verify the response message, such as 
         {"msg": "User Registered Successfully"} in this case.
     7.Repeat the process for other endpoints: You can follow the same steps to test other endpoints, such as /login.

#  Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

