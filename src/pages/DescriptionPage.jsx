import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DescriptionPage = () => {
  const [showModal, setShowModal] = useState(false);
  
  // Анимация 1: Fade In + Slide Up для заголовка
  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Анимация 2: Scale для главной карточки
  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  // Анимация 3: Stagger для навыков
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  // Анимация 4: Rotate на hover для достижений
  const achievementVariants = {
    hover: { 
      rotate: [0, -5, 5, -5, 0],
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          {/* Анимация 1: Заголовок с Fade In + Slide Up */}
          <motion.h2 
            className="text-center mb-5"
            variants={titleAnimation}
            initial="hidden"
            animate="visible"
          >
            Описание
          </motion.h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Анимация 2: Scale для главной карточки */}
          <motion.div 
            className="card shadow-lg border-0" 
            style={{
              borderRadius: '15px', 
              overflow: 'hidden'
            }}
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
          >
            <div className="card-body p-0">
              <div className="row g-0">
                
                {/* Фото слева */}
                <div className="col-md-4">
                  <div className="h-100 d-flex align-items-center justify-content-center" 
                       style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                    <div className="text-center p-4">
                      <motion.img 
                        src="/images/1.jpg" 
                        alt="Фото человека" 
                        className="img-fluid rounded-circle shadow-lg mb-3"
                        style={{
                          width: '200px', 
                          height: '200px', 
                          objectFit: 'cover',
                          cursor: 'pointer'
                        }}
                        onClick={() => setShowModal(true)}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
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

                    {/* Анимация 3: Stagger для навыков */}
                    <motion.div 
                      className="mb-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h4 className="text-success mb-3">
                        <i className="fas fa-code me-2"></i>
                        Технические навыки
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <h6 className="text-muted">Frontend</h6>
                          <div className="mb-2">
                            <motion.span variants={itemVariants} className="badge bg-primary me-1">React</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-primary me-1">JavaScript</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-primary me-1">TypeScript</motion.span>
                          </div>
                          <div className="mb-2">
                            <motion.span variants={itemVariants} className="badge bg-info me-1">HTML5</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-info me-1">CSS3</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-info me-1">Sass</motion.span>
                          </div>
                          <div className="mb-2">
                            <motion.span variants={itemVariants} className="badge bg-warning me-1">Bootstrap</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-warning me-1">Material-UI</motion.span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h6 className="text-muted">Backend & Tools</h6>
                          <div className="mb-2">
                            <motion.span variants={itemVariants} className="badge bg-secondary me-1">Node.js</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-secondary me-1">Express</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-secondary me-1">MongoDB</motion.span>
                          </div>
                          <div className="mb-2">
                            <motion.span variants={itemVariants} className="badge bg-dark me-1">Git</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-dark me-1">Docker</motion.span>
                            <motion.span variants={itemVariants} className="badge bg-dark me-1">AWS</motion.span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

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

                    {/* Анимация 6: Bounce для карточек опыта */}
                    <div className="mb-4">
                      <h4 className="text-info mb-3">
                        <i className="fas fa-briefcase me-2"></i>
                        Опыт работы
                      </h4>
                      <div className="row">
                        <div className="col-md-6">
                          <motion.div 
                            className="card border-success mb-3"
                            whileHover={{ 
                              y: -10,
                              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-2">
                                <div className="bg-success rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                                <h6 className="mb-0">Senior Frontend Developer</h6>
                              </div>
                              <p className="mb-1 text-muted">TechCorp Inc.</p>
                              <small className="text-muted">2022 - настоящее время</small>
                            </div>
                          </motion.div>
                        </div>
                        <div className="col-md-6">
                          <motion.div 
                            className="card border-primary mb-3"
                            whileHover={{ 
                              y: -10,
                              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="card-body">
                              <div className="d-flex align-items-center mb-2">
                                <div className="bg-primary rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                                <h6 className="mb-0">Frontend Developer</h6>
                              </div>
                              <p className="mb-1 text-muted">WebStudio Ltd.</p>
                              <small className="text-muted">2020 - 2022</small>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Анимация 4: Rotate + Scale на hover для достижений */}
                    <div className="mb-4">
                      <h4 className="text-danger mb-3">
                        <i className="fas fa-trophy me-2"></i>
                        Достижения
                      </h4>
                      <div className="row">
                        <div className="col-md-4">
                          <motion.div 
                            className="text-center p-3 bg-light rounded achievement-card" 
                            style={{ cursor: 'pointer' }}
                            variants={achievementVariants}
                            whileHover="hover"
                          >
                            <i className="fas fa-medal fa-2x text-warning mb-2"></i>
                            <h6>Лучший разработчик</h6>
                            <small className="text-muted">2023</small>
                          </motion.div>
                        </div>
                        <div className="col-md-4">
                          <motion.div 
                            className="text-center p-3 bg-light rounded achievement-card"
                            style={{ cursor: 'pointer' }}
                            variants={achievementVariants}
                            whileHover="hover"
                          >
                            <i className="fas fa-certificate fa-2x text-success mb-2"></i>
                            <h6>React Expert</h6>
                            <small className="text-muted">Certification</small>
                          </motion.div>
                        </div>
                        <div className="col-md-4">
                          <motion.div 
                            className="text-center p-3 bg-light rounded achievement-card"
                            style={{ cursor: 'pointer' }}
                            variants={achievementVariants}
                            whileHover="hover"
                          >
                            <i className="fas fa-star fa-2x text-primary mb-2"></i>
                            <h6>5-звездочный рейтинг</h6>
                            <small className="text-muted">Upwork</small>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Анимация 5: Drag для хобби */}
                    <div className="mb-0">
                      <h4 className="text-secondary mb-3">
                        <i className="fas fa-heart me-2"></i>
                        Хобби и интересы <small className="text-muted">(можно перетаскивать!)</small>
                      </h4>
                      <div className="d-flex flex-wrap gap-2">
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#007bff', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Фотография
                        </motion.span>
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#28a745', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Путешествия
                        </motion.span>
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#ffc107', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Спорт
                        </motion.span>
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#dc3545', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Чтение
                        </motion.span>
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#6f42c1', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Музыка
                        </motion.span>
                        <motion.span 
                          className="badge bg-light text-dark border" 
                          style={{ cursor: 'grab' }}
                          drag
                          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                          dragElastic={0.2}
                          whileHover={{ scale: 1.1, backgroundColor: '#17a2b8', color: 'white' }}
                          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
                        >
                          Готовка
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
