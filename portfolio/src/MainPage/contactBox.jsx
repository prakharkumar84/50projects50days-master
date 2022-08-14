import React from 'react'
import { Component } from 'react'

class ContactBox extends Component {
    render(){
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 margin-new">
        <div className='contact-box ht1'>
            <h1><img src={this.props.url} alt="nhk"/></h1>
            <hr />
            <p className="clr"><a href={this.props.link} >{this.props.tag}</a>
            </p>
        </div>
    </div>
  )
}
}

export default ContactBox