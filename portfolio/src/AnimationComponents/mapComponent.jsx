import React, { Component } from 'react'
import Dust2 from './dust2'

export default class MapComponent extends Component {
  render() {
    const {type,x}=this.props
    return (
      <div className="row">
                {type.map(z=>{
                    if (z.id===x){
                        return(
                            (
                                <Dust2 url={z.url} key={z.key}/>
                            ))}
                    else return null
                })};
            </div>
    )
  }
}
