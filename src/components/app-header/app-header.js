// компонент для вывода кол-ва оставшихся и выполненных задач
import React from 'react';
import './app-header.scss';

const AppHeader = ({ done, todo }) => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">Todo List</h1>
      <h2 className="app-header__subtitle">
        {todo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
