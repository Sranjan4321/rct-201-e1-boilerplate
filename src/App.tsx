import React from 'react';
import './App.css';
import Clock from './components/Clock';
import List1 from './components/List1';
import List2 from './components/List2';
import useClock from './hooks/useClock';
import { Props } from './components/Clock';
import useNumberList from './hooks/useNumberList';
function App() {
  const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
    useNumberList([]);
  let date = new Date();
  const { hours, minutes, seconds } = useClock(date);
  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      <List1
        list={list}
        appendStart={appendStart}
        appendEnd={appendEnd}
        popStart={popStart}
        popEnd={popEnd}
        clear={clear}
        reset={reset}
      />
      <List2 />
      {/* Clock */}
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
