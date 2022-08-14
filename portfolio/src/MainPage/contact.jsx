import React, { Component } from 'react';
import ContactBox from './contactBox';
import Menu from './contactAPI';
import GlobalTitle from '../Components/globalTitle';

class Contact extends Component {
    state={
        types:Menu
    }
    
    render(){
  return (
        <section id="contact">
            <div className="container ht">
                <div className="jumbotron ">
                <GlobalTitle tag="Contact"/>
                <div className="text-center jumbotron">
                    <div className="row align-content-center">
                        {
                            this.state.types.map(type =>(
                                <ContactBox
                                key={type.id}
                                url={type.url}
                                link={type.link}
                                tag={type.tag}
                                />
                            )
                            )
                        }
                    </div>
                </div>
                </div>
            </div>
        </section>

  )
}
}

export default Contact