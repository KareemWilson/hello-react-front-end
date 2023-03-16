import axios from 'axios';

const GET_GREETING = 'GET_GREETING';
const URL = 'http://localhost:3002';
const initialState = [];

export const getGreeting = () => async (dispatch) => {
  const res = await axios(`${URL}/api/v1/messages/random`);
  const { greeting } = res.data;
  console.log('from action created', greeting);
  dispatch({
    type: GET_GREETING,
    payload: greeting,
  });
};

export const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};
