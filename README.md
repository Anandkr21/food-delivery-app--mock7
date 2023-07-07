# Food Delivery App Backend

## Instructions:

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Commit your code every 30min with a proper commit message to your repository (we will monitor every commit)
- Use **Node, Express, Mongo (NEM)** for backend.

---

## Problem Statement

The task is to create backend for a Food Delivery app that allows users to order food from their favourite restaurants.

## Instructions:

The system should be built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

- The backend should have the following models:

- **User Model**

```yaml
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  }
}
```

- **Restaurant Model**

```yaml
{
  _id: ObjectId,
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  menu: [{
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    image: String
  }]
}

```

- **Order Model**

```yaml
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 restaurant : { type: ObjectId, ref: 'Restaurant' },
   items: [{
     name: String,
     price: Number,
     quantity: Number
   }],
   totalPrice: Number,
   deliveryAddress: {
     street: String,
     city: String,
     state: String,
     country: String,
     zip: String
   },
   status: String // e.g, "placed", "preparing", "on the way", "delivered"
}
```

The following API routes should be developed to achieve the required functionality:

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. Hash the password on store. | 201 |
| POST | /api/login | This endpoint should allow users to login. Return JWT token on login. | 201 |
| PUT / PATCH | /api/user/:id/reset | This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body. | 204 |
| GET | /api/restaurants | This endpoint should return a list of all available restaurants. | 200 |
| GET | /api/restaurants/:id | This endpoint should return the details of a specific restaurant identified by its ID. | 200 |
| GET | /api/restaurants/:id/menu | This endpoint should return the menu of a specific restaurant identified by its ID. | 200 |
| POST / PUT | /api/restaurants/:id/menu | This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id. | 201 |
| DELETE | /api/restaurants/:id/menu/:id | This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant. | 202 |
| POST | /api/orders | This endpoint should allow the user to place an order. | 201 |
| GET | /api/orders/:id | This endpoint should return the details of a specific order identified by its ID. | 200 |
| PUT / PATCH | /api/orders/:id | This endpoint should allow users to update the status of a specific order identified by its ID. | 204 |

---


