import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import TablesPage from './pages/TablesPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        {/* Простая навигация */}
        <header className="text-white py-3" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src={logo} className="App-logo me-3" alt="logo" style={{height: '40px'}} />
                <span className="h4 mb-0">My React App</span>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/" className="text-white text-decoration-none me-3">Главная</Link>
                <Link to="/cards" className="text-white text-decoration-none me-3">Карточки</Link>
                <Link to="/tables" className="text-white text-decoration-none me-3">Таблицы</Link>
                <Link to="/users" className="text-white text-decoration-none">API пример</Link>
              </div>
            </div>
          </div>
        </header>

        {/* Контент страниц */}
        <main className="container my-5 flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/tables" element={<TablesPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-white py-4 mt-auto" style={{backgroundColor: 'rgb(146, 146, 146)'}}>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p className="mb-0">&copy; 2025 My React App. Все права защищены.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;