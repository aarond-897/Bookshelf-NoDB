import React, {Component} from 'react';
import { render } from '@testing-library/react';

class Book extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

bookHandle=()=>{
  let book={
    title:this.props.title,
    author:this.props.author,
    description: this.props.description,
    cover:this.props.cover,
    pageCount:this.props.pageCount
  }
  this.props.addBookFn(book)
}

render(){
  return ( 
    <div className='book'>
      <img src={this.props.cover} alt={this.props.title}/>
      <button className='add-book' onClick={this.bookHandle}>Add</button>
    </div>
   );
  }
} 

export default Book;