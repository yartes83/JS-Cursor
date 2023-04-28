import './HeaderStyle.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
                <nav>
                    <ul>
                        <li><NavLink to="/">Головна</NavLink></li>
                        <li><NavLink to="/gallery">Галерея</NavLink></li>
                        <li><NavLink to="/author">Про автора</NavLink></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Header;