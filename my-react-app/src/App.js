
import './App.css';

import ABOUTUS from './Components/ABOUTUS/about-us';
import COPYRIGHT from './Components/COPYRIGHT/copyright';
import FAQS from './Components/FAQS/faqs';
import FOOTER from './Components/FOOTER/footer';
import HEROSECTION from './Components/HEROSECTION/hero-section';
import NAVBAR from './Components/NAVBAR/navbar';
import OFFER from './Components/OFFER/offer';
import PRODUCTS from './Components/PRODUCTS/products';
import WORKS from './Components/WORKS/works';

function App() {
  return (
    <div className="App">
      

      <NAVBAR/>
      <HEROSECTION/>
        <ABOUTUS/>
        <PRODUCTS/>
        <OFFER/>
        <WORKS/>
        <FAQS/>
        <FOOTER/>
        <COPYRIGHT/>

    </div>
  );
}

export default App;
