import './App.css';
import Navvbar from './components/Nav';
import HeroPage from "./components/Hero";
import Pricing from './components/Pricing';
import About from "./components/About";
import Contact from "./components/Contact";
import PreLoader from './components/PreLoader';


function App() {
  return (
    <>     
      <PreLoader/>
      <Navvbar/>
      <HeroPage/>
      <About />
      <Pricing/>
      <Contact />
    </> 
  );
}

export default App;
