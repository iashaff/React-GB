import React from "react";
import MessageField from "./MessageField";
import Header from "./Header";
import ChatList from "./ChatList";


const Layout = () => {
    return (
        <>
            <Header />
            <div className="message-body">
                <ChatList />
                <MessageField />
            </div>

        </>
    )
}

export default Layout;