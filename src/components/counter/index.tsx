import { useState } from 'react';
import { Button } from 'antd';
import './index.scss';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <div className={'count'}>{count}</div>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  );
}

export default Counter;
