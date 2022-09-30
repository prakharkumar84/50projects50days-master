import "./Products.css";
import Product from "./Product";
import { Component } from "react";
import Menu from "./planAPI";

export default class Products extends Component {
  state={
    type:Menu
  }
  render(){
  return (
    <div className="products">
      <div className='products_title'>Our Monthly Plans</div>
      <div className="products_container">
        {this.state.type.map(type=>(
          <Product 
          id={type.id}
          plan={type.plan}
          speed={type.speed}
          price={type.price}
          />
        ))}
      </div>
    </div>
  );
}
}
