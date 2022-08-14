import React from 'react';

const Navbar = ({totalCounter}) =>{
    return (
            <div>
            <nav className="navbar navbar-expand-lg bg-light">
             <a className="navbar-brand" href='xyz'>
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>{totalCounter}
                </span>
                </a>
            </nav>
            <br />
            </div>

        );
};

 
export default Navbar;