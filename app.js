
import React from 'react';
import useNameCaller from './nameslist';

function NameCallerComponent() {
  const { names, callOutName } = useNameCaller(['Alice', 'Bob', 'Charlie']);

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index} onClick={() => callOutName(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameCallerComponent;
