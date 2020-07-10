import { actions } from './actions';

const reducer = (state, action) => {
  switch(action.type) {
    case actions.loginRequest:
      return {
        ...state,
        user: { 'uid': action.payload.uid, 'email': action.payload.email },
      };

    case actions.registerStudentRequest:
      return {
        ...state,
        user: { 'uid': action.payload.uid, 'email': action.payload.email },
      };

      default:
        return state;
  }
};

export default reducer;