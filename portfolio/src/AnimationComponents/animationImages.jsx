import React, { Component } from 'react'
import Menu from './animationAPI'
import carVid from '../images/animation/car/car2.mkv'
import carVid1 from '../images/animation/car/car_animation.mkv'
import im from '../images/animation/im/0001-0250.mkv'
import dance from '../images/animation/muqabala/0001-1200.mkv'
import pekka from '../images/animation/pekka/untitled.png'
import spartan from '../images/animation/spartan/spartan.mkv'
import BigBox from './bigBox'
import Title from './title'
import MapComponent from './mapComponent'
import MapComponent1 from './mapComponent1'
import GlobalTitle from '../Components/globalTitle'


class AnimationImages extends Component {
    state={
        type:Menu
    }
  render() {
    return (
      <section id="projects">
        <div className="container ht">
            <div className="jumbotron">
            <GlobalTitle tag="Projects"/>
            {/* car */}
            <Title tag="Car"/>
            <MapComponent1 type={this.state.type} x={1}/>
            <BigBox url={carVid}/>
            <BigBox url={carVid1}/>
            {/* castle */}
            <Title tag="Chillon Castle"/>
            <MapComponent1 type={this.state.type} x={2}/>
            {/* dust 2 */}
            <Title tag="Dust2"/>
            <MapComponent type={this.state.type} x={3} />

            {/* landscape */}
            <Title tag="LandScape"/>
            <MapComponent1 type={this.state.type} x={4}/>

            {/* low poly room */}
            <Title tag="Low Poly Room"/>
            <MapComponent type={this.state.type} x={5} />
    
            {/* mustang */}
            <Title tag="Mustang"/>
            <MapComponent type={this.state.type} x={6} />

            {/* pekka */}
            <Title tag="Pekka"/>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <img src={pekka} className="img-thumb1" alt="selfie" />
                </div>
            </div>

            {/* spartan */}
            <Title tag="Spartan"/>
            <MapComponent type={this.state.type} x={7}/>
            <br />
            <BigBox url={spartan}/>
            
            {/* muqabala */}
            <Title tag="Dance"/>
            <BigBox url={dance}/>
        
            {/* ironman */}
            <Title tag="IronMan"/>
            <BigBox url={im}/>
            </div>
        </div>
        </section>

    )
  }
}

export default AnimationImages