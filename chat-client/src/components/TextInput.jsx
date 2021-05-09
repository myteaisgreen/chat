import { TextField, Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'

function TextInput({ socket }) {
    const [input, setInput] = useState("");
    function onClickSendMessage () {
        socket.emit('message', input)
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <Grid container item alignItems="center">
                <TextField variant="outlined" onChange={handleChange}/>
                <Button onClick={onClickSendMessage}>
                    Send
                </Button>
            </Grid>
        </div>
    )
}

export default TextInput
