const router = require('express').Router();
const Book = require('../models/Book.model.js');

// GET route to retrieve and display all the books
router.get('/books', (req, res, next) => {
    Book.find()
        .then(allTheBooksFromDB => {
            // -> allTheBooksFromDB is a placeholder, it can be any word
            console.log('Retrieved books from DB:', allTheBooksFromDB);

            res.render('books/books-list.hbs', { allTheBooksFromDB });
        })
        .catch(error => {
            console.log('Error while getting the books from the DB: ', error);

            // Call the error-middleware to display the error page to the user
            next(error);
        });

});

router.get('/books/create', (req, res) => {
    res.render('books/book-form.hbs')
})

router.post('/books/create', (req, res, next) => {
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        rating: req.body.rating
    }
    /*
    HERE IS WHEN DESTRUCTURING IS SUPER HELPFUL
    const {title, author, description, rating} = req.body;
    */

    Book.create(newBook)
        // with the destructuring is Book.create({title, author, description, rating})
        .then((newBook) => res.redirect(`/books/${newBook._id}`))
        .catch(error => next(error))
})

router.get('/books/:bookId', (req, res, next) => {
    const bookId = req.params.bookId
    // we can do this destructuring also const {bookId} = req.params;
    Book.findById(bookId)
        // after we find the book we need to render the details page
        .then(theBook => res.render('books/book-details.hbs', theBook))
        .catch(error => {
            console.log('Error while retrieving book details');

            // Call the middleware to display an error in the browser
            next(error);
        })
})

router.get("/books/:bookId/edit", (req, res, next) => {
    const bookId = req.params.bookId
    // we can do this destructuring also const {bookId} = req.params;
    Book.findById(bookId)
        // after we find the book we need to render the details page
        .then(theBook => res.render('books/book-update.hbs', theBook))
        .catch(error => {
            console.log('Error while retrieving book details');

            // Call the middleware to display an error in the browser
            next(error);
        })
})

router.post("/books/:bookId/edit", (req, res, next) => {
    const bookId = req.params.bookId;
    const book = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        rating: req.body.rating
    }
    Book.findByIdAndUpdate(bookId, book, { new: true })
        .then(theBook => res.redirect(`/books/${bookId}`))
        .catch(error => {
            console.log('Error while retrieving book details');

            // Call the middleware to display an error in the browser
            next(error);
        })
})

router.post("/books/:bookId/delete", (req, res, next) => {
    const bookId = req.params.bookId;

    Book.findByIdAndDelete(bookId)
        .then(() => res.redirect(`/books`))
        .catch(error => {
            console.log('Error while deleting book');

            // Call the middleware to display an error in the browser
            next(error);
        })
})




module.exports = router;