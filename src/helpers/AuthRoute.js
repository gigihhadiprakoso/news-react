import React from 'react';
import {Route,Redirect,useHistory} from 'react-router-dom';

export function AuthenticationRoute({children, ...rest}){
    return(
        <Route
            {...rest}
            render={({ location }) =>
            localStorage.getItem('x-token') ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
            }
        />
    );
}

export function AuthenticatedRoute({children, ...rest}){
    return(
        <p></p>
    );
}