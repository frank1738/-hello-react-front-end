import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case 'load':
      state = action.playload;
      return state;

    default:
      return state;
  }
};

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/greetings');
  const data = await response.json();
  dispatch({ type: 'load', playload: data });
};

export const store = createStore(greetingReducer, applyMiddleware(thunk));
