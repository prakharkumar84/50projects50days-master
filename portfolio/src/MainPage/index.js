import React, { Component } from 'react'
import { AboutMe } from './AboutMe'
import Contact from './contact'
import Email from './email'
import Introduction from './introduction'
import Mywork from './mywork'

export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <Introduction/>
        <AboutMe/>
        <Mywork/>
        <Contact/>
        <Email/>
      </div>
    )
  }
}
