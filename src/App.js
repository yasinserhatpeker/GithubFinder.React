import Navbar from "./components/Navbar";

import UserList from "./components/UserList";

import Search from "./components/Search";



import React, { Component } from 'react'


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading:false,
       users: []
    }
  }

componentDidMount() {

  this.setState({loading:true})

  setTimeout(()=> {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => this.setState({users:data, loading:false}));

  },1000)
  

;

}
3
  render() {
    return (
      <div>
      <Navbar />
       <Search />
       <div className="container mt-3">
        <UserList users={this.state.users} loading={this.state.loading}/>
      </div>
      </div>
       
    )
  }
}

  
  export default App;
  