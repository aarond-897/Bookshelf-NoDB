import React, {Component} from 'react';



class ShelvedBook extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onClicked: false
    }
    
  }
  
  handleClick=()=>{
    this.setState({
      onClicked: !this.state.onClicked
    })
  }

  sendDelete=()=>{
    this.props.deleteBookFn(this.props.id)
  }

  sendNeedsToRead=()=>{
    this.props.needToReadFn(this.props.id)
  }
  
  render() { 
    const divStyle={
      width: `${this.props.pageCount*.01}%`,
      backgroundColor: `${this.props.needToRead===true ? 'rgb(202, 145, 113)' : 'rgb(202, 199, 166)'}`
    }
    
    const fontStyle={
      fontSize: `${this.props.pageCount*.25}%`
    }
    
    return ( 
      <div className='shelved-book' style={divStyle} onClick={this.handleClick}>
         <p className='book-title' style={fontStyle}>{this.props.title}</p>
         {this.state.onClicked ? <div className="dropDown"><button onClick={this.sendDelete}>X</button><button onClick={this.sendNeedsToRead}>O</button></div>:null}
      </div>
     )
    }
  }
  
   export default ShelvedBook;

    // const ShelvedBook= (props) => {
    //   const divStyle={
    //     width: `${props.pageCount*.01}%`,
        
    //   }
      
    //   const fontStyle={
    //     fontSize: `${props.pageCount*.25}%`
    //   }
    //   return ( 
    //     <div className='shelved-book' style={divStyle}>
    //       <p className='book-title' style={fontStyle}>{props.title}</p>
    //       {/* <Dropdown deleteBookFn={props.deleteBookFn} id={props.id}/> */}
    //     </div>
    //    );
    //   }
    
    // export default ShelvedBook;