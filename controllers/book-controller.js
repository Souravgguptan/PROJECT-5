const {UserModel, BookModel} = require("../models")

exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();
    
    if(books.length === 0)
        return res.status(404).json({
    success: false,
    message: "No Book Found"
    });

    return res.status(200).json({
        success: true,
        data: books
    })

}

exports.getSingleBookById = async (req, res) => {
    const{id} = req.params;
    const book = await BookModel.findById(id)
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found For The Given Id :- ("
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })
}

exports.addNewBook = async(req, res) => {

    const {data} = req.body;

    if(!data)
        return res.status(404).json({
    success: false,
    message: "No Data Provided"
    })

    await BookModel.create(data)
    const allBooks = await BookModel.find()
    
    return res.status(201).json({
        success: true,
        data: allBooks
    })
}

exports.updateBookById = async(req, res) => {
    const {id} = req.params;
    const {data} = req.body;
    const updateBook = await BookModel.findOneAndUpdate({
        _id: id,
    }, data, {new: true})
    
    return res.status(200).json({
        success: true,
        data: updateBook
    })

}