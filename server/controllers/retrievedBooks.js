const axios = require('axios')


//req is where we can access body, params, and id if sent from client side
module.exports={
  getBooks:(req,res)=>{
    let {title}= req.params
    const retrievedBooks = [];

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&startIndex=0&maxResults=12`)
    .then(response=>{
      retrievedBooks.push(response.data)
      res.status(200).send(retrievedBooks)
    })
    .catch(
      err=>res.status(500).send(err)
    )
  }
}  