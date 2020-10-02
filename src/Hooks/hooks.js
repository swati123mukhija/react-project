import React, { useState, useEffect, Fragment } from 'react';
import Clock from './clock';
import useCustomcounter from './customhook';

function Example() {
  //custom hooks use
  const data = useCustomcounter();
  const data1 = useCustomcounter();
  const [count, countval] = useState(0);
  const [count1, countval1] = useState(50);

  const HandleIncrement = () =>{
    countval(count+1);
  };
  const HandleDecrement = () =>{
    countval1(count1-1);
  }
//mounted, updated,unmounted per call hogga
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  return (
    <Fragment>
    <Clock/>
      <p>count up {count} times</p>
      <button onClick={HandleIncrement}>
        count Increment
      </button>

      <p>count down {count1} times</p>
      <button onClick={HandleDecrement}>
        count Decrement
      </button>

      <p>count down {data.count} times</p>
      <button onClick={data.HandlClick}>
        countinc
      </button>
      <p>count down {data1.count} times</p>
      <button onClick={data1.HandlClick}>
        countinc1
      </button>
    </Fragment>
  );
}

export default Example;