import React, { ReactElement, PropsWithChildren } from 'react';
import Todo from '../core/Todo';

type Props = {
  title: string;
  found?: false;
};

const tabToComponentMap = new Map<any, any>([
  ['test', <Todo />],
  ['key2', 'value2'],
]);

const Tab: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  console.log('child within Tab:', children);
  const testVariable = tabToComponentMap.get(children);
  console.log('tabToComponentMap:', tabToComponentMap.has(children));
  console.log('testVariable:', testVariable);

  return <div>{testVariable}</div>;
};

export default Tab;
