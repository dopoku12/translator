import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="">
            <div className="">
                <Link to="/" className="brand-logo left">
                    <span className="black-text"  >
                        That's Clearly Wealth!
                    </span>
                </Link>
                <ul className="right">
                    <li>
                        <Link className="green-text" to="/">
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link className="green-text" to="/Words">
                            Definitions
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;