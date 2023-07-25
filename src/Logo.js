import React from 'react';
import Dia from './Dia';
import Ciudad from './Ciudad';
import Grados from './Grados';
import Clima from './Clima';

export default function Logo() {
  return (
    <div className="App-div1">
      <img className="cloud1" src="./images/cloud.png" alt="clouds" />
      <img className="moon1" src="./images/moon.png" alt="moon" />
      <Dia />
      <Ciudad />
      <Grados />
      <Clima />
    </div>
  );
}
