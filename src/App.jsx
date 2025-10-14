import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import TablesPage from './pages/TablesPage';

// Компонент навигации
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} className="App-logo me-3" alt="logo" style={{height: '40px'}} />
          <span className="h4 mb-0">My React App</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/')}`} 
                to="/"
              >
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/cards')}`} 
                to="/cards"
              >
                Карточки
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/tables')}`} 
                to="/tables"
              >
                Таблицы
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Основной компонент приложения
const AppContent = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Header с навигацией */}
      <Navigation />

      {/* Main Content */}
      <main className="container my-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/tables" element={<TablesPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="mb-0">&copy; 2025 My React App. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Главный компонент с Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;