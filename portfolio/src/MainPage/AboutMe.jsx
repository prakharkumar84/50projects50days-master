import React from 'react'
import GlobalTitle from '../Components/globalTitle'

export const AboutMe = () => {
  return (
    <section id="about">
        <div className="container ht">
            <div className="jumbotron">
            
                <GlobalTitle tag="About Me"/>
            
                <div className=" text-left">
                <p>My name is prakhar Kumar. I'm an Btech student at Dr AIT Computer Science Department. I was
                    born and raised in
                    kanpur,Uttarpradesh.I did my class 10th and 12th from Kanpur from MPGI group of
                    institutions. <br />I scored 9.2
                    cgpa in 10th in CBSE board. <br /> I scored 90.6% in 12th in CBSE board. </p>
                <h4>Skills:</h4>
                <ul>
                    <li>Animation</li>
                    <li>Front-end web development</li>
                    <li>Graphic designing</li>
                    <li>3d modelling</li>
                    <li>pyhton</li>
                </ul>
                <h4>Software known:</h4>
                <ul>
                    <li>Autodesk Maya</li>
                    <li>Blender</li>
                    <li>Unity</li>
                    <li>Gimp</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Visual Studio Code</li>
                </ul>
                </div>
            </div>
        </div>
    
    </section>

  )
}
