import React from 'react'
import GlobalTitle from '../Components/globalTitle'

function AnimationIntro() {
  return (
    <section id="animation">
    <div className="container ht">
  <div className="jumbotron ">
    <GlobalTitle tag="Animation"/>
    <p className="lead" style={{color: 'rgb(56, 2, 2)'}}>Feel free to check my work in animation . I have been
      following 3d animation from last 2 years while pursuing my Btech. I am fairly experienced in 3D
      modelling , texturing , rigging and animating models. <br />I use blender as my main software for
      modelling as its free and I also know my way around autodesk maya which is a industry standard . I use
      photoshop and gimp for textures and colors for my projects.</p>
    <h5>Things i know:-</h5>
    <ul>
      <li>3d modelling</li>
      <li>Rigging</li>
      <li>Texturing</li>
      <li>Animation</li>
      <li>Environment design</li>
      <li>Compositing</li>
    </ul>
    {/* <hr class="my-4 "> */}
    <p style={{color: 'rgb(56, 2, 2)'}}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
      </svg> Click here to see more of my work.</p>
    <a className="btn btn-new btn-lg button5" href="#projects" role="button" style={{color: 'rgb(56, 2, 2)'}}>View my
      work</a>
  </div>
</div>
</section>
  )
}

export default AnimationIntro