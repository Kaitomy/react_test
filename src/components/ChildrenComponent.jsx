import React from 'react';

const ChildrenComponent = ({ name, text, children }) => {
  return (
    <div style={{ border: "2px solid teal", padding: "10px", marginTop: "15px", borderRadius: "10px" }}>
      <h2>Дочерний компонент</h2>
      <p>Привет, {name} 👋</p>
      <p>{text}</p>
      <div>{children}</div>
    </div>
  );
};

export default ChildrenComponent;
