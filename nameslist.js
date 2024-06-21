
import { useState } from 'react';

function useNameCaller(initialNames) {
  
  const [names, setNames] = useState(initialNames);

  
  const callOutName = (index) => {
    if (index >= 0 && index < names.length) {
      console.log(`Calling out: ${names[index]}`);
    } else {
      console.log('not available');
    }
  };

  return { names, callOutName };
}

export default useNameCaller;
