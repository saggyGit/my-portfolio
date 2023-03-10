import React from 'react';
import Contact from './component/Contact';
import Intro from './component/Intro';
import Portfolio from './component/Portfolio';
import Testimonials from './component/Testimonials';
import Topbar from './component/Topbar';
import Works from './component/Works';
import './App.scss';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <div className="app">

      <Topbar></Topbar>
    
    <div className="section">
    
    <Intro></Intro>
    <Portfolio></Portfolio>
    <Works></Works>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer/>
    

    </div>
    </div>
   
    
    </>
  );
};

export default App;