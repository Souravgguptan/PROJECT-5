const express = require("express");
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

const router = express.Router();


const {UserModel, BookModel} = require("../models");
const { getAllBooks, getSingleBookById, addNewBook, updateBookById } = require("../controllers/book-controller");

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Paramaters: None
 */
router.get("/", getAllBooks);



/**
 * Route: /books/:id
 * Method: GET
 * Description: Get single book by their ID
 * Access: Public
 * Paramaters: id
 */
router.get("/:id", getSingleBookById)

/**
 * Route: /books
 * Method: POST
 * Description: Create a New Book
 * Access: Public
 * Paramaters: None
 */
router.post("/", addNewBook)


/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by their ID
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id', updateBookById)
    


/**
 * Route: /books/issued/by-user
 * Method: GET
 * Description: Get all issued Books
 * Access: Public
 * Paramaters: None
 */
router.get("/issued/by-user", (req, res)=>{
    const userWithIssuedBooks = users.find((each)=>{
        if(each.issuedBook) return each;
    })
    const issuedBooks = [];


    userWithIssuedBooks.forEach((each)=>{
        const book = books.find((book)=> book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    })
    if(issuedBooks.length===0){
        return res.status(404).json({
            success: false,
            message: "No books issued yet"
        })
    }

    return res.status(200).json({
        success: true,
        data: issuedBooks,
    })
})


module.exports = router;