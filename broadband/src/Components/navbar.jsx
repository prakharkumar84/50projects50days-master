import "./Navbar.css";
// import {Helmet} from "react-helmet";

export default function Navbar() {
  return (
    <div className="header">
      <div className="header_title">PkNetwork</div>
      <a href="#1" className="toggle-button">
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      <div className="header_nav">
        <div className="navbar-links">
          <div className="header_option">Home</div>
          <div className="header_option">Service</div>
          <div className="header_option">About Us</div>
          <div className="header_option">Contact Us</div>
          <div className="header_option">Login</div>
          <div className="header_option">Register</div>
        </div>
      </div>
      {/* <Helmet>
              <script src="./script.js" type='text/javascript'></script>    
      </Helmet> */}
    </div>
  );
}
