const initialCounterState = { value: 0 };

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 }; // Fixed this line
    case "RESET":
      return { ...state, value: 0 };
    default:
      return state;
  }
};

export default counterReducer;
