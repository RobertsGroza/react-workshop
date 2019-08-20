import React from 'react';
import ReactTable from 'react-table';
import { Button } from 'reactstrap';
import { TASKS } from '../shared/tasks';
import { NavLink } from 'react-router-dom';
import TaskModal from './TaskModalComponent';

const TaskList = () => {
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
            Cell: ({value}) => <Button onClick={() => console.log('Task id: ', value)}>Show</Button>
        }
    ];

    return (
        <div className="container" style={{marginTop: '50px'}}>
            <TaskModal modalOpen={false} modalData={{name: 'test', description: 'test 2', due: '2019-08-24', priority: 'high'}} />
            <div className="float-right">
                <NavLink to="/new-task">
                    <Button color="success">+ New task</Button>
                </NavLink>
            </div>
            <h2>Time to get something done!</h2>
            <ReactTable 
                data={TASKS} 
                columns={columns}
                showPageSizeOptions={false}
                defaultPageSize={10}
            />
        </div>
    )
}

export default TaskList;
