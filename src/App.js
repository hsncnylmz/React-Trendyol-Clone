import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import NavbarTop from "./components/NavbarTop";
import NavbarDown from './components/NavbarDown';
import Carousel from './components/Carousel';
import Headerfiltre from './components/Headerfiltre';
import Urunbar from './components/Urunbar';
import BasicExample from './components/BasicExample';
import BasicExample2 from './components/BasicExample2';
import BilgiAlani from './components/BilgiAlani';
import SayfaLinkleri from './components/SayfaLinkleri';
import FooterAlani from './components/FooterAlani';
import UrunGosterisi from './components/UrunGosterisi';

function App() {
  return (
    <div>
      <NavbarTop />
      <Navbar />
      <NavbarDown />
      <hr className='navbarhr' style={{ border: '0.2px solid grey', height: '0.2px' }} />
      <div className='container'>
        <header>
          <Carousel />
          <Headerfiltre />
          <BasicExample />
          <Urunbar />
          <UrunGosterisi />
          <BasicExample2 />
          <BilgiAlani />
        </header>
      </div>
      <hr />
      <SayfaLinkleri />
      <FooterAlani />
    </div>
  );
}

export default App;
