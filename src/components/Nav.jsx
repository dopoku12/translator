import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className=" ">
            <div className="nav-wrapper  ">
                <Link to="/" className="brand-logo left">
                    <span className="black-text"  >
                        That's Clearly Wealth!
                    </span>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Words">Definitions</Link>
                    </li>
                    <li className="active">
                        <Link to="/AboutMe">AboutMe</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;