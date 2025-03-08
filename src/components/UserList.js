import React, { Component } from 'react'
import User from './User'

export class UserList extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
        
          users: [
            {
                id:"167278923",
                name:"Yasin Serhat Peker",
                username:"yasinserhatpeker",
                avatar_url:"https://avatars.githubusercontent.com/u/167278923?v=4",
                github_url:"https://github.com/yasinserhatpeker",
                repository:"https://github.com/yasinserhatpeker?tab=repositories",
                bio: "Computer Engineering Student at Mersin University\r\n\r\n",

            },
            {
                id:"12",
                name:"Ahmet Özbilen",
                username:"yasinserhatpeker",
                avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",
                github_url:"https://github.com/yasinserhatpeker",
                repository:"https://github.com/yasinserhatpeker?tab=repositories",
                bio: "Computer Engineering Student at Mersin University\r\n\r\n",
            },
            {
                id:"1672",
                name:"Mehmet Siyahbeyaz",
                username:"yasinserhatpeker",
                avatar_url:"https://avatars.githubusercontent.com/u/4?v=4",
                github_url:"https://github.com/yasinserhatpeker",
                repository:"https://github.com/yasinserhatpeker?tab=repositories",
                bio: "Computer Engineering Student at Mersin University\r\n\r\n",
            }


          ]
      }
    }
  render() {
    return (
      <div>
        {this.state.users.map(user=> (
            <User user={user} key={user.id}/>
        ))}
      </div>
    )
  }
}

export default UserList