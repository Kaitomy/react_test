import React, { useState } from 'react';

const DescriptionPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Описание</h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0" style={{
            borderRadius: '15px', 
            overflow: 'hidden'
          }}>
            <div className="card-body p-0">
              <div className="row g-0">
                {/* Фото слева */}
                <div className="col-md-4">
                  <div className="h-100 d-flex align-items-center justify-content-center" 
                       style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <div className="text-center p-4">
                      <img 
                        src="/images/1.jpg" 
                        alt="Фото человека" 
                        className="img-fluid rounded-circle shadow-lg mb-3"
                        style={{
                          width: '200px', 
                          height: '200px', 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onClick={() => setShowModal(true)}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <h4 className="text-white mb-0">Алексей Иванов</h4>
                      <p className="text-white">Frontend Developer</p>
                    </div>
                  </div>
                </div>

                {/* Информация справа */}
                <div className="col-md-8">
                  <div className="p-5">
                    <div className="mb-4">
                      <h3 className="text-primary mb-3">
                        <i className="fas fa-user me-2"></i>
                        Личная информация
                      </h3>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="mb-2"><strong>Полное имя:</strong> Алексей Сергеевич Иванов</p>
                          <p className="mb-2"><strong>Возраст:</strong> 28 лет</p>
                          <p className="mb-2"><strong>Город:</strong> Москва</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="mb-2"><strong>Email:</strong> alexey@example.com</p>
                          <p className="mb-2"><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                          <p className="mb-2"><strong>Статус:</strong> <span className="badge bg-success">Доступен</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-success mb-3">
                        <i className="fas fa-code me-2"></i>
                        Технические навыки
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-muted">Frontend</h6>
                          <div className="mb-2">
                            <span className="badge bg-primary me-1">React</span>
                            <span className="badge bg-primary me-1">JavaScript</span>
                            <span className="badge bg-primary me-1">TypeScript</span>
                          </div>
                          <div className="mb-2">
                            <span className="badge bg-info me-1">HTML5</span>
                            <span className="badge bg-info me-1">CSS3</span>
                            <span className="badge bg-info me-1">Sass</span>
                          </div>
                          <div className="mb-2">
                            <span className="badge bg-warning me-1">Bootstrap</span>
                            <span className="badge bg-warning me-1">Material-UI</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h6 className="text-muted">Backend & Tools</h6>
                          <div className="mb-2">
                            <span className="badge bg-secondary me-1">Node.js</span>
                            <span className="badge bg-secondary me-1">Express</span>
                            <span className="badge bg-secondary me-1">MongoDB</span>
                          </div>
                          <div className="mb-2">
                            <span className="badge bg-dark me-1">Git</span>
                            <span className="badge bg-dark me-1">Docker</span>
                            <span className="badge bg-dark me-1">AWS</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-warning mb-3">
                        <i className="fas fa-graduation-cap me-2"></i>
                        Образование
                      </h4>
                      <div className="card bg-light">
                        <div className="card-body">
                          <h6 className="card-title">Московский технический университет</h6>
                          <p className="card-text mb-1">Факультет: Информационные технологии</p>
                          <p className="card-text mb-1">Специальность: Программная инженерия</p>
                          <p className="card-text mb-0"><small className="text-muted">2016-2020</small></p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-info mb-3">
                        <i className="fas fa-briefcase me-2"></i>
                        Опыт работы
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card border-success mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-2">
                                <div className="bg-success rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                                <h6 className="mb-0">Senior Frontend Developer</h6>
                              </div>
                              <p className="mb-1 text-muted">TechCorp Inc.</p>
                              <small className="text-muted">2022 - настоящее время</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card border-primary mb-3">
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-2">
                                <div className="bg-primary rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                                <h6 className="mb-0">Frontend Developer</h6>
                              </div>
                              <p className="mb-1 text-muted">WebStudio Ltd.</p>
                              <small className="text-muted">2020 - 2022</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-danger mb-3">
                        <i className="fas fa-trophy me-2"></i>
                        Достижения
                      </h4>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-light rounded achievement-card" 
                               style={{
                                 transition: 'transform 0.3s ease, background-color 0.3s ease',
                                 cursor: 'pointer'
                               }}
                               onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'scale(1.05)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}
                               onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'scale(1)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}>
                            <i className="fas fa-medal fa-2x text-warning mb-2" style={{
                              animation: 'pulse 2s infinite'
                            }}></i>
                            <h6>Лучший разработчик</h6>
                            <small className="text-muted">2023</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-light rounded achievement-card"
                               style={{
                                 transition: 'transform 0.3s ease, background-color 0.3s ease',
                                 cursor: 'pointer'
                               }}
                               onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'scale(1.05)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}
                               onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'scale(1)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}>
                            <i className="fas fa-certificate fa-2x text-success mb-2" style={{
                              animation: 'bounce 1s infinite'
                            }}></i>
                            <h6>React Expert</h6>
                            <small className="text-muted">Certification</small>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3 bg-light rounded achievement-card"
                               style={{
                                 transition: 'transform 0.3s ease, background-color 0.3s ease',
                                 cursor: 'pointer'
                               }}
                               onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'scale(1.05)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}
                               onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'scale(1)';
                                 e.currentTarget.style.backgroundColor = '#f8f9fa';
                               }}>
                            <i className="fas fa-star fa-2x text-primary mb-2" style={{
                              animation: 'rotate 3s linear infinite'
                            }}></i>
                            <h6>5-звездочный рейтинг</h6>
                            <small className="text-muted">Upwork</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-0">
                      <h4 className="text-secondary mb-3">
                        <i className="fas fa-heart me-2"></i>
                        Хобби и интересы
                      </h4>
                      <div className="d-flex flex-wrap gap-2">
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#007bff';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Фотография</span>
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#28a745';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Путешествия</span>
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#ffc107';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Спорт</span>
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#dc3545';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Чтение</span>
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#6f42c1';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Музыка</span>
                        <span className="badge bg-light text-dark border" 
                              style={{
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.1)';
                                e.target.style.backgroundColor = '#17a2b8';
                                e.target.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.color = '#212529';
                              }}>Готовка</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для увеличенного фото */}
      {showModal && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={() => setShowModal(false)}
        >
          <div 
            className="position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/1.jpg" 
              alt="Увеличенное фото" 
              className="img-fluid"
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                animation: 'fadeIn 0.3s ease'
              }}
            />
            <button 
              className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default DescriptionPage;
