import React from 'react';

const Book= (props) => {
  return ( 
    <div className='book'>
      {/* <div className="adding-book">+</div> */}
      <img src={props.cover} alt={props.title}/>
    </div>
   );
}
 
export default Book;