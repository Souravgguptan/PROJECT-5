const express = require("express");
const {users} = require("../data/users.json");

const router = express.Router();

const {UserModel, BookModel} = require("../models");
const { getAllUsers, getSingleUserById, addNewUser, updateUserById, deleteUser, getSubscriptionDetailsById } = require("../controllers/user-controller");


/**
 * Route: /users
 * Method: GET
 * Description: Get all users
 * Access: Public
 * Paramaters: None
 */
router.get("/", getAllUsers);


/**
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by their ID
 * Access: Public
 * Paramaters: id
 */
router.get("/:id", getSingleUserById)


/**
 * Route: /users
 * Method: POST
 * Description: Create a New User
 * Access: Public
 * Paramaters: None
 */
router.post("/", addNewUser)


/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating a user by their ID
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id', updateUserById)


/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by their ID
 * Access: Public
 * Paramaters: ID
 */
router.delete("/:id", deleteUser)


/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details by their ID
 * Access: Public
 * Paramaters: ID
 */
router.get('/subscription-details/:id', getSubscriptionDetailsById)

module.exports = router;