import React from 'react';
import { Navigationdots, Socialmedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <Socialmedia />
      <div className="app__wrapper app__flex">
        <Component />

        
      </div>
      <Navigationdots active={idName} />
    </div>
  );
};

export default AppWrap;