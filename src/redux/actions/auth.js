import * as ActionTypes from '../ActionTypes';
import { BackendUrl } from '../../shared/backendUrl';
import history from '../../history';

export const logIn = (username) => async (dispatch) => {
    dispatch(authInProgress(true));

    let response = await fetch(BackendUrl + '/users');
    let users = await response.json();
    let user = users.filter(user => user.username === username)[0];

    if (user) {
        dispatch(authorize(user));
        history.push('/');
    } else {
        alert('Mēģiniet vēlreiz!');
    }
}

export const authInProgress = () => ({
    type: ActionTypes.AUTH_PROGRESS
});

export const logOut = () => ({
    type: ActionTypes.AUTH_LOGOUT
});

export const authorize = (user) => ({
    type: ActionTypes.AUTH_SUCCESS,
    payload: user
});
