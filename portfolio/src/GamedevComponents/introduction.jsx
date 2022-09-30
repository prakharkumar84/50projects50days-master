import React from 'react'

export default function Introduction() {
  return (
        <div className="container ht">
            <div className="jumbotron ">
                <h1 className="display-4 "><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
                </svg>Game Developer</h1>
                <hr className="my-4 " />
                <p className="lead" style={{color: 'rgb(56, 2, 2)'}}>Feel free to check my projects in game development.I started
                designing games fairly recently , i currently handle the level designing ,modelling and animation part
                of a game project. <br />I use unity for game designs and blender for 3d models and animation. Photoshop
                and gimp are used for making sprites for 2D or 3D games . </p>
                <p style={{color: 'rgb(56, 2, 2)'}}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg> Click here to see more of my work.</p>
                <a className="btn-new btn-lg " href="#projects" role="button" style={{color: 'rgb(56, 2, 2)'}}>View my
                work</a>
            </div>
    </div>

  )
}
