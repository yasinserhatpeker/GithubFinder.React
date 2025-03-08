import React, { Component } from 'react'

export class User extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          id:"167278923",
          name:"Yasin Serhat Peker",
          username:"yasinserhatpeker",
          avatar_url:"https://avatars.githubusercontent.com/u/167278923?v=4",
          github_url:"https://github.com/yasinserhatpeker",
          repository:"https://github.com/yasinserhatpeker?tab=repositories",
          bio: "Computer Engineering Student at Mersin University\r\n\r\n",
         
       }
     }

  render() {
    return (
       <div className="card mb-3">
        <div className="row">
            <div className="col-md-3">
                <img src={this.state.avatar_url} alt={this.state.name} className="img-fluid rounded-1" />
            </div>
              <div className="col-md-9">
                    <div className="card-body">
                    <h4 className="card-body-title">{this.state.name}</h4>
                       <hr />
                       <p>{this.state.bio}</p>
                     <div className=" d-flex justify-content-between"> 
                    <a href={this.state.github_url}  target="_blank" className="btn btn-outline-dark">my Github Profile</a>
                    <a href={this.state.repository}  target="_blank" className='btn btn-outline-dark'>my Repository</a>
                     </div>
                    </div>   
              </div>
        </div>
       </div>
    )
  }
}

export default User