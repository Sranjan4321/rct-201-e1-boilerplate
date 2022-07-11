import React from 'react';
import { JsxEmit } from 'typescript';

export type Props = {
  getHours: Function;
  getMinutes: Function;
  getSeconds: Function;

  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = (props: any) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">{/* Label */}</h4>
      <span data-testid="clock-hours">{props.hours}</span>:
      <span data-testid="clock-minutes">{props.minutes}</span>:
      <span data-testid="clock-seconds">{props.seconds}</span>
    </div>
  );
};

export default Clock;
