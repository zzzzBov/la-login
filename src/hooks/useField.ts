import {
  useCallback,
  useReducer,
  Reducer
} from 'react'

interface IValidators<Value> {
  [validator: string]: (value: Value) => boolean
}

interface IFieldValidation {
  [validator: string]: boolean
}

interface IFieldData<Value> {
  clean (): void
  dirty: boolean
  error: boolean
  reset (): void
  set (value: Value): void
  touch (): void
  valid: boolean
  validation: IFieldValidation
  value: Value
}

interface IFieldState<Value> {
  dirty: boolean
  value: Value
}

enum ActionTypes {
  CLEAN = 'CLEAN',
  RESET = 'RESET',
  SET = 'SET',
  TOUCH = 'TOUCH'
}

interface IAction<
  Type extends string = string,
  Payload = undefined,
  Meta = undefined
  > {
  error?: boolean
  meta?: Meta
  payload?: Payload
  type: Type
}

interface ICleanAction extends IAction<ActionTypes.CLEAN> {}
interface IResetAction<Value> extends IAction<ActionTypes.RESET, Value> {}
interface ISetAction<Value> extends IAction<ActionTypes.SET, Value> {}
interface ITouchAction extends IAction<ActionTypes.TOUCH> {}

type Action<Value> =
  ICleanAction
  | IResetAction<Value>
  | ISetAction<Value>
  | ITouchAction

const fieldReducer = <Value>(state: IFieldState<Value>, action: Action<Value>): IFieldState<Value> => {
  switch (action.type) {
    case ActionTypes.CLEAN:
      return {
        ...state,
        dirty: false
      }
    case ActionTypes.RESET:
      return {
        dirty: false,
        value: action.payload != null ? action.payload : state.value
      }
    case ActionTypes.SET:
      return {
        ...state,
        value: action.payload != null ? action.payload : state.value
      }
    case ActionTypes.TOUCH:
      return {
        ...state,
        dirty: true
      }
    default:
      return state
  }
}

const createCleanAction = (): ICleanAction => ({
  type: ActionTypes.CLEAN
})

const createResetAction = <Value>(initial: Value): IResetAction<Value> => ({
  payload: initial,
  type: ActionTypes.RESET
})

const createSetAction = <Value>(value: Value): ISetAction<Value> => ({
  payload: value,
  type: ActionTypes.SET
})

const createTouchAction = (): ITouchAction => ({
  type: ActionTypes.TOUCH
})

export const useField = <Value>(validators: IValidators<Value>, initialValue: Value): IFieldData<Value> => {
  const [
    {
      dirty,
      value
    },
    dispatch
  ] = useReducer<Reducer<IFieldState<Value>, Action<Value>>>(fieldReducer, {
    dirty: false,
    value: initialValue
  })

  const clean = useCallback(() => {
    dispatch(createCleanAction())
  }, [])

  const reset = useCallback(() => {
    dispatch(createResetAction(initialValue))
  }, [initialValue])

  const set = useCallback((value: Value) => {
    dispatch(createSetAction(value))
  }, [])

  const touch = useCallback(() => {
    dispatch(createTouchAction())
  }, [])

  const validationEntries = 
    Object
      .entries(validators)
      .map(([key, validator]) => [key, validator(value)])

  const validation = Object.fromEntries(validationEntries)

  const valid = validationEntries.every(([key, valid]) => valid)

  const error = dirty && !valid

  return {
    clean,
    dirty,
    error,
    reset,
    set,
    touch,
    valid,
    validation,
    value
  }
}