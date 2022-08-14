
import React from 'react'
import { Component } from 'react'
import {Link} from "react-router-dom"


export default class Routers1 extends Component {
  render(){
  
  if (this.props.tag === 1){
     return isAnimation()
  }
  if (this.props.tag === 2) {
    return isWebDEv()
  }
  if (this.props.tag === 3) {
    return isGameDev()
  }
}
}

function isAnimation(){
  return(
    <Link to="/animation">
      <button className="btn btn-new btn-lg button5 ">Check more</button>
    </Link>
  )
}
function isWebDEv(){
  return(
    <Link to="/webdev">
      <button className="btn btn-new btn-lg button5 ">Check more</button>
    </Link>
  )
}
function isGameDev(){
  return(
    <Link to="/gamedev">
      <button className="btn btn-new btn-lg button5 ">Check more</button>
    </Link>
  )
}

