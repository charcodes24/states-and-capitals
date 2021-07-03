import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/quiz">
                Quiz
            </NavLink>
            <NavLink to="/funfacts">
                Fun Facts
            </NavLink>
        </div>
    )
}

export default NavBar;