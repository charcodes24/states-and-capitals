import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <div>
                <NavLink to="/">
                 Home
                </NavLink>
            </div>
            <div>
                 <NavLink to="/quiz">
                 Quiz
                   </NavLink>
            </div>
            <div>
                <NavLink to="/funfacts">
                 Fun Facts
             </NavLink>
            </div>
        </div>
    )
}

export default NavBar;