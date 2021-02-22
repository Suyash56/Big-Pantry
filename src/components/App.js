import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Cards from './Cards';
import Offers from './Offers';
import PaymentSlider from './PaymentSlider';
import Loading from '../images/Loading.gif';

import '../styles/App.css';

const { lazy, Suspense } = React;

const Lazy = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({ default: () => <Resource /> });
  }, 5000);
}));
  

const Resource = () => (
  <>
    <Header/>
    <Slider/>
    <Cards/>
    <Offers/>
    <PaymentSlider/>
  </>
)


function App() {
  return (
    <div className="App">
      <Suspense fallback={ <div>
        <img src={Loading} className="loading-gif" alt="loading..."></img>
      </div> }>
      <Lazy/>
    </Suspense>
    </div>
  );
}

export default App;
