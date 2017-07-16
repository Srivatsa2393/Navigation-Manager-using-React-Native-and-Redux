import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';
import { EMPLOYEE_CREATE } from './types';
import { EMPLOYEES_FETCH_SUCCESS } from './types';
import { EMPLOYEE_SAVE_SUCCESS } from './types';
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

export const employeesFetch = () => {

  const { currentUser } = firebase.auth();
  //Asyncronous action as we need to fetch data from firebase
  //again use redux thunk and again use ref as above on how to store data
  //snapshot is not the actual data it is the object that describes the actual data
  return(dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const employeeSave = ({ name, phone, shift, uid }) => {
  //saving an employee id is required we must specify the employee bu his id
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' })
      });
  };
};
