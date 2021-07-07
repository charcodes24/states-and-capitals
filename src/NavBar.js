import { NavLink } from "react-router-dom";

function NavBar() {

    const navDisplay = {
        display: "inline", 
        padding: "10px"
    }
    return (
        <div className="navbar">
            <div  className="a" style={navDisplay}>
                <NavLink to="/">
                 Home
                </NavLink>
            </div>
            <div className="a" style={navDisplay}>
                 <NavLink to="/quiz">
                 Quiz
                   </NavLink>
            </div>
            <div className="a" style={navDisplay}>
                <NavLink to="/funfacts">
                 Fun Facts
             </NavLink>
            </div>
        </div>
    )
}

export default NavBar;