import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state= INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
      //console.log('action!');
      //state.email = action.payload(this cannot be done)
      //return state(this cannot be done)
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
