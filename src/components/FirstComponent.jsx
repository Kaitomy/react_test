import React from 'react';
import logo from '../logo.svg';
import ChildrenComponent from './ChildrenComponent';

const FirstComponent = () => {
  const userName = "Алиса";
  const message = "Добро пожаловать в мир React!";

  return (
    <div>
      <h1>Первый компонент</h1>
      <p>Это мой первый компонент</p>
      <img src={logo} className="App-logo" alt="logo" />

      {/* Передаём props в дочерний компонент */}
      <ChildrenComponent name={userName} text={message}>
        <p style={{ color: "purple" }}>А это — переданный children!</p>
      </ChildrenComponent>
      <ChildrenComponent name="Ксюша" text="Приветик">
        <p style={{ color: "purple" }}>А это — переданный children!</p>
      </ChildrenComponent>
    </div>
  );
};

export default FirstComponent;
