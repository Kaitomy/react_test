import React, { useState } from 'react';

const SimpleFormsPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const [feedbackForm, setFeedbackForm] = useState({
    rating: '',
    comment: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${contactForm.name}! Ваше сообщение отправлено.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Добро пожаловать, ${loginForm.username}!`);
    setLoginForm({ username: '', password: '' });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за оценку ${feedbackForm.rating} звезд!`);
    setFeedbackForm({ rating: '', comment: '' });
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Простые формы</h2>
        </div>
      </div>

      {/* Форма контактов */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">📧 Контактная форма</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleContactSubmit}>
                <div className="mb-3">
                  <label className="form-label">Имя</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Сообщение</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Форма входа */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🔐 Форма входа</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label className="form-label">Имя пользователя</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                    placeholder="Введите логин"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Пароль</label>
                  <input 
                    type="password" 
                    className="form-control"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    placeholder="Введите пароль"
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="row mb-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">⭐ Обратная связь</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleFeedbackSubmit}>
                <div className="mb-3">
                  <label className="form-label">Оцените наш сервис</label>
                  <select 
                    className="form-select"
                    value={feedbackForm.rating}
                    onChange={(e) => setFeedbackForm({...feedbackForm, rating: e.target.value})}
                  >
                    <option value="">Выберите оценку</option>
                    <option value="1">⭐ 1 звезда</option>
                    <option value="2">⭐⭐ 2 звезды</option>
                    <option value="3">⭐⭐⭐ 3 звезды</option>
                    <option value="4">⭐⭐⭐⭐ 4 звезды</option>
                    <option value="5">⭐⭐⭐⭐⭐ 5 звезд</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Комментарий</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                    value={feedbackForm.comment}
                    onChange={(e) => setFeedbackForm({...feedbackForm, comment: e.target.value})}
                    placeholder="Ваш отзыв..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning w-80">
                  Отправить отзыв
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Простая форма подписки */}
      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h5 className="card-title">📬 Подписка на новости</h5>
              <p className="card-text">Получайте последние новости на email</p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Введите ваш email"
                />
                <button className="btn btn-outline-primary" type="button">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Форма поиска */}
      <div className="row mb-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🔍 Поиск</h5>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Что ищете?"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search"></i> Найти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Чекбоксы и радиокнопки */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">☑️ Настройки</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="notifications" />
                <label className="form-check-label" htmlFor="notifications">
                  Уведомления по email
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="newsletter" />
                <label className="form-check-label" htmlFor="newsletter">
                  Подписка на рассылку
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="updates" />
                <label className="form-check-label" htmlFor="updates">
                  Обновления приложения
                </label>
              </div>
              <button className="btn btn-secondary w-100">
                Сохранить настройки
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🎯 Выбор темы</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="theme" id="light" />
                <label className="form-check-label" htmlFor="light">
                  ☀️ Светлая тема
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="theme" id="dark" />
                <label className="form-check-label" htmlFor="dark">
                  🌙 Темная тема
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="theme" id="auto" />
                <label className="form-check-label" htmlFor="auto">
                  🔄 Автоматически
                </label>
              </div>
              <button className="btn btn-info w-100">
                Применить тему
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleFormsPage;
