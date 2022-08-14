import React, { Component } from 'react'

export default class GlobalTitle extends Component {
  render() {
    const {tag}=this.props
    return (
      <div  >
            <h1 className="display-4"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
            </svg>{tag}</h1>
            <hr className="my-4 " />
            </div>
    )
  }
}
