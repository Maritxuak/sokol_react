import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './globalCSS/globalcss.css'
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <Footer />
    </>
  );
}

export default App;
