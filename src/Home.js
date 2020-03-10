import React, { useEffect }  from 'react';
import { BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
import Element from './Element';
import Grid from './Grid';
import ListNews from './pages/ListNews';
import Login from './pages/Login';
import AddNews from './pages/AddNews';
import {AuthenticationRoute} from './helpers/AuthRoute';
import DetailNews from './pages/DetailNews';

function Home(){

    useEffect( ()=> {
        const script = document.createElement("script");
        script.src = "https://use.fontawesome.com/releases/v5.3.1/js/all.js";
        script.async = false;
        document.body.appendChild(script);

        return () => {document.body.removeChild(script);}
    });

    const requiredAuth=(a, replace)=>{
        if(!localStorage.getItem('x-token')){
            replace({pathname:"/login"});
        }
    }

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <ListNews />
                </Route>
                <Route path="/grid">
                    <Grid />
                </Route>
                <Route path="/element">
                    <Element />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/news/:id">
                    <DetailNews />
                </Route>
                <AuthenticationRoute path="/add-news">
                    <AddNews />
                </AuthenticationRoute>
            </Switch>
        </Router>
    );
}

export default Home;