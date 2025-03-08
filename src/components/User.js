import React, { Component } from 'react'

export class User extends Component {
    

  render() {
    const { avatar_url,login,html_url,}=this.props.user
    return (
       <div className="card mb-3">
        <div className="row">
            <div className="col-md-2">
                <img src={avatar_url} alt={login} className="img-fluid rounded-1 avatar" />
            </div>
              <div className="col-md-10">
                    <div className="card-body">
                    <h4 className="card-body-title">{login}</h4>
                       <hr />
                       
                     <div className=" d-flex justify-content-between"> 
                    <a href={html_url}  className="btn btn-outline-dark"  target="_blank" rel="noreferrer" >my Github Profile</a>
                   
                     </div>
                    </div>   
              </div>
        </div>
       </div>
    )
  }
}

export default User