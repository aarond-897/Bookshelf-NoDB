import React from 'react';
import ShelvedBook from './ShelvedBook';

const Bookshelf=(props)=>{
  
  const {collection}=props;
  const mappedBook = collection.map(e=>(
      <ShelvedBook
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

// class Bookshelf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       collection:[]
//      }
//   }
//   componentDidMount(){
//     axios.get('/api/collection')
//     .then(res=>{
//       this.setState({
//         collection:res.data
//       })
//     })
//     .catch(err=>console.log(err))
//   }

//   componentDidUpdate(prevProps){
//     console.log(prevProps.retrievedBooksLength)
//     console.log(this.props.retrievedBooksLength)
//     if(this.props.retrievedBooksLength !==prevProps.retrievedBooksLength){
//       console.log('working')
//     }
//   }

//   render() { 
//     console.log(this.state.collection)
//     return ( 
//       <div className="bookshelf-section">
//       <div className='bookshelf'></div>
//       </div>
//      );
//   }
// }
 
 
