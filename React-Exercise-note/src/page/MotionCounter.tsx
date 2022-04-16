import React, { useState, useRef } from 'react';
import './MotionCounter.css';
import { exerciseBodyPart, exerciseItem } from '../mockData/exerciseItem';

function MotionSelector(props:any) {
  const [isStart, setIsStart] = useState(false)
  const [times, setTimes] = useState(0);
  const [motion, setMotion] = useState('');
  const [filterItem, setFilterItem] = useState('');
  const inputMotionRef:any = useRef();

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
    if (!motion || times === 0) { return };
    props.saveList(motion, times);
  };

  const startThisSet = () => {
    if (!motion || !times) { return }
    setIsStart(true)
  }

  const startNextSet = () => {
    clearUserSetting()
    setIsStart(false)
  };

  const handleMotionFilter = (motionInfos:any) => {
    setMotion('')
    setFilterItem(motionInfos)
    inputMotionRef.current = ''
  }

  const clearUserSetting = () => {
    setTimes(0);
    setFilterItem('')
    setMotion('')
    inputMotionRef.current = ''
  }

  const getExerciseItem = () => {
    if (!filterItem) {
      return exerciseItem
    }
    return exerciseItem.filter(item => item.bodyPart === filterItem)
  }

  return (
    <div className="selector__wrapper__main">
      <fieldset>
        <label>
        動作：
          <select
            id="bodyPart"
            name="bodyPart"
            value={filterItem}
            onChange={(e) => handleMotionFilter(e.target.value)}>
            <option value=""></option>
            {
              Object.keys(exerciseBodyPart).filter(
                key => Number.isNaN(Number(key))).map(
                (item, index) => <option key={index} >{item}</option>
              )
            }
          </select>
          <select
            id="motion"
            name="motion"
            ref={inputMotionRef}
            value={motion}
            onChange={(e) => setMotion(e.target.value)}
          >
            <option value=""></option>
            {
              getExerciseItem().map(
                (item, index) => <option key={index} value={item.name}>{item.name}</option>
              )
            }
          </select>
        </label>
      </fieldset>
      <fieldset>
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
      </fieldset>
      <fieldset>
        {
          !isStart && <input type="submit" value="開始運動" onClick={() => startThisSet()}/>
        }
        {
          isStart && <input type="submit" value="完成此組" onClick={() => finishThisSet()} />
        }
        <input type="submit" value="下個動作" onClick={() => startNextSet()} />
      </fieldset>
    </div>
  );
}

export default (props:any) => {
  return (
    <div>
      <MotionSelector saveList={props.saveList} />
    </div>
  );
};
