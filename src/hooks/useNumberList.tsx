const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = usState(initialArray);
  // const appendStart = () => {
  //   setList(list[0]);
  // };
  // const appendEnd = () => {
  //   setList(list.pop());
  // };
  // const popStart = () => {
  //   setList(list.shift());
  // };
  // const popEnd = () => {};
  // const clear = () => {};
  // const reset = () => {};
  return {
    // list,
    // appendStart,
    // appendEnd,
    // popStart,
    // popEnd,
    // clear,
    // reset,
  };
};

export default useNumberList;
function usState(initialArray: number[]): [any, any] {
  throw new Error('Function not implemented.');
}
