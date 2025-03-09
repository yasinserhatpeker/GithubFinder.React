import Navbar from "./components/Navbar";

import UserList from "./components/UserList";

import Search from "./components/Search";



import React, { Component } from 'react'
import { keyboard } from "@testing-library/user-event/dist/keyboard";


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading:false,
       users: [],
       error: null
    }
  }
   

  searchUsers = (keyword) => {

    this.setState({loading:true})

    setTimeout(()=> {
      fetch("https://api.github.com/search/users?q="+ keyword )
      .then(response => response.json())
      .then(data => this.setState({users:data.items, loading:false}));
  
    },1000)
  }
   
  clearResult = () => {
    this.setState({
      users: []
    })
  }
  displayAlert= (msg,type)=> {
    this.setState({
      error: {
        msg:msg,
        type:type

      }
    })
  }

  render() {
    return (
      <div>
      <Navbar />
       <Search 
       displayAlert={this.displayAlert}
       searchUsers={this.searchUsers} 
       clearResult={this.clearResult} 
       showClearButton={this.state.users.length > 0 ? true : false }
       />
       <div className="container mt-3">
        <UserList users={this.state.users} loading={this.state.loading}/>
      </div>
      </div>
       
    )
  }
}

  
  export default App;
  