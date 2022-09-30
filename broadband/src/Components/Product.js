import "./Product.css";

export default function Product({plan,speed,price}) {
  return (
    <div className="product">
      <span className="product_title">{plan}</span>
      <div className="product_details">
        <span className='product_speed'> {speed} Mbps<span className='product_span'> at just</span> </span>
        <span className='product_speed'>₹{price}<sup>*</sup></span> 
      </div>
      <hr style={{
      height: 2,
      borderWidth: 0,
      color: "gray",
      backgroundColor: "gray"
    }}/>
    
      <span className='option'>Unlimited Data</span>
      <span className='option'>Fiber Technology</span>

      <hr style={{
      height: 2,
      borderWidth: 0,
      color: "gray",
      backgroundColor: "gray"
    }}/>
      <div className='router'>
        <div className='xyz'>
        <img className="router_image" src="https://media.istockphoto.com/photos/black-wifi-router-picture-id495732397?k=20&m=495732397&s=612x612&w=0&h=25S2N4DWMfjqQl-sRYFi3kzAI86gFQht_TYtAQscqGo=" alt="nhk" /> 
        </div>
        <div className='router_specs'>
        <span className='router_option'> FREE TO USE<sup>*</sup></span>
      
        <span className='router_option'> Dual Band Wi-Fi Router</span>
      </div>
      </div>
      <div className="product_bottom">
      <p className="xyz">No Installation Charges • No Security Deposit</p>
    </div>
    </div>
  );
}
