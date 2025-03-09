import React from 'react'

const Alert = (props) => {
  return (
     props.error !== null && (
        <div className="container text-center">
        <div className={`alert alert-${props.error.type}`} role="alert">
            {props.error.msg}
        </div>

        </div>
     )
  )
}

export default Alert