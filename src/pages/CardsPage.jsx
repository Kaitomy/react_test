import React from 'react';
import CardComponent from '../components/CardComponent';

const CardsPage = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default CardsPage;
