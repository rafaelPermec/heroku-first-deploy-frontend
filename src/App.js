import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contrate <code>Rafael Perdigão</code> agora mesmo!
        </p>
        <p>
          Envie sua proposta para <code>dev.rafaelpermec@gmail.com!</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My First Frontend Deploy on Heroku
        </a>
      </header>
    </div>
  );
}

export default App;
