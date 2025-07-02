
import './App.css';

import ABOUTUS from './Components/ABOUTUS/about-us';
// import CERAWD from './Components/CER&AWD/cer&awd';
// import CHOOSEUS from './Components/CHOOSEUS/choose-us';
// import CLIENTS from './Components/CLIENTS/clients';
import COPYRIGHT from './Components/COPYRIGHT/copyright';
// import FAQS from './Components/FAQS/faqs';
import FOOTER from './Components/FOOTER/footer';
import HEROSECTION from './Components/HEROSECTION/hero-section';
import NAVBAR from './Components/NAVBAR/navbar';
import OFFER from './Components/OFFER/offer';
import PRODUCTS from './Components/PRODUCTS/products';
// import TOPBAR from './Components/TOPBAR/topbar';
import WORKS from './Components/WORKS/works';

function App() {
  return (
    <div className="App">
      
      {/* <TOPBAR/> */}
      <NAVBAR/>
      <HEROSECTION/>
        <ABOUTUS/>
        <OFFER/>
        <PRODUCTS/>
        <WORKS/>
        {/* <CLIENTS/>
        <CHOOSEUS/>
        <FAQS/>
        <CERAWD/> */}
        <FOOTER/>
        <COPYRIGHT/>

    </div>
  );
}

export default App;
