import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';
import { EMPLOYEE_CREATE } from './types';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = ({ prop, value }) => {
  return{
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  //console.log(name, phone, shift);
  //we need to get access to the currently authenticated user we need their userId
  const { currentUser } = firebase.auth();

  //just wrapping this in the redux thunk no dipatch method is called
  return(dispatch) =>{
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift }) //new data is pushed
      .then(() =>{
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' })
      });
  };

};
