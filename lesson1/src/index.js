import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

//отправка сообщения в массив через кнопку, использование state и ref

const App = () => {
   const [messages, setMessages] = useState([]);
   const myRef = React.createRef();


   let addComment = () => {
      let messageValue = myRef.current.value;
      let comment = [...messages, messageValue];
      setMessages(comment);
      myRef.current.value = '';
   }

   return (
      <div className="boxMessage">
         <textarea ref={myRef}></textarea>
         <button onClick={addComment}>Send</button>
         <div>
            {messages.map((item, index) => <p key={index.toString()}>{item}</p>)}
         </div>

      </div>

   );
};

ReactDOM.render(<App />, document.getElementById("app"));