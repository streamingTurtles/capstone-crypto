import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Testing get pricing data for crypto curriencies using coingecko free API
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
          click Here to get the TOP 10 Crypto Curriencies
        </a>

      </header>
    </div>
  );
}

export default App;
