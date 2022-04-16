import FunctionSelector from './page/FunctionSelector';
import MotionCounter from './page/MotionCounter';
import './style.css';
import React, { useState } from 'react';

function App() {
  const [list, setList]:any[] = useState([]);
  const saveList = (motion:string, times:number) => {
    console.log(motion, times);
    setList([
      ...list,
      {
        motion: motion,
        times: times,
      },
    ]);
  };

  return (
    <div className="app__wrapper">
      <div className="functions__wrapper">
        <FunctionSelector />
      </div>
      <div className="selector__wrapper">
        <MotionCounter saveList={saveList} />
        <span>
          {list.map((i:any) => (
            <div>
              {i.motion} : {i.times}
            </div>
          ))}
        </span>
      </div>
    </div>
  );
}

export default App;
