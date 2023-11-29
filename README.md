# Product API README

## Overview

This is a simple API for managing products. It's built using Node.js and MongoDB, with Mongoose as the ODM.

## Table of Contents

- [Product Schema](#product-schema)
- [Pre-save Middleware](#pre-save-middleware)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Product Schema

The product schema defines the structure of a product object. It includes the following fields:

- **name**: String, required
- **category**: String, required
- **size**: Array of Strings, required, with values ["L", "M"]
- **color**: Array of Strings, required, with values ["Red", "Green"]
- **price**: Number

## Pre-save Middleware

A pre-save middleware is implemented to automatically calculate the price based on the size and color of the product before saving it to the database.


# API Endpoints

1. **Create a Product**
   - **Endpoint**: `/api/products`
   - **Method**: `POST`

2. **Get All Products**
   - **Endpoint**: `/api/products`
   - **Method**: `GET`

3. **Get a Product by ID**
   - **Endpoint**: `/api/products/:productId`
   - **Method**: `GET`

4. **Update a Product by ID**
   - **Endpoint**: `/api/products/:productId`
   - **Method**: `PUT`

5. **Delete a Product by ID**
   - **Endpoint**: `/api/products/:productId`
   - **Method**: `DELETE`

# Usage

To use this API, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and provide the connection string in the appropriate configuration file.
4. Run the application with `node app.js` or your preferred method.

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-api.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the MongoDB database and provide the connection string in a .env file:
  ```bash
MONGODB_URI=your-mongodb-connection-string
```
4.Run the application:
```bash
npm start

```
## Contributing
Feel free to contribute to the development of this API by submitting pull requests or reporting issues.


