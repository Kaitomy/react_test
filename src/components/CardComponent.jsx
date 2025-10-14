import React from 'react';

const CardComponent = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="card h-100 shadow">
      <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={imageAlt}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href="#" className="btn btn-primary mt-auto">Подробнее</a>
      </div>
    </div>
  );
};

export default CardComponent;
