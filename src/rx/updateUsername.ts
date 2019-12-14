import { ActionTypes, IUpdateUsernameAction } from './actions'

export const updateUsername = (username: string): IUpdateUsernameAction => ({
  payload: username,
  type: ActionTypes.UPDATE_USERNAME
})
