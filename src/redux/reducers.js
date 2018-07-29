import {
          VALUE,
          PASSWORD,
          STATE
       } from './actions';

const DEFAULT_STATE = {
  value : '',
  password: '',
  state:'CONTINUE'
};

const setValue =  (state, action) => (Object.assign({},state, {value : action.payload}))
const setPassword = (state, action) => (Object.assign({}, state, {password : action.payload}))
const setState = (state, action) => (Object.assign({}, state, {state : action.payload}))

const rootReducers = (state = DEFAULT_STATE, action ) => {
  switch (action.type) {
    case VALUE :
      return setValue(state, action);
    case PASSWORD :
      return setPassword(state, action);
    case 'STATE':
      return setState(state, action);
    default:
      return state;

  }
}

export default rootReducers
