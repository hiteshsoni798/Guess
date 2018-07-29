import {VALUE,STATE,PASSWORD} from './actions';

export const value = (value) => ({
    type : VALUE,
    payload : value
  })

export const state = (state) => ({
  type : STATE,
  payload : state
})

export const password = (password) => ({
  type : PASSWORD,
  payload : password
})
