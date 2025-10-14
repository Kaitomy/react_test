import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstComponent from './components/FirstComponent';
import CardComponent from './components/CardComponent';
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-primary text-white py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img src={logo} className="App-logo me-3" alt="logo" style={{height: '40px'}} />
              <span className="h4 mb-0">My React App</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5 flex-grow-1">
        {/* FirstComponent */}
        <div className="row mt-5">
          <div className="col">
            <FirstComponent />
          </div>
        </div>

        {/* Cards Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center mb-4">Наши карточки</h2>
          </div>
        </div>
        <div className="row g-4">
            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 1"
                description="Изучайте React - современную библиотеку для создания пользовательских интерфейсов. Создавайте интерактивные веб-приложения с компонентной архитектурой."
                imageUrl="/images/1.jpg"
                imageAlt="Лягушечка 1"
              />
            </div>
            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 2"
                description="Используйте Bootstrap для быстрого создания адаптивных и красивых веб-интерфейсов. Готовая система компонентов и утилит."
                imageUrl="/images/2.jpg"
                imageAlt="Лягушечка 2"
              />
            </div>
            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 3"
                description="Создавайте современные веб-приложения с использованием лучших практик дизайна. Адаптивность, доступность и производительность."
                imageUrl="/images/3.jpg"
                imageAlt="Лягушечка 3"
              />
            </div>

            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 1"
                description="Изучайте React - современную библиотеку для создания пользовательских интерфейсов. Создавайте интерактивные веб-приложения с компонентной архитектурой."
                imageUrl="/images/1.jpg"
                imageAlt="Лягушечка 1"
              />
            </div>
            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 2"
                description="Используйте Bootstrap для быстрого создания адаптивных и красивых веб-интерфейсов. Готовая система компонентов и утилит."
                imageUrl="/images/2.jpg"
                imageAlt="Лягушечка 2"
              />
            </div>
            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 3"
                description="Создавайте современные веб-приложения с использованием лучших практик дизайна. Адаптивность, доступность и производительность."
                imageUrl="/images/3.jpg"
                imageAlt="Лягушечка 3"
              />
            </div>

            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 3"
                description="Создавайте современные веб-приложения с использованием лучших практик дизайна. Адаптивность, доступность и производительность."
                imageUrl="/images/3.jpg"
                imageAlt="Лягушечка 3"
              />
            </div>

            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 3"
                description="Создавайте современные веб-приложения с использованием лучших практик дизайна. Адаптивность, доступность и производительность."
                imageUrl="/images/3.jpg"
                imageAlt="Лягушечка 3"
              />
            </div>

            <div className="col-md-4">
              <CardComponent 
                title="Лягушечка 3"
                description="Создавайте современные веб-приложения с использованием лучших практик дизайна. Адаптивность, доступность и производительность."
                imageUrl="/images/3.jpg"
                imageAlt="Лягушечка 3"
              />
            </div>
        </div>
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
}

export default App;
