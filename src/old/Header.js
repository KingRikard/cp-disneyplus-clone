import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DriveEta, Person, Speed } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./Header.css";




function Header() {
    return (
        <div className="header">
            <IconButton size="small">
                <DriveEta className="header__icon" fontSize="large" />
            </IconButton>

            <IconButton size="small">
                <Speed className="header__icon" fontSize="large" />
            </IconButton>

            <IconButton size="small">
                <Person className="header__icon" fontSize="large" />
            </IconButton>

        </div>
    )
}

export default Header
