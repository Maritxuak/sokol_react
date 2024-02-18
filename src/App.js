import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './globalCSS/globalcss.css'
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import "./globalCSS/fontfase.css"
import "./globalCSS/media.css"
import About from './components/about/about';
import Benifest from './components/benifest/benifest';
import OurWorkflow from './components/ourWorkflow/OurWorkflow';
import React, { useState , useEffect} from "react"
import ProjectServicesSection from './components/project/Project';

function App() {

  const [scroll, setScroll] = React.useState(0)

  const [data, setData] = useState([]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // const fetchData = async () => {
    //   const response = await fetch('../src/base/items.json');
    //   const jsonData = await response.json();
    //   setData(jsonData);
    // };

    // fetchData();
  }, []);


  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const [click, setClick] = React.useState(true)

  return (
    <div className={!click ? "" : "is-menu-opened"}>
    <Header click={click} setClick={setClick} scroll={scroll} setScroll={setScroll} handleScroll={handleScroll}/>
    <HeroSection />
    <About />
    <Benifest />
    <OurWorkflow />
    <ProjectServicesSection />
    <Footer />
    </div>
  );
}

export default App;
