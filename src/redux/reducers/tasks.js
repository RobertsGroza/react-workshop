import * as ActionTypes from '../ActionTypes';

const defaultState = {
    isLoading: false,
    tasks: []
};

export const Tasks = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.TASK_LOAD_SUCCESS:
            return {
                isLoading: false,
                tasks: action.payload
            };

        case ActionTypes.TASKS_LOADING:
            return {
                isLoading: true,
                tasks: []
            };

        case ActionTypes.TASK_MARKED_AS_COMPLETED:
                return {
                    isLoading: true,
                    tasks: []
                };

        case ActionTypes.TASK_SUBMITTED:
                return {
                    isLoading: true,
                    tasks: []
                };

        default:
            return state;
    }
}
