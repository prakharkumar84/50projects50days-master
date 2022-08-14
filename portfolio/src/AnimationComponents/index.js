import React, { Component } from 'react'
import AnimationIntro from './animationIntro'
import AnimationImages from './animationImages'
import Contact from '../MainPage/contact'
import Email from '../MainPage/email'

class Animation extends Component {
    render(){
  return (
    <div>
        <AnimationIntro/>
        <AnimationImages/>
        <Contact/>
        <Email/>
    </div>
  )
}
}

export default Animation