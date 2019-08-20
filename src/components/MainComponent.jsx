import React from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import TaskList from './TaskListComponent';
import Home from './HomeComponent';
import NewTask from './NewTaskComponent';
import Login from './LoginComponent';

const ProtectedRoute = ({ component: Component, ...rest }) => 
    <Route {...rest} render={ props => true ? <Component {...props}/> : <Redirect to="/home" /> } />

const Main = () => 
    <>
        <Header />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/todo-list" component={TaskList}/>} />
            <ProtectedRoute exact path="/new-task" component={NewTask}/>} />
            <Redirect to="/home" />
        </Switch>
    </>

export default Main;
