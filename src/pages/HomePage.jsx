import React from 'react';
import FirstComponent from '../components/FirstComponent';

const HomePage = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="mb-4">Добро пожаловать!</h1>
          <p className="lead">
            Это главная страница нашего React приложения с маршрутизацией.
          </p>
          <p>
            Используйте навигацию в header для перехода между страницами.
          </p>
        </div>
      </div>
      
      {/* FirstComponent */}
      <div className="row mt-5">
        <div className="col">
          <FirstComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
