import React, { useEffect, useState } from "react";
import { authors } from "../utils/constans";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


//Отправка фиксированных сообщений от робота на сообщения автора.



const Messages = ({ onAddMessage }) => {
    const [text, setText] = useState('');

    const handleAddText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMessage({ author: authors.human, text });
        setText('')
    }

    return (
      
        <form onSubmit={handleSubmit}>
            <TextField  id="outlined-basic" label="Enter your message" variant="outlined"
             value={text} onChange={handleAddText}>    
             </TextField>
        
        <Button
                type="submit"
                variant="contained"
                color="primary"
            >Send
      </Button>

      </form>
       
    )
}




export default Messages;