import './App.css';
import Navvbar from './components/Nav';
import HeroPage from "./components/Hero";
import Pricing from './components/Pricing';
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <>     
      <Navvbar/>
      <HeroPage/>
      <About />
      <Pricing/>
      <Contact />
    </> 
  );
}

export default App;
