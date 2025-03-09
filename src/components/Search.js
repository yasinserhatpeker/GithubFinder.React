import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
       <div className="container my-3">
         <form id='form'>
            <div className="input-group">
                <input type="text" className='form-control' placeholder="Search something..."/>
                <button className="btn btn-dark" type="submit">Search</button>
                
            </div>
         </form>
       </div>
    )
  }
}

export default Search