import { ActionTypes } from './ActionTypes'
import { IAction } from './IAction'

export interface IUpdateUsernameAction extends IAction<
  ActionTypes.UPDATE_USERNAME,
  string
> { }
