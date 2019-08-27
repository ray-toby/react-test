import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA } from './type';

export const getInputChangeAction = (value) => ({
    type:  CHANGE_INPUT_INPUTVALUE,
    value
})

export const getAddTodoItem = () => ({
    type:  ADD_TODO_ITEM,
})

export const getDelData = (index) => ({
    type:  DEL_DATA,
    index
})