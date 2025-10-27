import React, { useState, useEffect } from 'react';

const MapsPage = () => {
  const [mapContainer, setMapContainer] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      // Проверяем, загружен ли уже Leaflet
      if (window.L && mapContainer) {
        initMap();
        return;
      }

      // Загружаем CSS
      const existingCSS = document.querySelector('link[href*="leaflet"]');
      if (!existingCSS) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Загружаем JS
      const existingScript = document.querySelector('script[src*="leaflet"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          // Небольшая задержка для полной инициализации
          setTimeout(() => {
            if (mapContainer) {
              initMap();
            }
          }, 300);
        };
        script.onerror = () => {
          console.error('Ошибка загрузки Leaflet');
        };
        document.head.appendChild(script);
      } else {
        // Если скрипт уже загружен, инициализируем карту
        setTimeout(() => {
          if (mapContainer) {
            initMap();
          }
        }, 200);
      }
    };

    // Небольшая задержка для обеспечения готовности DOM
    const timer = setTimeout(loadMap, 100);

    return () => {
      clearTimeout(timer);
      // Очистка при размонтировании
      if (map) {
        map.remove();
      }
    };
  }, [mapContainer]);

  const initMap = () => {
    // Дополнительная проверка готовности DOM
    const mapElement = document.getElementById('map-container');
    if (!mapElement) {
      console.log('Элемент карты не найден, повторная попытка через 100мс');
      setTimeout(initMap, 100);
      return;
    }

    if (window.L && mapContainer && !map) {
      try {
        // Создаем карту
        const newMap = window.L.map('map-container').setView([55.7558, 37.6176], 10);
        
        // Добавляем слой OpenStreetMap
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: ''
        }).addTo(newMap);

        // Добавляем маркеры
        const moscow = window.L.marker([55.7558, 37.6176]).addTo(newMap);
        moscow.bindPopup('<b>Москва</b><br>Столица России').openPopup();

        const spb = window.L.marker([59.9311, 30.3609]).addTo(newMap);
        spb.bindPopup('<b>Санкт-Петербург</b><br>Культурная столица');

        const kazan = window.L.marker([55.8304, 49.0661]).addTo(newMap);
        kazan.bindPopup('<b>Казань</b><br>Столица Татарстана');

        setMap(newMap);
        console.log('Карта успешно инициализирована');
      } catch (error) {
        console.error('Ошибка инициализации карты:', error);
      }
    }
  };

  const addMarker = () => {
    if (map) {
      const lat = 55.7558 + (Math.random() - 0.5) * 0.1;
      const lng = 37.6176 + (Math.random() - 0.5) * 0.1;
      
      const marker = window.L.marker([lat, lng]).addTo(map);
      marker.bindPopup(`<b>Случайная точка</b><br>Широта: ${lat.toFixed(4)}<br>Долгота: ${lng.toFixed(4)}`);
    }
  };

  const changeLayer = (layerType) => {
    if (map) {
      // Удаляем все слои
      map.eachLayer((layer) => {
        if (layer instanceof window.L.TileLayer) {
          map.removeLayer(layer);
        }
      });

      // Добавляем новый слой
      let tileLayer;
      switch (layerType) {
        case 'satellite':
          tileLayer = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: ''
          });
          break;
        case 'terrain':
          tileLayer = window.L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: ''
          });
          break;
        default:
          tileLayer = window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
          });
      }
      
      tileLayer.addTo(map);
    }
  };

  return (
    <div>
      <style>
        {`
          .leaflet-control-attribution {
            display: none !important;
          }
        `}
      </style>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Карты Leaflet</h2>
        </div>
      </div>

      {/* Карта */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">🌍 Интерактивная карта</h5>
              <div>
                <button 
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => changeLayer('default')}
                >
                  Стандартная
                </button>
                <button 
                  className="btn btn-success btn-sm me-2"
                  onClick={() => changeLayer('satellite')}
                >
                  Спутник
                </button>
                <button 
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => changeLayer('terrain')}
                >
                  Рельеф
                </button>
                <button 
                  className="btn btn-info btn-sm"
                  onClick={addMarker}
                >
                  + Маркер
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div 
                id="map-container" 
                ref={setMapContainer}
                style={{ height: '500px', width: '100%' }}
              >
                {!map && (
                  <div className="d-flex align-items-center justify-content-center h-100 bg-light">
                    <div className="text-center">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Загрузка карты...</span>
                      </div>
                      <p className="text-muted">Загрузка карты...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsPage;
