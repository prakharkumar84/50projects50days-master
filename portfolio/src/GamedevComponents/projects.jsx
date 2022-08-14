
import React, { Component } from 'react'
import BigBox from '../AnimationComponents/bigBox'
import Menu from './gameAPI'
import GameComponent from './gameComponent'
import cube from '../images/cuberunner.mp4'

export default class projects extends Component {
    state={
        type:Menu
    }
  render() {
    
    return (
            <section id="mywork">
                <div className="container ht">
                    <div className="jumbotron">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 ">
                        <h1 className="display-4 ">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                            </svg>My work
                        </h1>
                        <hr className="my-4" />
                        </div>
                    </div>
                    <div className="row">
                        {this.state.type.map(type=>(
                            <GameComponent
                            key={type.id}
                            str={type.str}
                            url={type.url}
                            play={type.play}/>
                        ))}
                    </div>
                    <h1 className='mb-5' style={{color: 'rgb(88, 87, 86)'}}>Gameplay</h1>
                    <BigBox url={cube}/>
                    </div>
                    
                </div>
            </section>

    )
  }
}

