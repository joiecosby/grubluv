import React, { ReactElement, PropsWithChildren } from 'react';
import Todo from '../core/Todo';
import HomePage from '../core/HomePage';

type Props = {
  title: string;
};

const tabToComponentMap = new Map<any, any>([
  ['Home', 'test'],
  ['To Do List', <Todo />],
  ['Recipes', 'value2'],
]);

const Tab: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  console.log('child within Tab:', children);
  const componentToRender = tabToComponentMap.get(children);
  return <div>{componentToRender}</div>;
};

export default Tab;
