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
    let {input} = this.state
    this.props.retrieveBooks(input)
  }



  render() { 
    return ( 
      <div className="header">
      <div className='header-content'>
        <h1 className='web-title'>Bookshelf</h1>
      <div className='search'>
        <input className='search-input' onChange={(e)=>this.handleInput(e.target.value)} value={this.state.input}/>
        <button className='search-button' onClick={this.handleClick}></button>
      </div>
      </div>
      </div>
     );
  }
}
 
export default Header;