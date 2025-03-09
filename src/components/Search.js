import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { Component } from 'react'

export class Search extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        keyword:"",
     }
   }

  onChange= (e) => {
       this.setState({
         keyword: e.target.value
       })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.keyword==='') {
       this.props.displayAlert("Enter the username please",'danger')
    }
    else {
        
        this.props.searchUsers(this.state.keyword);
        this.setState({
            keyword:''
        })

    }
       
}


  render() {
    return (
       <div className="container my-3">
         <form id='form' onSubmit={this.onSubmit}>
            <div className="input-group">
                <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder="Search something..."/>
                <button className="btn btn-dark" type="submit">Search</button>
                
            </div>
         </form>
         {
             this.props.showClearButton && <button onClick={this.props.clearResult} className='btn btn-outline-danger mt-3 btn-block'>Clear All</button>
             
         }
       </div>
    )
  }
}

export default Search