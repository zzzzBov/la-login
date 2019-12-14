import { ActionTypes } from './ActionTypes'
import { IAction } from './IAction'

export interface IUpdatePasswordAction extends IAction<
  ActionTypes.UPDATE_PASSWORD,
  string
> { }
