import React, { useState, useEffect } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import io from 'socket.io-client'
import { Grid } from '@material-ui/core';

function App() {
  const [socket, setSocket] = useState();
  const [name, setName] = useState("");

  useEffect(()=>{
    if(name && !socket){
      const newSocket = io('http://localhost:3500');
      newSocket.emit('join', name);
      setSocket(newSocket);
    }

    return () => {
      if(socket) socket.close();
    }
  }, [socket, name])

  return (
    <div>
      <Grid container  justify="center" direction="rows">
        <Grid item xs={3}/>
        <Grid item xs={6}>
          {!name ? 
          <Login setName={setName}/> : 
          <Chat socket={socket}/>
          }
        </Grid>
        <Grid item xs={3}/>
      </Grid>
    </div>
  );
}

export default App;
