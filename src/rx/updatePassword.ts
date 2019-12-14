import { ActionTypes, IUpdatePasswordAction } from './actions'

export const updatePassword = (password: string): IUpdatePasswordAction => ({
  payload: password,
  type: ActionTypes.UPDATE_PASSWORD
})
