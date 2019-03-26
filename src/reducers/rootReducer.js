import { UPDATE_KEY } from '../actions/Action';

export const initialState = {
    name: ''
};

const rootReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch(action.type){
        case UPDATE_KEY:
            let ChangedState = {};
            for(let key in action.payload) {
                ChangedState = {[key]: action.payload[key]};
            }

            newState = Object.assign({}, state, ChangedState);
            break;
        default: return initialState;
    }

    return newState;
}

export default rootReducer;