import { EMPLOYEES_FETCH_SUCCESS } from 'actions/type';

const INITIAL_STATE = {};

export default (state = '', action) => {
  switch(action.type){

    case EMPLOYEES_FETCH_SUCCESS:
      //console.log(action);
      return action.payloads;

    default:
      return state;
  }
};
