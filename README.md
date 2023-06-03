# FOOD-DELIVERY-APP

To get started with the Food-Delivery-App API, follow the instructions below.

## Prerequisites

- Node.js (v16 or above)
- MongoDB

### Installation

- **Clone the repository**: `git clone`

### Set up the environment variables:

**Create a .env file in the root directory and configure the following variables:**

- mongoUrl
- port
- secret_key

### Starting the Server

- **Run the following command to start the server**: `npm run server`

# API Endpoints

---

1. **User Registration**

- **Endpoint:** `POST` **/api/register**
- **Description**: **This route will help in the registration of the new user.**
- **Response:** **With 200 status code with message User Successfully Registered.**

---

2. **User logging**

- **Endpoint:** `POST` **/api/login**
- **Description:** **This route will be used for the logging of the user.**
- **Response:** **With 200 status code it will generate a token.**

---

3. **Reset Password**

- **Endpoint:** `PATCH` **/api/user/:id/reset**
- **Description:** **This route will be used for the reset of the password.**
- **Response:** **With 200 status code with a message Password has been updated.**

---

4. **Check All Restaurants**

- **Endpoint:** `GET` **/api/restaurants**
- **Description**: **This route will help to get the data of all the restaurants available.**
- **Response:** **With 200 status code it will provide all the data.**

---

5. **Get a particular Restaurant**

- **Endpoint:** `GET` **/api/restaurants/:id**
- **Description**: **This route will help to get the data of the specific restaurant.**
- **Response:** **With 200 status code it will provide the data of the specific restaurant.**

---

6. **Add new Restaurants**

- **Endpoint:** `POST` **/api/restaurants**
- **Description**: **This route will help in adding the new Restaurant.**
- **Response:** **With 200 status code with message Your restaurant has been added.**

---

7. **Add new items to the Menu of the Restaurants**

- **Endpoint:** `POST` **/api/restaurants/:id/menu**
- **Description**: **This route will help in adding menu to the specific restaurant.**
- **Response:** **With 200 status code with message Your Menu has been Updated.**

---

8. **Deleting the items form the Menu of the Restaurants**

- **Endpoint:** `DELETE` **/api//restaurants/:id/menu/:id**
- **Description**: **This route will help in deleting the specific items from the menu of the specific restaurant.**
- **Response:** **With 202 status code with message Your Item with that particular ID has been deleted.**

---

9. **Placing Orders**

- **Endpoint:** `POST`**/api/orders**
- **Description:** **This route is a protected route so the user has to login first and it will help to place order to the restaurants.**
- **Response:** **With 200 status code with the message Your Order has been placed and the particular Order will also be displayed.**

---

10. **Checking the particular Order**

- **Endpoint:** `GET` **/api/orders/:id**
- **Description:** **This route is a protected route so the user has to login first and it will give the data of the particular order.**
- **Response** **With 200 status with the message Order with Specific ID and the data of the specific id.**

---

11. **Updating the particular Order**

- **Endpoint:** `PATCH` **/api/orders/:id**
- **Description:** **This route is a protected route so the user has to login first and it will be used to update the particular order.**
- **Response** **With 200 status with the message Your Order has been Updated.**

---
