import React, { useEffect, useState } from "react";
import { authors } from "../utils/constans";
import Messages from "./Messages";

   
const messagesAuthor = []

const MessageField = () => {
    const [messages, setMessages] = useState(messagesAuthor);

    const handleAddComment = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage])
    }


    useEffect(() => {
        let botAnswerTimeout;
        if (!messages.length) {
            return
        }

        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author === authors.human) {
            if (lastMessage.text === "привет" || lastMessage.text === "Привет") {
                botAnswerTimeout = setTimeout(() => {
                    handleAddComment({ author: authors.bot, text: "Привет" });
                }, 1500)

            } else if (lastMessage.text === "Как дела?" || lastMessage.text === "как дела?") {
                botAnswerTimeout = setTimeout(() => {
                    handleAddComment({ author: authors.bot, text: "Хорошо" });
                }, 1500)
            } else botAnswerTimeout = setTimeout(() => {
                handleAddComment({ author: authors.bot, text: "Поговори с человеком, я бот!" });
            }, 1500)
            
        }

        return () => clearTimeout(botAnswerTimeout)
    }, [messages])

    return (
        <div className="boxMessage">

            <div className="answer-box">
                {messages.map((message) => <div
                    className={`message ${message.author === authors.bot ? "bot-message" : "writer-message"}`}>
                     <div>{message.text}</div>
                     <div className="message-sender">{message.author}</div></div>)}
            </div>
            <Messages onAddMessage={handleAddComment} />

        </div>

    );
};

export default MessageField;