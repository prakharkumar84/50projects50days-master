import React, { Component } from 'react'
import Car from './car';
export default class MapComponent1 extends Component {
  render() {
    const {type , x}=this.props
    return (
       <div className="row">
                {
                type.map(type=>{
                    if (type.id===x){
                        return(
                            (
                                <Car
                                url={type.url}
                                key={type.key}
                                />
                            )
                        )
                    }
                    else{
                        return null;
                        }
                    }
                    )
                };
            </div>
       )
    }
}
