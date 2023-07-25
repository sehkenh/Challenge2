import logo from './logo.svg';
import './App.css';
import div1 from './div1';
import div2 from './div2';
import Weather from './Weather';
import Logo from './Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {' '}
        <div1>
          <div2 className="App-div1">
            <Logo />
            <Weather />
          </div2>
        </div1>
      </header>
    </div>
  );
}

export default App;
