import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className="container d-flex justify-content-center align-items-center" >
          <a href="/" className='navbar-brand'>
          
            
            
           <i className={this.props.icon}> </i> {this.props.title}
         </a>
        </div>
          
         
      </nav>
    )
  }
 

  }
  Navbar.defaultProps = {
    icon:"bi bi-github",
    
    title:"Github Finder"
}
Navbar.propTypes = {
    icon:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired

}


export default Navbar