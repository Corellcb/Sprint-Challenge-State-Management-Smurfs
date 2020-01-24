import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';

export const fetchSmurfs = smurfs => {
    console.log(smurfs);
    return dispatch => {
        dispatch({ type: FETCHING_SMURFS_START })
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }
};