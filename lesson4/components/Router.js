import React from "react";
import { Switch, Route } from 'react-router-dom';
import Layout from "./Layout";
import Profile from "./Profile"




const Router = () => {
    return (
      
        <Switch>
            <Route exact path='/' component={Layout} />
            <Route exact path='/chats/:chatId' 
               render={ obj => <Layout
                   chatId={ Number(obj.match.params.chatId) }
               />
               } />
            <Route path='/profile' component={Profile}></Route>
        </Switch>
    )
}

export default Router;