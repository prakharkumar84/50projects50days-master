import React from 'react';
import 'bootstrap' 
import {Link} from "react-router-dom"
import briefcase from "./breifcase.svg"
import home from './home.svg'
import about from './about.svg'
import contact from './contact.svg'

const Navbar = () => {
    return ( 
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top blur-effect">
                <Link  to='/' className="navbar-brand" href="./index.html">
                    <span className='align-item-top'>
                    <img src={briefcase} className="mr-2 logo-style" alt="logo" fill="currentColor" /></span>
                    <span className='navbar-brand1'>Prakhar Kumar</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-sm-4">
                        <Link to='/' className="nav-link" href="./index.html">
                            <img src={home} className="logo-style mr-1" alt="logo" fill="currentColor" />
                            Home <span className="sr-only">(current)</span> 
                        </Link>
                        </li>

                        <li className="nav-item mr-sm-4">
                        <Link to='/' className="nav-link" href="#about">
                            <img src={about} className="logo-style mr-1" alt="logo" fill="currentColor" />
                            About
                        </Link>
                        </li>

                        <li className="nav-item mr-sm-4">
                        <a className="nav-link" href="#contact">
                            <img src={contact} className="logo-style mr-1" alt="logo" fill="currentColor" />
                            Contact 
                        </a>
                        </li>

                    </ul>
                </div>
            </nav>
            </>
        );
    }
 
export default Navbar;