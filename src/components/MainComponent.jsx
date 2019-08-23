import React from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import TaskList from './TaskListComponent';
import Home from './HomeComponent';
import NewTask from './NewTaskComponent';
import Login from './LoginComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        user: state.auth
    }
}

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => 
    <Route {...rest} render={ props => isAuthenticated ? <Component {...props}/> : <Redirect to="/home" /> } />

const Main = (props) => {

    const isAuthenticated = props.user.username ? true : false;

    return <>
        <Header isAuthenticated={isAuthenticated} />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/todo-list" component={TaskList} isAuthenticated={isAuthenticated}/>} />
            <ProtectedRoute exact path="/new-task" component={NewTask} isAuthenticated={isAuthenticated}/>} />
            <Redirect to="/home" />
        </Switch>
    </>
}

export default connect(mapStateToProps)(Main);
