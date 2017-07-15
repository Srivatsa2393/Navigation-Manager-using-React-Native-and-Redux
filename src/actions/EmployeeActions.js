import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';


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

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift }); //new data is pushed
};
