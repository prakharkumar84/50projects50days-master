import React from 'react'
import '../Components/style.css';
import GlobalTitle from '../Components/globalTitle';
const Introduction = () => {
  return (
    <div className="container ht">
        <div className="jumbotron ">
            <GlobalTitle tag="Hello!"/>
            <p className="lead">Hi! This is Prakhar, Welcome to my portfolio.</p>
            
            <p><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg> Click here to see more of my work.</p>
            <a className=" btn btn-new btn-lg button5" href="#mywork" role="button">Let's Go</a>
        </div>
    </div>

  );
}

export default Introduction;