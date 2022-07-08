import React from 'react';
import './index.scss';

interface IException {}

const Exception: React.FC<IException> = () => {
  return <div className="exception">404</div>;
};

export default Exception;
