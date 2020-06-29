import React, {Component} from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'
import Header from './Components/Header';
import ReturnedBooks from './Components/ReturnedBooks';
import Bookshelf from './Components/Bookshelf';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      retrievedBooks:[],
      collection:[]
     }
  }

  componentDidMount(){
    axios.get('/api/collection')
    .then(res=>{
      this.setState({
        collection:res.data
      })
    })
    .catch(err=>console.log(err))
  }

  retrieveBooks=(title)=>{
    axios.get(`/api/retrieved-books/${title}`)
    .then(res=>{
      this.setState({
        retrievedBooks:res.data[0].items
      })
    })
    .catch(err=>console.log(err))
  }

  addBook = (book)=>{
    axios.post('/api/collection', {book})
    const index = this.state.retrievedBooks.findIndex(e=>e.volumeInfo.description===book.description)
    this.state.retrievedBooks.splice(index,1)
    axios.get('/api/collection')
    .then(res=>{
      this.setState({
        collection: res.data
      })
    })
    .catch(err=>console.log(err))
  }

  deleteBook = (id)=>{
    console.log(id)
    axios.delete(`/api/collection/${id}`)
    .then(res=>{
      this.setState({
        collection:res.data
      })
    })
    .catch(err=>console.log(err))
  }

  needToRead=(id)=>{
    axios.put(`/api/collection/${id}`)
    .then(res=>{
      this.setState({
        collection:res.data
      })
    })
    .catch(err=>console.log(err))
  }

  render() { 
    return ( 
      <div className='webpage'>
      <Header retrieveBooks={this.retrieveBooks}/>
      <div className="book-section">
      <Bookshelf collection={this.state.collection} deleteBookFn={this.deleteBook} needToReadFn={this.needToRead}/>
      <ReturnedBooks retrievedBooks={this.state.retrievedBooks} addBookFn={this.addBook}/>
      </div>
      </div>
     );
  }
}
 
export default App;

