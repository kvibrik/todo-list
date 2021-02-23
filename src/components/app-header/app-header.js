// компонент для вывода кол-ва оставшихся и выполненных задач
import { observer } from 'mobx-react';
import React from 'react';
import './app-header.scss';

const AppHeader = observer(({ store }) => {
  const { todoCount, doneCount } = store;

  return (
    <div className="app-header">
      <h1 className="app-header__title">Todo List</h1>
      <h2 className="app-header__subtitle">
        {todoCount} more to do, {doneCount} done
      </h2>
    </div>
  );
});

export default AppHeader;
