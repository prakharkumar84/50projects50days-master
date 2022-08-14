import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    const {tag} =this.props;
    return (
      <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <br />
                <br />
                <h1 style={{color: 'rgb(88, 87, 86)'}}>{tag}</h1>
                <hr />
                </div>
        </div>
    )
  }
}
