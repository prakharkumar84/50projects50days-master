import Home from "./Components/Home";
import Navbar from "./Components/navbar";
import Products from "./Components/Products";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products/>
    </div>
  );
}
