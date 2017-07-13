import { EMAIL_CHANGED } from './types';
import { PASSWORD_CHANGED } from './types';
import { LOGIN_USER_SUCCESS } from './types';
import { LOGIN_USER_FAIL } from './types';
import { LOGIN_USER } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return{
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return{
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//       //just to sign in a user
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => {
//         dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
//       })
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(user => {
//             dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
//           });
//       });
//   };
// };
//identical as above


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    //just to sign in a user
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user){
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
};

const loginUserFail = (dispatch){
  dispatch({
    type: LOGIN_USER_FAIL
  });
}
