import { CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA } from '../action/type';

const defaultState = {
    inputValue: '',
    dataObj: []
};

export default (state = defaultState, action) => {
    switch (action.type){

        case CHANGE_INPUT_INPUTVALUE: {
            const newState = Object.assign(state);
            newState.inputValue = action.value;
            return newState;
        }

        case ADD_TODO_ITEM: {
            const newState = Object.assign(state);
            newState.dataObj.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        }

        case DEL_DATA: {
            const newState = Object.assign(state);
            newState.dataObj.splice(action.idnex,1);
            return newState;
        }

        default: {
            return state;
        }
        
    }
}