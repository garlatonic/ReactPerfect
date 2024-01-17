import logo from './logo.svg';
import './App.css';
import './assets/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={ <Main />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
