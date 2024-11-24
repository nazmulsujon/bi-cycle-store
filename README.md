# 🚴 Bi-Cycle Store (B4A2V4)

An Express.js application with TypeScript and MongoDB, designed to manage a bicycle store. This project enables CRUD operations for bicycles and orders, ensures data validation using Mongoose, and includes features like inventory management and revenue calculation.

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

---

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
- **Calculate Revenue:** Use MongoDB aggregation pipeline to calculate total revenue from all orders.

---

## Installation & Setup ⚙️

Follow the steps below to run the project locally:

### Prerequisites:

- [Node.js](https://nodejs.org/en/download/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) set up locally or use a MongoDB cloud instance.
- A package manager like npm or yarn.

### Steps:

1. Clone the repository:  
   template string start  
   git clone https://github.com/your-username/bicycle-store.git  
   template string end

2. Navigate to the project directory:  
   template string start  
   cd bicycle-store  
   template string end

3. Install dependencies:  
   template string start  
   npm install  
   template string end  
   OR  
   template string start  
   yarn install  
   template string end

4. Create an `.env` file in the root directory and add the following:  
   template string start  
   PORT=5000  
   MONGO_URI=mongodb://localhost:27017/bicycle-store  
   template string end

5. Start the server in development mode:  
   template string start  
   npm run dev  
   template string end  
   OR  
   template string start  
   yarn dev  
   template string end

---

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

---

## Technologies Used 🛠️

- **Backend Framework:** Express.js with TypeScript
- **Database:** MongoDB with Mongoose
- **Validation:** Mongoose Schema
- **Environment Variables:** dotenv

---

## License

This project is licensed under the MIT License.
