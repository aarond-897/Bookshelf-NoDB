import React from 'react';
import Book from './Book';


const ReturnedBooks = (props)=> {
  const {retrievedBooks}=props;
  const showBooks = retrievedBooks.map(e=>(
     <Book 
    key={e.id}
    title={e.volumeInfo.title}
    author={e.volumeInfo.authors}
    description={e.volumeInfo.description}
    cover={e.volumeInfo.imageLinks.thumbnail}
    pageCount={e.volumeInfo.pageCount}
    addBookFn={props.addBookFn}
    />
  ))
    return ( 
      <div className='retrieved-books'>
        {showBooks}
      </div>
     )
}
 
export default ReturnedBooks;