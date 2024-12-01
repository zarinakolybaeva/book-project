const express = require('express');
const mockData = require('./src/mockData');

const app = express();
const port = 5000;

app.use(express.json());

// GET endpoint to fetch all BookData
app.get('/books', (req, res) => {
  res.json(mockData.BookData);
});

// POST endpoint to add a new book
app.post('/books', (req, res) => {
  const newBook = req.body; // Assuming the request body contains the book data
  // Assign a new ID to the book (in a real application, you'd generate a unique ID)
  newBook.id = mockData.BookData.length + 1;
  mockData.BookData.push(newBook);
  res.status(201).json(newBook); // Respond with the newly created book
});

// PUT endpoint to update a book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body; // Assuming the request body contains the updated book data
  const existingBook = mockData.BookData.find(book => book.id === bookId);
  
  if (existingBook) {
    // Update the book properties
    existingBook.title = updatedBook.title || existingBook.title;
    existingBook.author = updatedBook.author || existingBook.author;
    existingBook.price = updatedBook.price || existingBook.price;
    
    res.json(existingBook); // Respond with the updated book
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// DELETE endpoint to remove a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = mockData.BookData.findIndex(book => book.id === bookId);
  
  if (bookIndex !== -1) {
    const deletedBook = mockData.BookData.splice(bookIndex, 1)[0];
    res.json(deletedBook); // Respond with the deleted book
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(port, () => {
  console.log(`Mock API server is running on http://localhost:${port}`);
});
