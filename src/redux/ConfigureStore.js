import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './reducers/auth';
import { Tasks } from './reducers/tasks';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            tasks: Tasks
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
