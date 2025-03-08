import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
        <div className="text-center">

        <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
        </div>
    )
  }
}

export default Loading