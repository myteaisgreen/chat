import { Grid } from '@material-ui/core';
import React from 'react';
import Messages from './Messages';
import Sidebar from './Sidebar';
import TextInput from './TextInput';

function Chat({ socket }) {


    return (
        <div>
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={6}>
                    <Sidebar socket={socket}/>
                </Grid>
                <Grid item container xs={6} direction="column">
                    <Messages socket={socket}/>
                    <TextInput socket={socket}/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Chat
