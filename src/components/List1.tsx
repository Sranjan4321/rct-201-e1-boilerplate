import React, { useState } from 'react';
import useNumberList from '../hooks/useNumberList';

type List1Props = {
  // TODO
  props: Number[];
};
const List1 = (props: List1Props) => {
  let [val, setVal] = useState<HTMLInputElement | Number[] | any>(0);
  // const { list, appendStart, appendEnd, popStart, popEnd, clear, reset } =
  //   useNumberList(val);
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{/* Each element in a list */}</div>

      <input
        data-testid="list1-input"
        onChange={(e) => setVal(e.target.value)}
      />
      <button data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
      </button>
      <button data-testid="list1-btn-pop-end">
        {/* po last element btn */}
      </button>
      <button data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
      </button>
      <button data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}
      </button>
    </div>
  );
};

export default List1;
