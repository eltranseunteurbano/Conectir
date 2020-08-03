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

    case actions.setUserInformation:
      return {
        ...state,
        user: action.payload,
      }
      break;

    case actions.isComprobateLogin:
      return {
        ...state,
        isComprobateLogin: action.payload,
      };
      break;

    case actions.goToUrl:
      return {
        ...state,
        goToUrl: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;