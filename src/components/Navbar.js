import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-danger'>
        <a href="/" className='navbar-brand'>
        <i  className={this.props.icon}> </i> {this.props.title}
        </a>
         
      </nav>
    )
  }
}

export default Navbar