const collection = [];
let id=1;

module.exports={
  retrieveCollection:(req,res)=>{
    res.status(200).send(collection)
  },
  addToCollection:(req, res)=>{
    const {book} = req.body;
    book.id=id;
    book.needToRead= true;
    id++;
    collection.push(book)
  },
  deleteBook:(req,res)=>{
    const {id}= req.params
    const index = collection.findIndex(e=>e.id=== +id)
    collection.splice(index,1)
    res.status(200).send(collection)
  },
  needToRead: (req,res)=>{
    const {id}=req.params;
    const index=collection.findIndex(e=>e.id=== +id)
    collection[index].needToRead= !collection[index].needToRead
    console.log(collection)
    res.status(200).send(collection)
  }
}