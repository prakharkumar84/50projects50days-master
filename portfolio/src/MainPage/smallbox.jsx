import React from 'react'
import { Component } from 'react';
import '../Components/style.css'
import Routers1 from './router';

class Smallbox extends Component {
    
    render(){
         const {url,str,id} = this.props;
         return (
            <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <img src={url} className="img-thumbnail" alt="" />
                    <hr />
                    <h1 style={{color: 'rgb(88, 87, 86)'}} className="text-center">{str}</h1>
                    <p className="text-center">
                        { 
                            <Routers1 tag={id} key={id}/>
                        }
                    
                    </p>
            </div>    
        );
    }
}
 
export default Smallbox;