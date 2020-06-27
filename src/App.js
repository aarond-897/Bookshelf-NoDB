import React, {Component} from 'react';
import './reset.css'
import './App.css';
import axios from 'axios'
import Header from './Components/Header';
import ReturnedBooks from './Components/ReturnedBooks';
// import Bookshelf from './Components/Bookshelf';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      retrievedBooks:[],
      shelvedBooks:[]
     }
  }

  retrieveBooks=(title)=>{
    console.log(title)
    axios.get(`/api/retrieved-books/${title}`)
    .then(res=>{
      this.setState({
        retrievedBooks:res.data[0].items
      })
    })
    .catch(err=>console.log(err))
  }


  render() { 
    return ( 
      <div>
        {console.log(this.state.retrievedBooks)}
      <Header retrieveBooks={this.retrieveBooks}/>
      <ReturnedBooks retrievedBooks={this.state.retrievedBooks}/>
      {/* <Bookshelf /> */}
      </div>
     );
  }
}
 
export default App;

