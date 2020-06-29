import React from 'react';
import ShelvedBook from './ShelvedBook';

const Bookshelf=(props)=>{
  
  const {collection}=props;
  console.log(collection)
  const mappedBook = collection.map(e=>(
      <ShelvedBook
        key={e.id}
        title={e.title}
        description={e.description}
        id={e.id}
        pageCount={e.pageCount}
        deleteBookFn={props.deleteBookFn}
        needToReadFn={props.needToReadFn}
        needToRead={e.needToRead}
      />
    ))
    return ( 
      <div className="bookshelf-section">
        <div className='bookshelf'>
          {mappedBook}
        </div>
      </div>
     );
}



export default Bookshelf;


 
 
