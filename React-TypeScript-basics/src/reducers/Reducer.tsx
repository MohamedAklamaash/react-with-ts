import { useReducer } from "react";

type initialState = {
  count: number;
};

type actionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const reducer = (state: initialState, action: actionType): initialState => {
  switch (action.type) {
    case "Increment":
        return {count:state.count + action.payload}
    case "Decrement":
        return {count:state.count - action.payload}
    default:
      return state;
  }
};

let initialState = { count: 0 };

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };
  const decrement = () => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>{state.count}</p>
    </div>
  );
};

export default Reducer;
