import React from 'react';

type Props = {
  title: string;
  found?: false;
  index: number;
  setSelectedTab: (index: number) => void;
};

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  console.log('title:', title);
  console.log('index:', index);

  return (
    <li>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  );
};

export default TabTitle;
