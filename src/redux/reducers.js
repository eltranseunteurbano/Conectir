import { actions } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
      break;


    case actions.registerStudentRequest:
      return {
        ...state,
        user: action.payload,
      };
      break;

    case actions.checkStepCurrent:
      return {
        ...state,
        process: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;