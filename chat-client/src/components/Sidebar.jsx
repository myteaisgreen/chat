import { List, ListItem, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";

function Sidebar({ socket }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("new_join", (users) => setUsers(users));
    
    socket.on("new_leave", (userWhoLeft) => {
      let updatedUsers = users.filter((user) => 
        userWhoLeft.localeCompare(user.id) !== 0
      );
      setUsers(updatedUsers);
    });
  }, [socket, users]);

  return (
    <div>
      <Paper elevation={2}>
          <Typography variant="h3">
              Users:
          </Typography>
          <List>
            {users?.map((user, index) => (
                <ListItem key={user.id}>
                    <Typography variant="h6">
                        {user.name}
                    </Typography>
                </ListItem>
            ))}
          </List>
          
            
          
      </Paper>
    </div>
  );
}

export default Sidebar;
