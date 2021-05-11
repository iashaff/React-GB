import React, { useEffect, useState } from "react";
import {authors} from "../utils/constans";


//Отправка фиксированных сообщений от робота на сообщения автора.



 const Messages = ({ onAddMessage }) => {
     const [text, setText] = useState('');

     const handleAddText = (e) =>{
         setText(e.target.value)
     }

     const handleSubmit =(e) =>{
         e.preventDefault();
         onAddMessage({author: authors.human, text});
         setText('')
     }

     return (
         <form onSubmit={(handleSubmit)}>
             <textarea value={text} onChange={handleAddText}></textarea>
             <button type="submit">Send</button>
         </form>
     )
 }
    



export default Messages;