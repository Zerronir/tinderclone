import React from "react";
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
    return (
        <div className="header">
            
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Logo" className="header__logo" />
            
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header;
