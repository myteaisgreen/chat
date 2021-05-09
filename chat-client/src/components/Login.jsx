import { Button } from '@material-ui/core'
import React from 'react'
import LoginService from '../services/loginService';

function Login({ setName }) {

    async function onClickFetchName() {
        const response = await LoginService.login();
        if(response.data.username){
            setName(response.data.username);
        }
    }

    return (
        <div>
            <Button fullWidth onClick={onClickFetchName} justify="center">
                Get Your Name
            </Button>
        </div>
    )
}

export default Login
