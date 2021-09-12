import React, { Fragment } from 'react';
import './Cryptos/app.css'
import Logos from './Cryptos/Logos'
import CoingeckoAPI from './Cryptos/Coingecko'
// components for user interaction
import InputCrypto from "./Cryptos/InputCrypto"


function App() {
  return(
    <div className="App">
      <Logos/>
      <CoingeckoAPI/>


      <Fragment>
        <div className="container">
          <InputCrypto/>
        </div>
      </Fragment>
    </div>


  )





}

export default App;





















