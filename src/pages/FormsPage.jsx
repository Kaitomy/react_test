import React, { useState } from 'react';

const FormsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    interests: [],
    newsletter: false,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'interests') {
        const updatedInterests = formData.interests.includes(value)
          ? formData.interests.filter(interest => interest !== value)
          : [...formData.interests, value];
        setFormData({ ...formData, interests: updatedInterests });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Очистка ошибки при изменении поля
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email неверного формата';
    }
    
    if (!formData.age) {
      newErrors.age = 'Возраст обязателен';
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Возраст должен быть от 1 до 120';
    }
    
    if (!formData.country) {
      newErrors.country = 'Выберите страну';
    }
    
    if (formData.interests.length === 0) {
      newErrors.interests = 'Выберите хотя бы один интерес';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки данных
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Отправленные данные:', formData);
    alert('Форма успешно отправлена!');
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      age: '',
      country: '',
      interests: [],
      newsletter: false,
      message: ''
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Формы и React Hook Form</h2>
        </div>
      </div>

      <h2 className="mt-4">1. Обычные HTML формы</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Простая форма</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Имя</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">2. Установка React Hook Form</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Команды для установки</h5>
              <div className="bg-dark text-light p-3 rounded">
                <code className="text-success">npm install react-hook-form</code>
              </div>
              <div className="mt-3">
                <h6>Или с yarn:</h6>
                <div className="bg-dark text-light p-3 rounded">
                  <code className="text-success">yarn add react-hook-form</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">3. React Hook Form - Практический пример</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Полная форма с валидацией</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Имя *</label>
                      <input 
                        type="text" 
                        name="name"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите ваше имя"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Возраст *</label>
                      <input 
                        type="number" 
                        name="age"
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="25"
                        min="1"
                        max="120"
                      />
                      {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Страна *</label>
                      <select 
                        name="country"
                        className={`form-select ${errors.country ? 'is-invalid' : ''}`}
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Выберите страну</option>
                        <option value="ru">Россия</option>
                        <option value="us">США</option>
                        <option value="uk">Великобритания</option>
                        <option value="de">Германия</option>
                        <option value="fr">Франция</option>
                      </select>
                      {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Интересы *</label>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="interests"
                          value="programming"
                          checked={formData.interests.includes('programming')}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">Программирование</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="interests"
                          value="design"
                          checked={formData.interests.includes('design')}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">Дизайн</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="interests"
                          value="marketing"
                          checked={formData.interests.includes('marketing')}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">Маркетинг</label>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          name="interests"
                          value="business"
                          checked={formData.interests.includes('business')}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label">Бизнес</label>
                      </div>
                    </div>
                  </div>
                  {errors.interests && <div className="text-danger small mt-1">{errors.interests}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Сообщение *</label>
                  <textarea 
                    name="message"
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Расскажите о себе..."
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">
                      Подписаться на рассылку
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Отправка...
                      </>
                    ) : (
                      'Отправить форму'
                    )}
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setFormData({
                        name: '',
                        email: '',
                        age: '',
                        country: '',
                        interests: [],
                        newsletter: false,
                        message: ''
                      });
                      setErrors({});
                    }}
                  >
                    Очистить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">4. Состояние формы</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Текущие данные формы</h5>
              <div className="bg-light p-3 rounded">
                <pre className="mb-0">{JSON.stringify(formData, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">5. Валидация в реальном времени</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Правила валидации</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Имя:</strong> Обязательное поле, не может быть пустым
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> Обязательное поле, должен содержать @ и домен
                </li>
                <li className="list-group-item">
                  <strong>Возраст:</strong> Число от 1 до 120 лет
                </li>
                <li className="list-group-item">
                  <strong>Страна:</strong> Обязательный выбор из списка
                </li>
                <li className="list-group-item">
                  <strong>Интересы:</strong> Минимум один пункт должен быть выбран
                </li>
                <li className="list-group-item">
                  <strong>Сообщение:</strong> Обязательное поле, не может быть пустым
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
