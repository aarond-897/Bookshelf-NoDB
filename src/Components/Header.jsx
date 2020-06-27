import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: ''
     }
  }

  handleInput = val =>{
    this.setState({
      input: val
    })
  }

  handleClick= () =>{
    //takes in input value and passes to parent function stored in app.js
    let {input} = this.state
    this.props.retrieveBooks(input)
  }



  render() { 
    return ( 
      <div className="header">
      <div className='header-content'>
      <p>Bookshelf</p>
      <div className='search'>
      <input onChange={(e)=>this.handleInput(e.target.value)} value={this.state.input}/>
      <button onClick={this.handleClick}>But</button>
      </div>
      </div>
      </div>
     );
  }
}
 
export default Header;