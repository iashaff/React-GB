import React, { useEffect, useState, useCallback } from "react";
import { useParams, Redirect } from "react-router";
import { authors } from "../utils/constans";
import Messages from "./Messages";


const messagesAuthor =
{
    chat1: [],
    chat2: [],
    chat3: []
}

const MessageField = () => {
    const [messages, setMessages] = useState(messagesAuthor);
    const params = useParams;
    const { chatId } = params;
    console.log(params)

    const handleAddComment = useCallback(
        (newMessage) => {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [chatId]: [...prevMessages[chatId], newMessage],
            }));
        },
        [chatId]
    );

    useEffect(() => {
        let botAnswerTimeout;
        if (!messages.length) {
            return
        }

        const lastMessage = messages[chatId][messages[chatId]?.length - 1];
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

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/" />
    }

    return (
        <div className="boxMessage">

            <div className="answer-box">
                {messages[chatId].map((message) => <div
                    className={`message ${message.author === authors.bot ? "bot-message" : "writer-message"}`}>
                    <div>{message.text}</div>
                    <div className="message-sender">{message.author}</div></div>)}
            </div>
            <Messages onAddMessage={handleAddComment} />

        </div>

    );
};

export default MessageField;