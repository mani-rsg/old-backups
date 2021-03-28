import React from 'react';

const Header = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <h4 className="app-heading mt-2">{props.heading}</h4>
        </nav>
    );
}

export default Header