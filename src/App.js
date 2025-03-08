import Navbar from "./components/Navbar";

import UserList from "./components/UserList";



import React, { Component } from 'react'


export class App extends Component {

componentDidMount() {
  fetch("https://api.github.com/users")
  .then(response => response.json())
  .then(data => console.log(data))

}

  render() {
    return (
      <div>
      <Navbar />
       <div className="container mt-3">
        <UserList/>
      </div>
      </div>
       
    )
  }
}

  
  export default App;
  