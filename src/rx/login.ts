import { Reducer } from 'react'
import { ActionTypes, IAction, IUpdatePasswordAction, IUpdateUsernameAction } from './actions'

export interface ILoginState {
  password: string
  username: string
}

type ILoginAction =
  IAction
    | IUpdateUsernameAction
    | IUpdatePasswordAction

export const loginReducer: Reducer<ILoginState, ILoginAction> = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload || ''
      }
    case ActionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload || ''
      }
    default:
      return state
  }
}
