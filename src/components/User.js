import React, { Component } from 'react'

export class User extends Component {
    

  render() {
    const { avatar_url,name,bio,github_url,repository}=this.props.user
    return (
       <div className="card mb-3">
        <div className="row">
            <div className="col-md-2">
                <img src={avatar_url} alt={name} className="img-fluid rounded-1 avatar" />
            </div>
              <div className="col-md-10">
                    <div className="card-body">
                    <h4 className="card-body-title">{name}</h4>
                       <hr />
                       <p>{bio}</p>
                     <div className=" d-flex justify-content-between"> 
                    <a href={github_url}  target="_blank" className="btn btn-outline-dark">my Github Profile</a>
                    <a href={repository}  target="_blank" className='btn btn-outline-dark'>my Repository</a>
                     </div>
                    </div>   
              </div>
        </div>
       </div>
    )
  }
}

export default User