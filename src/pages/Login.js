import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.css';
import {Container, Field,Box} from 'bloomer';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Button } from 'bloomer/lib/elements/Button';
import { Title } from 'bloomer/lib/elements/Title';
import {apiLogin} from '../helpers/AxiosMaster';
import { useHistory } from 'react-router-dom';

function Login(){
    let history = useHistory();
    const [state, setState] = useState({
        isLoggedIn:localStorage.getItem('isLoggedIn'),
        loginAttr:{
            username:'',
            password:''
        }
    });

    const requestForm = {
        'username':state.loginAttr.username,
        'password':state.loginAttr.password
    };

    const loginProcess=()=>{
        apiLogin.post('login',requestForm)
            .then(res=>{
                if(res.status==200){
                    localStorage.setItem('isLoggedIn',true);
                    localStorage.setItem('x-token',res.data.meta.token);
                    setState({
                        ...state,
                        isLoggedIn:true
                    });
                    history.push("/");
                }
            })
            .catch((err) => {
                console.log(err)
            });
    };

    const setUsername=(val)=>{
        setState(
            {
                ...state,
                loginAttr:{
                    username:val,
                    password:state.loginAttr.password
                }
            }
        );
    }

    const setPassword=(val)=>{
        setState(
            {
                ...state,
                loginAttr:{
                        password:val,
                        username:state.loginAttr.username
                    }
                }
        );
    }

    useEffect(() => {
        if(localStorage.getItem('x-token') && state.isLoggedIn){
            
        }
    },[]);

    return(
        <Container>
            <Box style={{margin:"5em"}}>
                <Title>Login</Title>
                <Field>
                    <Label 
                        onClick={
                            ()=>{localStorage.removeItem('x-token')}
                            }>Username</Label>
                    <Control>
                        <Input 
                            type="text" 
                            placeholder="input your username here..." 
                            onChange={v=>setUsername(v.target.value)}/>
                    </Control>
                </Field>
                <Field>
                    <Label>Password</Label>
                    <Control>
                        <Input 
                            type="password" 
                            placeholder="input your password here..." 
                            onChange={v => setPassword(v.target.value)}/>
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button 
                            className="is-success"
                            onClick={loginProcess}>
                            Submit
                        </Button> 
                        {/* <p>have not registered yet? <a href="#">Register</a></p> */}
                    </Control>
                </Field>
            </Box>
        </Container>
    );
}
export default Login;