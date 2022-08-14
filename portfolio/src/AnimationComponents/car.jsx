import React, { Component } from 'react'

export default class Car extends Component {
  render() {
    const {url} = this.props;
    return (
       <div className="col-lg-4 col-md-4 col-sm-6 p-2">
            <img src={url} className="img-thumb1" alt="selfie" />
        </div>
    )
  }
}
