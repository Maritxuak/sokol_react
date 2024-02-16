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

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <About />
    <Benifest />
    <Footer />
    </>
  );
}

export default App;
