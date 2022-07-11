import { useEffect, useState } from 'react';
import { Props } from '../components/Clock';

const useClock = (date: Props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const Hours = date.getHours();
  const Minute = date.getMinutes();
  const Seconds = date.getSeconds();
  useEffect(() => {
    setMinutes(Minute);
    setHours(Hours);
    setSeconds(Seconds);
  }, []);
  setInterval(() => {
    if (Seconds == 60) {
      setMinutes(Minute);
    } else if (Minute == 60) {
      setHours(Hours);
    }
    setSeconds(Seconds);
  }, 1000);
  // TODO
  // refer readme.md for what to return
  return { hours, minutes, seconds };
};

export default useClock;
