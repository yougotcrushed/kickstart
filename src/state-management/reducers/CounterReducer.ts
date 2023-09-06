interface Action {
  type: string;
}
// As our component get more complex keeping track of how the state get updated can get
//  a litle bit challenging and we can use a Reducer, using a Reducer we can take all
//  the state management logic outside of a component and centralize it inside a single function

// A Reducer function should have two parameters, the first parameter is the current state and the
// second parameter is an action, an action is an object that describe what the user is trying to do.
//  A Reducer take a current state and an action and returns the new state.
const counterReducer = (state: number, action: Action): number => {
  if (action.type === "Increment") return state + 1;
  if (action.type === "Reset") return 0;
  if (action.type === "Discrement") return state > 0 ? state - 1 : 0;
  return state;
};

export default counterReducer;
