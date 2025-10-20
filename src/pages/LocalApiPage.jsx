import React, { useEffect, useState } from 'react';

const LocalApiPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/data.json')
      .then((r) => r.json())
      .then((data) => setItems(data.items || []));
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Данные из локального API</h2>
      <div className="row g-3">
        {items.map((it) => (
          <div className="col-md-6 col-lg-4" key={it.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">{it.title}</h5>
                <p className="mb-0 text-muted">{it.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalApiPage;


