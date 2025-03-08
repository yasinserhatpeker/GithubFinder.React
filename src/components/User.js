import React, { Component } from 'react'

export class User extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          id:"167278923",
          name:"Yasin Serhat Peker",
          username:"yasinserhatpeker",
          avatar_url:"https://avatars.githubusercontent.com/u/167278923?v=4",
          github_url:"https://api.github.com/users/yasinserhatpeker"
         
       }
     }

  render() {
    return (
      <div></div>
    )
  }
}

export default User