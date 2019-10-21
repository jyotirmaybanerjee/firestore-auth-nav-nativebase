// @flow
// import * as firebase from "firebase";

const TRANSACTION_UPDATE = '@@transaction/TRANSACTION_UPDATE';
const TRANSACTION_CREATE = '@@transaction/TRANSACTION_CREATE';
const TRANSACTION_FETCH_SUCCESS = '@@transaction/TRANSACTION_FETCH_SUCCESS';
const TRANSACTION_SAVE_SUCCESS = '@@transaction/TRANSACTION_SAVE_SUCCESS';

const transactionUpdate = ({ prop, value }) => {
  return {
    type: TRANSACTION_UPDATE,
    payload: { prop, value }
  };
};

const transactionCreate = ({ name, phone, shift }) => {
  // const { currentUser } = firebase.auth();
  // return (dispatch) => {
  //     firebase.database().ref(`/users/${currentUser.uid}/transactions`)
  //         .push({ name, phone, shift })
  //         .then(() => {
  //             dispatch({ type: TRANSACTION_CREATE });
  //             Actions.transactionList({ type: 'reset' });
  //         });
  // };
};

const transactionsFetch = () => {
  // const { currentUser } = firebase.auth();
  // return (dispatch) => {
  //     firebase.database().ref(`/users/${currentUser.uid}/transactions`)
  //     .on('value', snapshot => {
  //         dispatch({ type: TRANSACTION_FETCH_SUCCESS, payload: snapshot.val() });
  //     });
  // };
};

export const transactionSave = ({ name, phone, shift, uid }) => {
  // const { currentUser } = firebase.auth();
  // return (dispatch) => {
  //     firebase.database().ref(`/users/${currentUser.uid}/transactions/${uid}`)
  //     .set({ name, phone, shift })
  //     .then(() => {
  //         dispatch({ type: TRANSACTION_SAVE_SUCCESS });
  //         Actions.transactionList({ type: 'reset' });
  //     });
  // };
};

export const transactionDelete = ({ uid }) => {
  // const { currentUser } = firebase.auth();
  // return () => {
  //     firebase.database().ref(`/users/${currentUser.uid}/transactions/${uid}`)
  //     .remove()
  //     .then(() => {
  //         Actions.transactionList({ type: 'reset' });
  //     });
  // };
};

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

function reducer(state: Object = INITIAL_STATE, action: Object): Object {
  switch (action.type) {
    case TRANSACTION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TRANSACTION_CREATE:
      return INITIAL_STATE;
    case TRANSACTION_SAVE_SUCCESS:
      return INITIAL_STATE;
    case TRANSACTION_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

const actionCreators = {
  transactionUpdate,
  transactionCreate,
  transactionsFetch,
  transactionSave,
  transactionDelete
};

const actionTypes = {
  TRANSACTION_UPDATE,
  TRANSACTION_CREATE,
  TRANSACTION_SAVE_SUCCESS,
  TRANSACTION_FETCH_SUCCESS
};

export { actionCreators, actionTypes };

export default reducer;
