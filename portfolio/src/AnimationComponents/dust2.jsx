import React, { Component } from 'react'

export default class Dust2 extends Component {
   render() {
    const {url} = this.props;
    return (
       <div className="col-lg-6 col-md-6 col-sm-6 p-2">
                <img src={url} className="img-thumb1" alt="selfie" />
                </div>
    )
  }
}
