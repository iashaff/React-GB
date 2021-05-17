import React from "react";
import { Switch, Route } from 'react-router-dom';
import Layout from "./Layout";


export const Profile = () => {
    return <div>This is profile page</div>;
}

const Router = () => {
    return (
      
        <Switch>
            <Route exact path='/' component={Layout} />
            <Route  path=':chatId' component={Layout}>
            </Route>
        </Switch>
    )
}

export default Router;