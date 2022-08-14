import React, { Component } from 'react'

export default class BigBox extends Component {
  render() {
    const {url} = this.props;
    return (
    <div className='row'>
      <div className="col-lg-12 col-md-12 col-sm-12 p-2">
                <video className="img-thumb1" src={url} type="video/mp4" autoPlay height={1280} width={1980} controls />
        </div>
    </div>
    )
  }
}
