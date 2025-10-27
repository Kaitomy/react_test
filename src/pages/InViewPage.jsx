import React, { useState, useEffect, useRef } from 'react';

const InViewPage = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Создаем Intersection Observer для отслеживания видимости элементов
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          } else {
            setVisibleElements(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3, // Элемент считается видимым при 30% видимости
        rootMargin: '0px 0px -100px 0px' // Задержка перед срабатыванием
      }
    );

    // Небольшая задержка для обеспечения готовности DOM
    const timer = setTimeout(() => {
      // Отслеживаем основные секции
      const scrollElements = document.querySelectorAll('.scroll-section');
      scrollElements.forEach(element => {
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      });
      
      // Отслеживаем дополнительные элементы
      const itemElements = document.querySelectorAll('[id^="item-"]');
      itemElements.forEach(element => {
        if (observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollSections = [
    { id: 'scroll-1', text: 'Scroll', color: '#ff0088' },
    { id: 'scroll-2', text: 'to', color: '#dd00ee' },
    { id: 'scroll-3', text: 'trigger', color: '#9911ff' },
    { id: 'scroll-4', text: 'animations!', color: '#0d63f8' }
  ];

  return (
    <div className="container-fluid p-0">
      <style jsx>{`
        .example {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .scroll-section {
          box-sizing: border-box;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px;
          position: relative;
        }

        .scroll-section:nth-child(1) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .scroll-section:nth-child(2) {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .scroll-section:nth-child(3) {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .scroll-section:nth-child(4) {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }

        .scroll-text {
          font-size: 48px;
          font-weight: bold;
          display: block;
          transform: translateX(-100px);
          opacity: 0;
          transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1);
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }

        .scroll-text.visible {
          transform: translateX(0);
          opacity: 1;
        }

        .scroll-text.hidden {
          transform: translateX(-100px);
          opacity: 0;
        }

        .scroll-indicator {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 14px;
          z-index: 1000;
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff0088, #dd00ee, #9911ff, #0d63f8);
          z-index: 1000;
          transition: width 0.3s ease;
        }
      `}</style>

      <div className="scroll-indicator">
        Видимые элементы: {visibleElements.size}/4
      </div>
      
      <div className="progress-bar" style={{ width: `${(visibleElements.size / 4) * 100}%` }}></div>

      <div className="example">
        {scrollSections.map((section, index) => (
          <section 
            key={section.id}
            id={section.id}
            className="scroll-section"
          >
            <pre 
              className={`scroll-text ${
                visibleElements.has(section.id) ? 'visible' : 'hidden'
              }`}
              style={{ color: section.color }}
            >
              {section.text}
            </pre>
          </section>
        ))}
      </div>

      {/* Дополнительные примеры */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5">Дополнительные Scroll-triggered анимации</h2>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">📊 Статистика прокрутки</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-primary text-white p-4 rounded mb-3">
                        <h3>{visibleElements.size}</h3>
                        <p className="mb-0">Видимых секций</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-success text-white p-4 rounded mb-3">
                        <h3>{Math.round((visibleElements.size / 4) * 100)}%</h3>
                        <p className="mb-0">Прогресс</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-info text-white p-4 rounded mb-3">
                        <h3>4</h3>
                        <p className="mb-0">Всего секций</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="bg-warning text-white p-4 rounded mb-3">
                        <h3>InView</h3>
                        <p className="mb-0">API</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">🎯 Элементы с анимацией появления</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="col-md-4 mb-3">
                      <div 
                        id={`item-${item}`}
                        className="card h-100"
                        style={{
                          transform: visibleElements.has(`item-${item}`) 
                            ? 'translateY(0) scale(1)' 
                            : 'translateY(50px) scale(0.9)',
                          opacity: visibleElements.has(`item-${item}`) ? 1 : 0,
                          transition: 'all 0.6s ease'
                        }}
                      >
                        <img 
                          src={`/images/${item}.jpg`} 
                          className="card-img-top" 
                          alt={`Изображение ${item}`}
                          style={{ 
                            height: '200px', 
                            objectFit: 'cover',
                            transition: 'all 0.3s ease'
                          }}
                        />
                        <div className="card-body text-center">
                          <h5>Элемент {item}</h5>
                          <p className="text-muted">
                            {visibleElements.has(`item-${item}`) 
                              ? '✅ Видим' 
                              : '👁️ Скрыт'
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">🔧 Техническая информация</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Используемые технологии:</h6>
                    <ul>
                      <li><strong>Intersection Observer API</strong> - отслеживание видимости</li>
                      <li><strong>React useState</strong> - управление состоянием</li>
                      <li><strong>CSS Transitions</strong> - плавные анимации</li>
                      <li><strong>Threshold: 0.3</strong> - срабатывание при 30% видимости</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Особенности реализации:</h6>
                    <ul>
                      <li><strong>Автоматическая очистка</strong> - disconnect при размонтировании</li>
                      <li><strong>Прогресс-бар</strong> - визуальный индикатор</li>
                      <li><strong>Статистика</strong> - количество видимых элементов</li>
                      <li><strong>Адаптивность</strong> - работает на всех устройствах</li>
                    </ul>
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

export default InViewPage;
