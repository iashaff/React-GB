import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';




const Header = () => {
    return (
        <>
            <AppBar position="static" className="header">
                <Toolbar>
                    <Link to="/profile">
                    <Button  color="inherit">Profile</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Header