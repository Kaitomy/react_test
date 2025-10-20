import React, { useState, useEffect, useRef } from 'react';

const TopicsPage = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  // useEffect - замена componentDidMount
  useEffect(() => {
    console.log('Компонент смонтирован');
  }, []);

  // useEffect - замена componentDidUpdate
  useEffect(() => {
    console.log('Count изменился:', count);
  }, [count]);

  // useEffect - замена componentWillUnmount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => {
      console.log('Компонент размонтирован, очистка таймера');
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">Практические примеры</h2>
        </div>
      </div>

      <h2 className="mt-4">1. useState - управление состоянием</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Счетчик: {count}</h5>
              <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
                +1
              </button>
              <button className="btn btn-secondary me-2" onClick={() => setCount(count - 1)}>
                -1
              </button>
              <button className="btn btn-warning" onClick={() => setCount(0)}>
                Сброс
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">2. useEffect - жизненный цикл</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Таймер: {timer} сек</h5>
              <p className="text-muted">Таймер запускается при монтировании и очищается при размонтировании</p>
              <p className="text-muted">Откройте консоль для просмотра логов жизненного цикла</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-4">3. useEffect с зависимостями</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Счетчик изменился {count} раз</h5>
              <p className="text-muted">useEffect срабатывает каждый раз при изменении count</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
