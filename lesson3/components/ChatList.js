import React from "react";
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



const ChatList = () => {
    return (
        <>
            <List className="chatlist">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="./src/images/pac-man.jpg">
                            
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Pac-Man" secondary="May 9, 2021" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="./src/images/darth-vader.jpg">
                            
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Darth Vader" secondary="May 13, 2021" />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="./src/images/dragon.jpg">
                            
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Dragon" secondary="Apr 1, 2021" />
                </ListItem>


            </List>

        </>
    )
}

export default ChatList