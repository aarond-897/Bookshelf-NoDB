import React from 'react';
import Book from './Book';


const ReturnedBooks = (props)=> {
  const {retrievedBooks}=props;
  console.log(retrievedBooks)
  const showBooks = retrievedBooks.map(e=>(
     <Book 
    key={e.id}
    title={e.volumeInfo.title}
    description={e.volumeInfo.description}
    cover={e.volumeInfo.imageLinks.thumbnail}
    pageCount={e.volumeInfo.pageCount}/>
  ))
    return ( 
      <div className='retrieved-books'>
        {showBooks}
      </div>
     )
}
 
export default ReturnedBooks;