import Navbar from './Components/Navbar';
import { Component } from 'react';
import MainPage from './MainPage'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Animation from './AnimationComponents';
import ScrollToTop from './Components/scrollToTop';
import GameDev from './GamedevComponents'



class App extends Component {
  render(){  
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/animation" element={<Animation />}></Route>
          <Route exact path="/gamedev" element={<GameDev />}></Route>
        </Routes>
      </Router>
    </div>
  );
  } 
}

export default App;
