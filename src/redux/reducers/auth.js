import * as ActionTypes from '../ActionTypes';

const defaultState = {
    authInProgress: false,
    isAuthorized: false,
    username: null,
    id: null
};

export const Auth = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {
                authInProgress: false,
                isAuthorized: true,
                username: action.payload.username,
                id: action.payload.id
            };

        case ActionTypes.AUTH_PROGRESS:
            return {
                ...defaultState,
                authInProgress: true,
            };

        case ActionTypes.AUTH_LOGOUT:
            return defaultState;

        default:
            return state;
    }
}
