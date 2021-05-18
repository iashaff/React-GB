import React from "react";
import { chats } from "../utils/constans";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



const ChatList = () => {
    return (
        <>
            <List className="chatlist">

                {chats.map(chat => (
                    <Link key={chats.id} to={`chats/${chat.id}`}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar>{chat.avatar}</Avatar>
                            </ListItemAvatar>
                            <ListItemText>{chat.friend}</ListItemText>
                        </ListItem>
                    </Link>
                ))}

            </List>

        </>
    )
}

export default ChatList