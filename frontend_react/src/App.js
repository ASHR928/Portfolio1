import React from 'react';

import { About, Footer, Header,  Skills1, Testimonials1 } from './container';
import { Navbar } from './components';
import './App1.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills1 />
    <Testimonials1 />
    <Footer />
  </div>
);

export default App;