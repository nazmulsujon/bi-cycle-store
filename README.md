# 🚴 Bi-Cycle Store

An Express.js application with TypeScript and MongoDB, designed to manage a bicycle store. This project enables CRUD operations for bicycles and orders, ensures data validation using Mongoose and Zod, and includes features like inventory management and revenue calculation.

## Project Structure

```
src/
├── controllers/   # Handles request logic
├── interfaces/    # TypeScript interfaces and types
├── models/        # Mongoose schemas and models
├── routes/        # API routes
├── services/      # Business logic
├── utils/         # Utility functions
```

## Features 🚀

### Product (Bicycle) Management:

- **Create a Bicycle:** Add new bicycles with detailed information.
- **Get All Bicycles:** Retrieve a list of bicycles, filterable by name, brand, or type.
- **Get a Specific Bicycle:** Fetch details of a specific bicycle by ID.
- **Update a Bicycle:** Modify details of an existing bicycle.
- **Delete a Bicycle:** Remove a bicycle from the inventory.

### Order Management:

- **Place an Order:**
  - Reduce the product inventory upon order placement.
  - Handle insufficient stock gracefully.
- **Calculate Revenue:** Using MongoDB aggregation pipeline to calculate total revenue from all orders.



## Installation & Setup ⚙️

Follow the steps below to run the project locally:

### Prerequisites:

- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) set up locally or use a MongoDB cloud instance.
- A package manager like npm or yarn.

### Steps:

1. Clone the repository:  
```
   git clone https://github.com/nazmulsujon/bi-cycle-store.git  
```

2. Navigate to the project directory:  
 ```
   cd bicycle-store  
 ```

3. Install dependencies:  
```
   npm install  
```
   OR  
 ``` 
   yarn install  
```

4. Create an `.env` file in the root directory and add the following:  
```
PORT=5000
DATABASE_URL=mongodb+srv://<your-username>:<your-password>T@cluster0.pdzsrjb.mongodb.net/bi-cycle-store?retryWrites=true&w=majority&appName=Cluster0
```

5. Start the server in development mode:  
```
   npm run dev  
```
   OR  
```
   yarn dev  
```



## API Endpoints 📃

### Product Endpoints:

- **Create a Bicycle:** `POST /api/products`
- **Get All Bicycles:** `GET /api/products`
- **Get a Specific Bicycle:** `GET /api/products/:productId`
- **Update a Bicycle:** `PUT /api/products/:productId`
- **Delete a Bicycle:** `DELETE /api/products/:productId`

### Order Endpoints:

- **Place an Order:** `POST /api/orders`
- **Calculate Revenue:** `GET /api/orders/revenue`



## Technologies Used 🛠️

- **Backend Framework:** Express.js with TypeScript
- **Database:** MongoDB with Mongoose
- **Validation:** Mongoose Schema with Zod.
- **Environment Variables:** dotenv




