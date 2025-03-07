import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <a href="/" className='navbar-brand'>
        <i  className={this.props.icon}> </i> {this.props.title}
        </a>
         
      </nav>
    )
  }
 

  }
  Navbar.defaultProps = {
    icon:"bi bi-github",
    title:"Github Finder"
}


export default Navbar