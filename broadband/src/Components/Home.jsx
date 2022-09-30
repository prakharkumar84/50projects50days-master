import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home_image">
        <img
          className="home_image"
          src="https://wallpapercave.com/wp/wp2044699.jpg"
          alt="nhk"
        />
      </div>
      <div className="home_holder">
        <div className="holder_title">Get you own connection.</div>
        <div className="holder_input">
          <input
            className="holder_option"
            type="text"
            placeholder="Name*"
            id="name"
          />
          <input
            className="holder_option"
            type="text"
            placeholder="Phone Number*"
            id="name"
          />
          <input
            className="holder_option"
            type="text"
            placeholder="PinCode*"
            id="name"
          />
        </div>
        <p className="home_tc">
          By submitting details you agree to our Terms & Conditions
        </p>
        <button className="home_button" onClick={""}>
          Register
        </button>
      </div>
    </div>
  );
}
