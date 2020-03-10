import React from 'react';
import { Router, hashHistory, Route, browserHistory, HashRouter  } from 'react-router-dom';
import Login from './pages/Login';
import App from './App';

function Register(){
    return(
        <HashRouter>
            <Route path="/login" component={Login}/>
            <Route path="/app" component={App} />
        </HashRouter>
    );
}

export default Register;