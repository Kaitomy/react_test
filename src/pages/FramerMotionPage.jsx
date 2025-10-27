import React, { useState } from 'react';

const FramerMotionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Framer Motion</h2>
        </div>
      </div>

      {/* Простые анимации */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🎬 Простые анимации</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-primary text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'fade' ? 'scale(1.05)' : 'scale(1)',
                        opacity: hoveredItem === 'fade' ? 0.8 : 1
                      }}
                      onMouseEnter={() => setHoveredItem('fade')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Fade In/Out</h6>
                      <p className="mb-0">Плавное появление</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-success text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'scale' ? 'scale(1.1)' : 'scale(1)',
                        boxShadow: hoveredItem === 'scale' ? '0 8px 25px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={() => setHoveredItem('scale')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Scale</h6>
                      <p className="mb-0">Увеличение</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-warning text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'rotate' ? 'rotate(5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
                        borderRadius: hoveredItem === 'rotate' ? '20px' : '8px'
                      }}
                      onMouseEnter={() => setHoveredItem('rotate')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Rotate</h6>
                      <p className="mb-0">Поворот</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Интерактивные примеры */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🎯 Интерактивные анимации</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center mb-3">
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? 'Скрыть' : 'Показать'} карточку
                </button>
              </div>

              <div 
                className="bg-info text-white p-4 rounded text-center"
                style={{
                  transition: 'all 0.5s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                  height: isVisible ? 'auto' : '0',
                  overflow: 'hidden',
                  marginBottom: isVisible ? '1rem' : '0'
                }}
              >
                <h6>Анимированная карточка</h6>
                <p className="mb-0">Плавное появление с трансформацией</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🔄 Анимация загрузки</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <div className="spinner-border text-primary me-3" role="status">
                  <span className="visually-hidden">Загрузка...</span>
                </div>
                <span>Загрузка данных...</span>
              </div>

              <div className="progress mb-3" style={{ height: '8px' }}>
                <div 
                  className="progress-bar progress-bar-striped progress-bar-animated" 
                  role="progressbar" 
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Анимации с картинками */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🖼️ Анимации с картинками</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <img 
                      src="/images/1.jpg" 
                      alt="Анимация 1"
                      className="img-fluid rounded mb-3"
                      style={{
                        width: '200px',
                        height: '150px',
                        objectFit: 'cover',
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'image1' ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                        boxShadow: hoveredItem === 'image1' ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.2)',
                        borderRadius: hoveredItem === 'image1' ? '20px' : '8px'
                      }}
                      onMouseEnter={() => setHoveredItem('image1')}
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                    <h6>Hover эффект</h6>
                    <p className="small text-muted">Наведите на картинку</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <img 
                      src="/images/2.jpg" 
                      alt="Анимация 2"
                      className="img-fluid rounded mb-3"
                      style={{
                        width: '200px',
                        height: '150px',
                        objectFit: 'cover',
                        transition: 'all 0.4s ease',
                        transform: hoveredItem === 'image2' ? 'scale(0.9) translateY(-10px)' : 'scale(1) translateY(0)',
                        filter: hoveredItem === 'image2' ? 'brightness(1.2) saturate(1.5)' : 'brightness(1) saturate(1)',
                        borderRadius: hoveredItem === 'image2' ? '50%' : '8px'
                      }}
                      onMouseEnter={() => setHoveredItem('image2')}
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                    <h6>Фильтры + трансформация</h6>
                    <p className="small text-muted">Яркость и насыщенность</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <img 
                      src="/images/3.jpg" 
                      alt="Анимация 3"
                      className="img-fluid rounded mb-3"
                      style={{
                        width: '200px',
                        height: '150px',
                        objectFit: 'cover',
                        transition: 'all 0.5s ease',
                        transform: hoveredItem === 'image3' ? 'rotateY(180deg) scale(1.05)' : 'rotateY(0deg) scale(1)',
                        boxShadow: hoveredItem === 'image3' ? '0 15px 40px rgba(0,0,0,0.4)' : '0 4px 15px rgba(0,0,0,0.2)',
                        borderRadius: hoveredItem === 'image3' ? '0' : '8px'
                      }}
                      onMouseEnter={() => setHoveredItem('image3')}
                      onMouseLeave={() => setHoveredItem(null)}
                    />
                    <h6>3D поворот</h6>
                    <p className="small text-muted">Объемный эффект</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Сложные анимации */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🎨 Сложные анимации</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="text-center">
                    <div 
                      className="bg-gradient text-white p-4 rounded mb-3"
                      style={{
                        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                        transition: 'all 0.4s ease',
                        transform: hoveredItem === 'gradient' ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)',
                        boxShadow: hoveredItem === 'gradient' ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.2)'
                      }}
                      onMouseEnter={() => setHoveredItem('gradient')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Gradient</h6>
                      <p className="mb-0">Градиент + поворот</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <div 
                      className="bg-dark text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'slide' ? 'translateX(10px) scale(1.05)' : 'translateX(0) scale(1)',
                        boxShadow: hoveredItem === 'slide' ? '0 8px 25px rgba(0,0,0,0.4)' : '0 2px 10px rgba(0,0,0,0.2)'
                      }}
                      onMouseEnter={() => setHoveredItem('slide')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Slide</h6>
                      <p className="mb-0">Скольжение</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <div 
                      className="bg-danger text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.2s ease',
                        transform: hoveredItem === 'bounce' ? 'scale(1.2) translateY(-5px)' : 'scale(1) translateY(0)',
                        animation: hoveredItem === 'bounce' ? 'bounce 0.6s ease' : 'none'
                      }}
                      onMouseEnter={() => setHoveredItem('bounce')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Bounce</h6>
                      <p className="mb-0">Подпрыгивание</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="text-center">
                    <div 
                      className="bg-secondary text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.4s ease',
                        transform: hoveredItem === 'flip' ? 'rotateY(180deg) scale(1.1)' : 'rotateY(0deg) scale(1)',
                        boxShadow: hoveredItem === 'flip' ? '0 10px 30px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={() => setHoveredItem('flip')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>3D Flip</h6>
                      <p className="mb-0">3D поворот</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gesture Animations */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">👆 Gesture Animations</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-primary text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'tap' ? 'scale(0.95)' : 'scale(1)',
                        boxShadow: hoveredItem === 'tap' ? '0 5px 15px rgba(13, 110, 253, 0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onMouseDown={() => setHoveredItem('tap')}
                      onMouseUp={() => setHoveredItem(null)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Tap</h6>
                      <p className="mb-0">Нажмите и удерживайте</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-success text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'hover' ? 'scale(1.05) translateY(-5px)' : 'scale(1) translateY(0)',
                        boxShadow: hoveredItem === 'hover' ? '0 10px 25px rgba(25, 135, 84, 0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredItem('hover')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Hover</h6>
                      <p className="mb-0">Наведение мыши</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-warning text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'focus' ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: hoveredItem === 'focus' ? '0 0 20px rgba(255, 193, 7, 0.5)' : '0 2px 10px rgba(0,0,0,0.1)',
                        border: hoveredItem === 'focus' ? '2px solid #ffc107' : '2px solid transparent',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onFocus={() => setHoveredItem('focus')}
                      onBlur={() => setHoveredItem(null)}
                      tabIndex="0"
                    >
                      <h6>Focus</h6>
                      <p className="mb-0">Фокус (Tab)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-triggered animations */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">📜 Scroll-triggered animations</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-primary text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.5s ease',
                        transform: hoveredItem === 'scroll1' ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
                        opacity: hoveredItem === 'scroll1' ? 1 : 0.8,
                        boxShadow: hoveredItem === 'scroll1' ? '0 10px 30px rgba(13, 110, 253, 0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredItem('scroll1')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>whileInView</h6>
                      <p className="mb-0">Анимация при появлении</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-success text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.6s ease',
                        transform: hoveredItem === 'scroll2' ? 'translateX(30px) rotate(5deg)' : 'translateX(0) rotate(0deg)',
                        backgroundColor: hoveredItem === 'scroll2' ? '#198754' : '#198754',
                        borderRadius: hoveredItem === 'scroll2' ? '20px' : '8px',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredItem('scroll2')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>useInView()</h6>
                      <p className="mb-0">Хук для отслеживания</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-warning text-white p-4 rounded mb-3"
                      style={{
                        transition: 'all 0.4s ease',
                        transform: hoveredItem === 'scroll3' ? 'scale(1.1) translateY(-15px)' : 'scale(1) translateY(0)',
                        filter: hoveredItem === 'scroll3' ? 'brightness(1.2) saturate(1.3)' : 'brightness(1) saturate(1)',
                        boxShadow: hoveredItem === 'scroll3' ? '0 15px 40px rgba(255, 193, 7, 0.4)' : '0 2px 10px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredItem('scroll3')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>inView()</h6>
                      <p className="mb-0">Проверка видимости</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dragging */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🖱️ Dragging</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-center">
                    <h6>Перетаскиваемый элемент</h6>
                    <div 
                      className="bg-info text-white p-4 rounded mb-3 d-inline-block"
                      style={{
                        cursor: 'grab',
                        userSelect: 'none',
                        zIndex: 10,
                        position: 'relative',
                        transition: 'none',
                        pointerEvents: 'auto'
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const element = e.currentTarget;
                        const startX = e.clientX;
                        const startY = e.clientY;
                        const rect = element.getBoundingClientRect();
                        const startLeft = rect.left;
                        const startTop = rect.top;
                        
                        element.style.position = 'fixed';
                        element.style.cursor = 'grabbing';
                        element.style.zIndex = '1000';
                        element.style.pointerEvents = 'none';
                        
                        const handleMouseMove = (e) => {
                          e.preventDefault();
                          const deltaX = e.clientX - startX;
                          const deltaY = e.clientY - startY;
                          element.style.left = (startLeft + deltaX) + 'px';
                          element.style.top = (startTop + deltaY) + 'px';
                        };
                        
                        const handleMouseUp = () => {
                          element.style.cursor = 'grab';
                          element.style.zIndex = '10';
                          element.style.pointerEvents = 'auto';
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };
                        
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <h6>Drag Constraints</h6>
                      <p className="mb-0">Нажмите и перетащите</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="text-center">
                    <h6>Ограниченное перетаскивание</h6>
                    <div 
                      className="bg-secondary text-white p-4 rounded mb-3 d-inline-block"
                      style={{
                        cursor: 'grab',
                        userSelect: 'none',
                        zIndex: 10,
                        position: 'relative',
                        transition: 'none',
                        pointerEvents: 'auto'
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const element = e.currentTarget;
                        const startX = e.clientX;
                        const startY = e.clientY;
                        const rect = element.getBoundingClientRect();
                        const startLeft = rect.left;
                        const startTop = rect.top;
                        
                        element.style.position = 'fixed';
                        element.style.cursor = 'grabbing';
                        element.style.zIndex = '1000';
                        element.style.pointerEvents = 'none';
                        
                        const handleMouseMove = (e) => {
                          e.preventDefault();
                          const deltaX = e.clientX - startX;
                          const deltaY = e.clientY - startY;
                          
                          // Ограничения: не выходить за границы экрана
                          const maxX = window.innerWidth - element.offsetWidth;
                          const maxY = window.innerHeight - element.offsetHeight;
                          
                          const newX = Math.max(0, Math.min(maxX, startLeft + deltaX));
                          const newY = Math.max(0, Math.min(maxY, startTop + deltaY));
                          
                          element.style.left = newX + 'px';
                          element.style.top = newY + 'px';
                        };
                        
                        const handleMouseUp = () => {
                          element.style.cursor = 'grab';
                          element.style.zIndex = '10';
                          element.style.pointerEvents = 'auto';
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };
                        
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <h6>Drag Elastic</h6>
                      <p className="mb-0">С ограничениями</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row mt-3">
                <div className="col-12">
                  <div className="text-center">
                    <h6>Область для перетаскивания</h6>
                    <div 
                      className="border border-2 border-dashed p-4 rounded"
                      style={{ 
                        minHeight: '200px', 
                        position: 'relative',
                        backgroundColor: '#f8f9fa'
                      }}
                    >
                      <div 
                        className="bg-primary text-white p-3 rounded d-inline-block"
                        style={{
                          cursor: 'grab',
                          userSelect: 'none',
                          zIndex: 10,
                          position: 'absolute',
                          top: '20px',
                          left: '20px',
                          transition: 'none',
                          pointerEvents: 'auto'
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          
                          const element = e.currentTarget;
                          const startX = e.clientX;
                          const startY = e.clientY;
                          const rect = element.getBoundingClientRect();
                          const container = element.parentElement;
                          const containerRect = container.getBoundingClientRect();
                          const startLeft = rect.left - containerRect.left;
                          const startTop = rect.top - containerRect.top;
                          
                          element.style.cursor = 'grabbing';
                          element.style.zIndex = '1000';
                          element.style.pointerEvents = 'none';
                          
                          const handleMouseMove = (e) => {
                            e.preventDefault();
                            const deltaX = e.clientX - startX;
                            const deltaY = e.clientY - startY;
                            
                            // Ограничения внутри контейнера
                            const maxX = container.offsetWidth - element.offsetWidth;
                            const maxY = container.offsetHeight - element.offsetHeight;
                            
                            const newX = Math.max(0, Math.min(maxX, startLeft + deltaX));
                            const newY = Math.max(0, Math.min(maxY, startTop + deltaY));
                            
                            element.style.left = newX + 'px';
                            element.style.top = newY + 'px';
                          };
                          
                          const handleMouseUp = () => {
                            element.style.cursor = 'grab';
                            element.style.zIndex = '10';
                            element.style.pointerEvents = 'auto';
                            document.removeEventListener('mousemove', handleMouseMove);
                            document.removeEventListener('mouseup', handleMouseUp);
                          };
                          
                          document.addEventListener('mousemove', handleMouseMove);
                          document.addEventListener('mouseup', handleMouseUp);
                        }}
                      >
                        🎯 Перетащите меня!
                      </div>
                      
                      <div 
                        className="bg-success text-white p-3 rounded d-inline-block"
                        style={{
                          cursor: 'grab',
                          userSelect: 'none',
                          zIndex: 10,
                          position: 'absolute',
                          top: '80px',
                          right: '20px',
                          transition: 'none',
                          pointerEvents: 'auto'
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          
                          const element = e.currentTarget;
                          const startX = e.clientX;
                          const startY = e.clientY;
                          const rect = element.getBoundingClientRect();
                          const container = element.parentElement;
                          const containerRect = container.getBoundingClientRect();
                          const startLeft = rect.left - containerRect.left;
                          const startTop = rect.top - containerRect.top;
                          
                          element.style.cursor = 'grabbing';
                          element.style.zIndex = '1000';
                          element.style.pointerEvents = 'none';
                          
                          const handleMouseMove = (e) => {
                            e.preventDefault();
                            const deltaX = e.clientX - startX;
                            const deltaY = e.clientY - startY;
                            
                            const maxX = container.offsetWidth - element.offsetWidth;
                            const maxY = container.offsetHeight - element.offsetHeight;
                            
                            const newX = Math.max(0, Math.min(maxX, startLeft + deltaX));
                            const newY = Math.max(0, Math.min(maxY, startTop + deltaY));
                            
                            element.style.left = newX + 'px';
                            element.style.top = newY + 'px';
                          };
                          
                          const handleMouseUp = () => {
                            element.style.cursor = 'grab';
                            element.style.zIndex = '10';
                            element.style.pointerEvents = 'auto';
                            document.removeEventListener('mousemove', handleMouseMove);
                            document.removeEventListener('mouseup', handleMouseUp);
                          };
                          
                          document.addEventListener('mousemove', handleMouseMove);
                          document.addEventListener('mouseup', handleMouseUp);
                        }}
                      >
                        🚀 И меня тоже!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Animations */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">🎨 SVG Animations</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <svg width="100" height="100" className="mb-3">
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="30" 
                          fill="#007bff"
                          style={{
                            transition: 'all 0.3s ease',
                            transform: hoveredItem === 'svg1' ? 'scale(1.2)' : 'scale(1)',
                            opacity: hoveredItem === 'svg1' ? 0.8 : 1
                          }}
                          onMouseEnter={() => setHoveredItem('svg1')}
                          onMouseLeave={() => setHoveredItem(null)}
                        />
                      </svg>
                    </div>
                    <h6>Line Drawing</h6>
                    <p className="small text-muted">Рисование линий</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <svg width="100" height="100" className="mb-3">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#28a745" />
                            <stop offset="100%" stopColor="#20c997" />
                          </linearGradient>
                        </defs>
                        <rect 
                          x="20" 
                          y="20" 
                          width="60" 
                          height="60" 
                          fill="url(#gradient)"
                          style={{
                            transition: 'all 0.4s ease',
                            transform: hoveredItem === 'svg2' ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                          }}
                          onMouseEnter={() => setHoveredItem('svg2')}
                          onMouseLeave={() => setHoveredItem(null)}
                        />
                      </svg>
                    </div>
                    <h6>Gradients</h6>
                    <p className="small text-muted">Градиенты</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <svg width="100" height="100" className="mb-3">
                        <path 
                          d="M20,50 Q50,20 80,50 T140,50" 
                          stroke="#dc3545" 
                          strokeWidth="3" 
                          fill="none"
                          style={{
                            transition: 'all 0.5s ease',
                            strokeDasharray: hoveredItem === 'svg3' ? '200' : '0',
                            strokeDashoffset: hoveredItem === 'svg3' ? '0' : '200'
                          }}
                          onMouseEnter={() => setHoveredItem('svg3')}
                          onMouseLeave={() => setHoveredItem(null)}
                        />
                      </svg>
                    </div>
                    <h6>Path Morphing</h6>
                    <p className="small text-muted">Морфинг путей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные примеры */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">✨ Дополнительные примеры</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-primary text-white p-3 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'pulse' ? 'scale(1.1)' : 'scale(1)',
                        animation: hoveredItem === 'pulse' ? 'pulse 1s infinite' : 'none',
                        boxShadow: hoveredItem === 'pulse' ? '0 0 20px rgba(13, 110, 253, 0.5)' : '0 2px 10px rgba(0,0,0,0.1)'
                      }}
                      onMouseEnter={() => setHoveredItem('pulse')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Pulse</h6>
                      <p className="mb-0">Пульсация</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-success text-white p-3 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'wiggle' ? 'rotate(-5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
                        animation: hoveredItem === 'wiggle' ? 'wiggle 0.5s ease-in-out' : 'none'
                      }}
                      onMouseEnter={() => setHoveredItem('wiggle')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Wiggle</h6>
                      <p className="mb-0">Покачивание</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="bg-warning text-white p-3 rounded mb-3"
                      style={{
                        transition: 'all 0.3s ease',
                        transform: hoveredItem === 'glow' ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: hoveredItem === 'glow' ? '0 0 30px rgba(255, 193, 7, 0.8)' : '0 2px 10px rgba(0,0,0,0.1)',
                        filter: hoveredItem === 'glow' ? 'brightness(1.2)' : 'brightness(1)'
                      }}
                      onMouseEnter={() => setHoveredItem('glow')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h6>Glow</h6>
                      <p className="mb-0">Свечение</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }
        
        @keyframes keyframe1 {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }
        
        @keyframes keyframe2 {
          0% {
            transform: translateX(0) scale(1);
          }
          25% {
            transform: translateX(20px) scale(1.1);
          }
          50% {
            transform: translateX(0) scale(0.9);
          }
          75% {
            transform: translateX(-20px) scale(1.1);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes keyframe3 {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        
        @keyframes keyframe4 {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(0) rotate(180deg);
          }
          75% {
            transform: translateY(10px) rotate(270deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FramerMotionPage;
