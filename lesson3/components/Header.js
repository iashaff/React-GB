import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Header = () => {
    return (
        <>
            <AppBar position="static" className="header">
                <Toolbar>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Header