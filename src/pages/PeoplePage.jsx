import React, { useState, useEffect } from 'react';

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    city: '',
    profession: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = () => {
    setLoading(true);
    try {
      // Загружаем только из localStorage
      const savedPeople = localStorage.getItem('people');
      if (savedPeople) {
        setPeople(JSON.parse(savedPeople));
      } else {
        // Если нет сохраненных данных, создаем пустой массив
        setPeople([]);
      }
    } catch (error) {
      console.error('Ошибка загрузки людей:', error);
      setPeople([]);
    } finally {
      setLoading(false);
    }
  };

  const savePeople = (newPeople) => {
    setPeople(newPeople);
    localStorage.setItem('people', JSON.stringify(newPeople));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
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
    
    if (!formData.age) {
      newErrors.age = 'Возраст обязателен';
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Возраст должен быть от 1 до 120';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email неверного формата';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'Город обязателен';
    }
    
    if (!formData.profession.trim()) {
      newErrors.profession = 'Профессия обязательна';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
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
    
    // Имитация сохранения данных
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Создание нового человека
    const newPerson = {
      id: people.length + 1,
      ...formData,
      age: parseInt(formData.age),
      dateAdded: new Date().toISOString().split('T')[0]
    };
    
    // Добавление в локальное состояние и сохранение в localStorage
    const updatedPeople = [...people, newPerson];
    savePeople(updatedPeople);
    
    console.log('Новый человек добавлен:', newPerson);
    alert('Человек успешно добавлен!');
    
    // Очистка формы
    setFormData({
      name: '',
      age: '',
      email: '',
      city: '',
      profession: '',
      phone: ''
    });
    
    setIsSubmitting(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этого человека?')) {
      const updatedPeople = people.filter(person => person.id !== id);
      savePeople(updatedPeople);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Управление людьми</h2>
        </div>
      </div>

      {/* Форма добавления человека */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Добавить нового человека</h4>
            </div>
            <div className="card-body">
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
                        placeholder="Введите полное имя"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>
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
                </div>

                <div className="row">
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
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Телефон *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Город *</label>
                      <input 
                        type="text" 
                        name="city"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Москва"
                      />
                      {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Профессия *</label>
                      <input 
                        type="text" 
                        name="profession"
                        className={`form-control ${errors.profession ? 'is-invalid' : ''}`}
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Frontend Developer"
                      />
                      {errors.profession && <div className="invalid-feedback">{errors.profession}</div>}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Добавление...
                      </>
                    ) : (
                      'Добавить человека'
                    )}
                  </button>
                  
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setFormData({
                        name: '',
                        age: '',
                        email: '',
                        city: '',
                        profession: '',
                        phone: ''
                      });
                      setErrors({});
                    }}
                  >
                    Очистить форму
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица людей */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Список людей</h4>
              <div>
                <button 
                  className="btn btn-outline-primary btn-sm me-2"
                  onClick={loadPeople}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Загрузка...
                    </>
                  ) : (
                    'Обновить'
                  )}
                </button>
                <button 
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => {
                    if (window.confirm('Очистить все данные?')) {
                      localStorage.removeItem('people');
                      setPeople([]);
                    }
                  }}
                  title="Очистить все данные"
                >
                  <i className="fas fa-undo"></i> Очистить
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              {loading ? (
                <div className="text-center p-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                  </div>
                  <p className="mt-2">Загрузка данных...</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Возраст</th>
                        <th>Email</th>
                        <th>Город</th>
                        <th>Профессия</th>
                        <th>Телефон</th>
                        <th>Дата добавления</th>
                        <th>Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {people.length === 0 ? (
                        <tr>
                          <td colSpan="9" className="text-center py-4">
                            <div className="text-muted">
                              <i className="fas fa-users fa-3x mb-3"></i>
                              <p>Нет данных о людях</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        people.map(person => (
                          <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>
                              <strong>{person.name}</strong>
                            </td>
                            <td>
                              <span className="badge bg-info">{person.age} лет</span>
                            </td>
                            <td>
                              <a href={`mailto:${person.email}`} className="text-decoration-none">
                                {person.email}
                              </a>
                            </td>
                            <td>{person.city}</td>
                            <td>
                              <span className="badge bg-secondary">{person.profession}</span>
                            </td>
                            <td>
                              <a href={`tel:${person.phone}`} className="text-decoration-none">
                                {person.phone}
                              </a>
                            </td>
                            <td>
                              <small className="text-muted">{person.dateAdded}</small>
                            </td>
                            <td>
                              <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleDelete(person.id)}
                                title="Удалить"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Статистика</h5>
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="bg-primary text-white p-3 rounded">
                    <h3>{people.length}</h3>
                    <p className="mb-0">Всего людей</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-success text-white p-3 rounded">
                    <h3>{people.filter(p => p.age < 30).length}</h3>
                    <p className="mb-0">Моложе 30</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-warning text-white p-3 rounded">
                    <h3>{people.filter(p => p.age >= 30 && p.age < 50).length}</h3>
                    <p className="mb-0">30-49 лет</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="bg-info text-white p-3 rounded">
                    <h3>{people.filter(p => p.age >= 50).length}</h3>
                    <p className="mb-0">50+ лет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
