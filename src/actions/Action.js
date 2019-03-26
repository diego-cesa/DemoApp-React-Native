export const UPDATE_KEY = "UPDATE_KEY";

export function updateKey(key, value) {
    return(dispatch)=> {
        dispatch({
            type: UPDATE_KEY,
            payload:{[key]: value}
        });
    }
}