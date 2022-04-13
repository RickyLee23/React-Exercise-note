import React, { useState } from 'react';
import './MotionCounter.css';

function MotionSelector(props:any) {
  const [times, setTimes] = useState(0);
  const [motion, setMotion] = useState('');
  const handleTimesAdjust = (action:any, amount:any) => {
    switch (action) {
      case 'plus':
        setTimes(times + amount);
        break;
      case 'minus':
        times - amount < 0 ? setTimes(0) : setTimes(times - amount);
        break;
    }
  };

  const finishThisSet = () => {
    props.saveList(motion, times);
  };

  const startNextSet = () => {
    setMotion('');
    setTimes(0);
  };

  return (
    <div className="selector__wrapper__main">
      <fieldset>
        <label>
          動作：
          <select
            id="motion"
            name="motion"
            onChange={(e) => setMotion(e.target.value)}
          >
            <option value=""></option>
            <option value="臥推">臥推</option>
            <option value="深蹲">深蹲</option>
            <option value="硬舉">硬舉</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <label>
          次數：
          {times}
          <div>
            <button onClick={() => handleTimesAdjust('plus', 1)}>plus1</button>
            <button onClick={() => handleTimesAdjust('plus', 5)}>plus5</button>
            <button onClick={() => handleTimesAdjust('plus', 10)}>
              plus10
            </button>
          </div>
          <div>
            <button onClick={() => handleTimesAdjust('minus', 1)}>
              minus1
            </button>
            <button onClick={() => handleTimesAdjust('minus', 5)}>
              minus5
            </button>
            <button onClick={() => handleTimesAdjust('minus', 10)}>
              minus10
            </button>
          </div>
        </label>
      </fieldset>
      <fieldset>
        <input type="submit" value="開始運動" />
        <input type="submit" value="完成此組" onClick={() => finishThisSet()} />
        <input type="submit" value="下個動作" onClick={() => startNextSet()} />
      </fieldset>
    </div>
  );
}

// 整個動作結束 -> 使用者點選 完成動作
export default (props:any) => {
  return (
    <div>
      <MotionSelector saveList={props.saveList} />
    </div>
  );
};
