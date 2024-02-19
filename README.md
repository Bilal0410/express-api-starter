# Report

CRUD REST API REPORT

For this assignment, we decided to work together on creating a CRUD REST API. We thought it would be easier to collaborate on one computer. We also followed the steps we learned in class for building the API.

Choice of Technology: We used Node.js with Express, which is a simple and flexible framework for building APIs. We also used Pocketbase as our database service, Cypress for testing, and Render for hosting our API.

Development Process: We started by setting up our computer for development. Working together helped us coordinate better. While we initially worked separately, we decided to combine our efforts to finish the assignment. We had done the same steps separately in class, but since one of us was a bit further than the other, we chose to just do it on one computer and continue the work from there.

Implementation Details:
• Node.js with Express: We used Express to create the API, which handles requests and responses.
• Pocketbase: Pocketbase helped us manage our data effectively. We designed our database to fit our API's needs. Cypress for Testing: We used Cypress to make sure our API works as expected by writing tests.
• Render Hosting: We hosted our API on Render, which was easy to set up and use.

Additionally, the provided Express.js server application serves as a backend solution for managing products and vending machines, offering functionality to handle HTTP GET, POST, and DELETE requests. Through various routes, users can interact with the server to retrieve, add, and delete both products and vending machines from the associated SQLite database.

For instance, when a GET request is made to /products, the server responds with a list of available products. If a specific product is needed, appending its ID as a query parameter allows for targeted retrieval. Similarly, GET requests to /vending-machines provide access to vending machine data, with optional filtering by machine ID.

To add new entries, clients can send POST requests to /products with the relevant product details included in the request body. Likewise, to incorporate new vending machines into the system, POST requests to /vending-machines should include information such as location and a list of associated product IDs.

Conversely, when a DELETE request is issued to /products or /vending-machines with the corresponding ID provided as a query parameter, the server removes the specified entity from the database, effectively deleting it from the system.

In essence, this Express.js server application offers comprehensive CRUD functionality, enabling users to manage products and vending machines seamlessly through HTTP requests. By leveraging the capabilities of Express.js and SQLite, the server provides a robust foundation for building web applications that require efficient data management capabilities.

# Express API Starter

How to use this template:

```sh
npx create-express-api --directory my-api-name
```

Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [jest](https://www.npmjs.com/package/jest)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev
```
