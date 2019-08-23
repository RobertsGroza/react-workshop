import * as ActionTypes from '../ActionTypes';
import { BackendUrl } from '../../shared/backendUrl';
import history from '../../history';

export const fetchTasks = (userId) => async (dispatch) => {
    dispatch(tasksLoading(true));

    let response = await fetch(BackendUrl + '/tasks');
    let tasks = await response.json();
    tasks = tasks.filter(task => task.user === userId && task.completed === false);

    dispatch(tasksSuccess(tasks));
}

export const tasksLoading = () => ({
    type: ActionTypes.TASKS_LOADING
});

export const tasksSuccess = (tasks) => ({
    type: ActionTypes.TASK_LOAD_SUCCESS,
    payload: tasks
});

export const taskSubmitted = () => ({
    type: ActionTypes.TASK_SUBMITTED
});

export const taskMarkedAsCompleted = () => ({
    type: ActionTypes.TASK_MARKED_AS_COMPLETED
});

// Post task method
export const postTask = (task, userId) => async (dispatch) => {
    const newTask = {...task, completed: false, user: userId};

    await fetch(
        BackendUrl + '/tasks', 
        {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }
    );

    dispatch(taskSubmitted());

    history.push('/todo-list');
}

// Path task method
export const markAsCompleted = (taskId) => async (dispatch) => {

    await fetch(
        BackendUrl + `/tasks/${taskId}`, 
        {
            method: 'PATCH',
            body: '{"completed": true}',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }
    );

    dispatch(taskMarkedAsCompleted());

    history.push('/todo-list');
}
