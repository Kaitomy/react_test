import React from 'react';

const TablesPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Примеры Bootstrap компонентов</h2>
        </div>
      </div>

      <h2 className="mt-4">2. Простая форма</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Форма входа</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Пароль</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">3. Навигация</h2>
      <div className="row">
        <div className="col-12">
          <div className="bg-dark text-white p-3">
            <div className="row">
              <div className="col-md-6">
                <strong>Мой сайт</strong>
              </div>
              <div className="col-md-6 text-end">
                <span className="me-3">Главная</span>
                <span className="me-3">О нас</span>
                <span>Контакты</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">4. Статистика</h2>
      <div className="row text-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-primary">150</h3>
              <p>Пользователей</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-success">89</h3>
              <p>Заказов</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-warning">24</h3>
              <p>Часа</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-info">7</h3>
              <p>Дней</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">5. Адаптивная сетка</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-primary text-white p-3 mb-2">col-12 col-sm-6 col-md-4 col-lg-3</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-success text-white p-3 mb-2">col-12 col-sm-6 col-md-4 col-lg-3</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-warning text-white p-3 mb-2">col-12 col-sm-6 col-md-4 col-lg-3</div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="bg-info text-white p-3 mb-2">col-12 col-sm-6 col-md-4 col-lg-3</div>
        </div>
      </div>

      <h2 className="mt-4">6. Кнопки и элементы</h2>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary me-2">Основная</button>
          <button className="btn btn-secondary me-2">Вторичная</button>
          <button className="btn btn-success me-2">Успех</button>
          <button className="btn btn-warning me-2">Предупреждение</button>
          <button className="btn btn-danger me-2">Опасность</button>
        </div>
      </div>

      <div className="mt-3">
        <span className="badge bg-primary me-2">Основной</span>
        <span className="badge bg-secondary me-2">Вторичный</span>
        <span className="badge bg-success me-2">Успех</span>
        <span className="badge bg-warning me-2">Предупреждение</span>
        <span className="badge bg-danger">Опасность</span>
      </div>

      <h2 className="mt-4">7. Таблицы</h2>
      
      <h3>Обычная таблица</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Иван Иванов</td>
            <td>ivan@example.com</td>
            <td><span className="badge bg-success">Активен</span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Петр Петров</td>
            <td>petr@example.com</td>
            <td><span className="badge bg-warning">Ожидает</span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Мария Сидорова</td>
            <td>maria@example.com</td>
            <td><span className="badge bg-danger">Заблокирован</span></td>
          </tr>
        </tbody>
      </table>

      <h3>Таблица с полосами</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ноутбук</td>
            <td>50000 ₽</td>
            <td>1</td>
            <td>50000 ₽</td>
          </tr>
          <tr>
            <td>Мышь</td>
            <td>1500 ₽</td>
            <td>2</td>
            <td>3000 ₽</td>
          </tr>
          <tr>
            <td>Клавиатура</td>
            <td>3000 ₽</td>
            <td>1</td>
            <td>3000 ₽</td>
          </tr>
        </tbody>
      </table>

      <h3>Таблица с границами</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>День</th>
            <th>Время</th>
            <th>Событие</th>
            <th>Место</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Понедельник</td>
            <td>09:00</td>
            <td>Встреча команды</td>
            <td>Конференц-зал</td>
          </tr>
          <tr>
            <td>Вторник</td>
            <td>14:00</td>
            <td>Презентация</td>
            <td>Офис</td>
          </tr>
          <tr>
            <td>Среда</td>
            <td>10:00</td>
            <td>Обучение</td>
            <td>Учебный класс</td>
          </tr>
        </tbody>
      </table>

      <h3>Таблица с hover эффектом</h3>
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>Студент</th>
            <th>Математика</th>
            <th>Физика</th>
            <th>Химия</th>
            <th>Средний балл</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Алексей</td>
            <td>5</td>
            <td>4</td>
            <td>5</td>
            <td>4.7</td>
          </tr>
          <tr>
            <td>Елена</td>
            <td>4</td>
            <td>5</td>
            <td>4</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>Дмитрий</td>
            <td>3</td>
            <td>4</td>
            <td>3</td>
            <td>3.3</td>
          </tr>
        </tbody>
      </table>

      <h3>Компактная таблица</h3>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Категория</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone 15</td>
            <td>Телефоны</td>
            <td>80000 ₽</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Samsung Galaxy</td>
            <td>Телефоны</td>
            <td>70000 ₽</td>
          </tr>
          <tr>
            <td>3</td>
            <td>MacBook Pro</td>
            <td>Ноутбуки</td>
            <td>150000 ₽</td>
          </tr>
        </tbody>
      </table>

      <h3>Адаптивная таблица</h3>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Полное имя пользователя</th>
              <th>Электронная почта</th>
              <th>Номер телефона</th>
              <th>Дата регистрации</th>
              <th>Статус аккаунта</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Иванов Иван Иванович</td>
              <td>ivan.ivanov@example.com</td>
              <td>+7 (999) 123-45-67</td>
              <td>15.01.2024</td>
              <td><span className="badge bg-success">Активен</span></td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-1">Редактировать</button>
                <button className="btn btn-sm btn-outline-danger">Удалить</button>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>Петрова Мария Сергеевна</td>
              <td>maria.petrova@example.com</td>
              <td>+7 (888) 234-56-78</td>
              <td>20.01.2024</td>
              <td><span className="badge bg-warning">Ожидает подтверждения</span></td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-1">Редактировать</button>
                <button className="btn btn-sm btn-outline-danger">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Таблица с цветными строками</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Задача</th>
            <th>Приоритет</th>
            <th>Статус</th>
            <th>Срок</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <td>Завершить проект</td>
            <td>Высокий</td>
            <td>Выполнено</td>
            <td>25.01.2024</td>
          </tr>
          <tr className="table-warning">
            <td>Провести тестирование</td>
            <td>Средний</td>
            <td>В процессе</td>
            <td>30.01.2024</td>
          </tr>
          <tr className="table-danger">
            <td>Исправить ошибки</td>
            <td>Критический</td>
            <td>Просрочено</td>
            <td>20.01.2024</td>
          </tr>
          <tr className="table-info">
            <td>Документация</td>
            <td>Низкий</td>
            <td>Запланировано</td>
            <td>05.02.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablesPage;
