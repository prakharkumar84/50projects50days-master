
import React from 'react'
// import icon1 from './play.svg'

const GameComponent = ({str,url,play}) => {
  return (
    <div className="container">
        <div className="jumbotron">
                <h1 style={{color: 'rgb(88, 87, 86)'}}>{str}</h1>
                <hr />
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <img src={url} className="img-thumb1" alt="nhk" />
                
                <div className='text-center'>
                    <a rel="noopener noreferrer" href={play} target="_blank"><button className=" btn-lg btn-new  mt-5">
                      {/* <img src={icon1} className="logo-style mr-1" alt="nhk"/> */}
                  Play Yourself</button></a>
                </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}
export default GameComponent

