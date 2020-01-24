import { FETCHING_SMURFS_START, FETCHING_DATA_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    smurfs: []
};

export const SmurfReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type){
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        default:
            return state
    }
}