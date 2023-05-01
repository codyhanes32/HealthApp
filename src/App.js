import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
