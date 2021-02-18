import React from 'react';
import './app-header.scss';

const AppHeader = () => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">Todo List</h1>
      <h2 className="app-header__subtitle">1 more to do, 2 done</h2>
    </div>
  );
};

export default AppHeader;
