import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

function Header(props) {
    const context = useContext(ThemeContext)
    return (
        <div className={`${context.color}-theme`}>
           <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </div>
    );
}

export default Header;