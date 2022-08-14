import React from 'react'
import Smallbox from './smallbox';
import Image from "../images/animation.jpg";
import GD from "../images/gamedev.jpg";
import WD from "../images/webdev.jpg";
import { Component } from 'react';
import '../Components/style.css'
import GlobalTitle from '../Components/globalTitle';

class Mywork extends Component {
    state = 
  {
    types:[
        {id:1,url:Image, str:"Animation"},
        {id:2,url:WD,   str:"Web Developer"},
        {id:3,url:GD,   str:"Game Developer"},
    ]
  
  }
    render(){
        
        return (
            <section id="mywork">
                <div className="container ht">
                    <div className="jumbotron">
                    <GlobalTitle tag="My Work"/>
                    <div className="row">
                        {this.state.types.map(type =>(
                            <Smallbox 
                            key={type.id}
                            url={type.url}
                            str={type.str}
                            id={type.id}
                        />
                        ) )}
                    </div>
                    </div>
                </div>
            </section>

  )
    }
  
}

export default Mywork