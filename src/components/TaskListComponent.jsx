import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TaskModal from './TaskModalComponent';
import { connect } from 'react-redux';
import { fetchTasks, markAsCompleted } from '../redux/actions/tasks';

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTasks: (userId) => {dispatch(fetchTasks(userId))},
    markAsCompleted: (taskId) => {dispatch(markAsCompleted(taskId))}
})

const TaskList = ({tasks, fetchTasks, user, markAsCompleted}) => {
    const [selectedTask, setSelectedTask] = useState({});
    const [showTaskModal, setShowTaskModal] = useState(false);

    useEffect(() => { fetchTasks(user.id) }, [fetchTasks, user.id])

    const columns = [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            className: "text-center",
            Header: 'Priority',
            accessor: 'priority'
        },
        {
            className: "text-center",
            Header: 'Due',
            accessor: 'due'
        },
        {
            className: "text-center",
            accessor: 'id',
            Cell: ({value}) => 
                <Button onClick={() => {
                    setSelectedTask(tasks.tasks.filter(task => task.id === value)[0]); 
                    setShowTaskModal(true);
                }}>Show</Button>
        }
    ];

    return (
        <div className="container" style={{marginTop: '50px'}}>
            <TaskModal 
                modalOpen={showTaskModal} 
                modalData={selectedTask} 
                closeModal={() => setShowTaskModal(false)} 
                markTaskAsCompleted={async () => {await markAsCompleted(selectedTask.id); fetchTasks(user.id)}}
            />
            <div className="float-right">
                <NavLink to="/new-task">
                    <Button color="success">+ New task</Button>
                </NavLink>
            </div>
            <h2>Time to get something done!</h2>
            <ReactTable 
                data={tasks.tasks} 
                loading={tasks.isLoading}
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={10}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
