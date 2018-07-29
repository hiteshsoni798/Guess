import {VALUE,STATE,PASSWORD} from './actions';

export function value (value) {
  return {
    type : VALUE,
    payload : value
  }
}

export const state = (state) => ({
  type : STATE,
  payload : state
})

export const password = (password) => ({
  type : PASSWORD,
  payload : password
})
