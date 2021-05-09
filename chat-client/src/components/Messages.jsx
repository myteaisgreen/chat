import { List, ListItem, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

function Messages({ socket }) {
    const [messages, setMesssages] = useState([]);

    useEffect(() => {
        if(!socket) return;

        socket.on('new_message', (message) => {
            console.log(message);
            setMesssages([...messages, message]);
        });
    }, [socket, messages]);

    return (
        <div>
            <List>
                {messages?.map( ( message, index ) => {
                    return (
                    <ListItem key={index}>
                        <Typography variant="subtitle2">
                            {message.from + ": "}
                        </Typography>
                        <Typography variant="body2">
                            {message.message}
                        </Typography>
                    </ListItem>)
                })}
            </List>
        </div>
    )
}

export default Messages
