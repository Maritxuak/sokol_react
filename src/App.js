// Страница Услуги 
// Слайдер, баттоны левые. баттоны между стрелочек. === делаю



// Форма регистрации - добавить флаги. ===== работаю

// исправить баг с пропаданием бургер меню
// доделать баттоны на главной странице у первого слайдера



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
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ServicesLayout from './components/servicesLayout/ServicesLayout';
import TypicalSection from './components/typicalSection/TypicalSection';
import CtaSection from './components/ctaSection/CtaSection';
import ProjectLayout from './components/projectLayout/ProjectLayout';
import PhoneFileValidation from './PhoneFileValidation'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Contact from './components/contact/Contact';
import HeaderSmall from './components/header/HeaderSmall';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

const Layout = () => {
  return (
    <>
      <Main />

    </>
  );
};

const Services = () =>{
  return(
  <>
    <HeaderSmall />
    <ServicesLayout  apiGet = {axiosInstance}/>
    <TypicalSection apiGet = {axiosInstance}/>
    <CtaSection apiGet = {axiosInstance}/>
  </>
  );
};

const Project = () =>{
  return(
  <>
    <HeaderSmall />
    <ProjectLayout apiGet = {axiosInstance}/>
    <CtaSection apiGet = {axiosInstance}/>
  </>
  );
};
function App() {
  const url = 3
  const { id } = useParams();
  const [scroll, setScroll] = React.useState(0);
  const [data, setData] = useState([]);
  const [click, setClick] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Header click={click} setClick={setClick} scroll={scroll} setScroll={setScroll} handleScroll={handleScroll} />,
        },
        {
          path: "/",
          element: <Main />,
        },

      ],
    },
    {
      path: "/service/:id",
      element: <Services />,
    },
    {
      path: "/project/:id",
      element: <Project/>
    },
  ]);

  return (
    <div className={!click ? "" : "is-menu-opened"}>
    
    <RouterProvider router={router} />
    
      <Footer />
    </div>
  );
}

const Main = () => {


  return (
    <>
      <Header/>
      <HeroSection apiGet = {axiosInstance}/>
      <About />
      <Benifest apiGet = {axiosInstance}/>
      <OurWorkflow />
      <ProjectServicesSection apiGet = {axiosInstance}/>
      <CtaSection apiGet = {axiosInstance}/>
    </>
  );
};

export default App;
