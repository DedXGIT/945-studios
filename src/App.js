import './App.css';
import Navvbar from './components/Nav';
import HeroPage from "./components/Hero";
import Pricing from './components/Pricing';
import About from "./components/About";


function App() {
  return (
    <>     
      <Navvbar/>
      <HeroPage/>
      <About />
      <Pricing/>
    </> 
  );
}

export default App;
