import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null };

export default (state= INITIAL_STATE, action) => {
console.log(action);

  switch (action.type){
    case EMAIL_CHANGED:
      //console.log('action!');
      //state.email = action.payload(this cannot be done)
      //return state(this cannot be done)
      return { ...state, email: action.payload };

      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };

      case LOGIN_USER_SUCCESS:
        return { ...state, user: action.payload };

    default:
      return state;
  }
};
