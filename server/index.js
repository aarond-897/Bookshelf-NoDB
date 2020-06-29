//server boilerplate

const express = require('express');
const retrievedBooks =require('./controllers/retrievedBooks')
const collection = require('./controllers/collection')
const app = express();

app.use(express.json())

const port = 4040
app.listen(port, ()=> console.log(`listening on port ${port}`) )

//endpoints

//3rd party endpoint-google books api
app.get('/api/retrieved-books/:title', retrievedBooks.getBooks,)

//front-end endpoints
app.post('/api/collection',  collection.addToCollection )
app.get('/api/collection', collection.retrieveCollection)
app.delete('/api/collection/:id', collection.deleteBook)
app.put('/api/collection/:id', collection.needToRead)