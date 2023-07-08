import { Link, useNavigate } from "react-router-dom"
// import { Login } from "../auth/Login"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/events">Upcoming Events</Link>
            </li>

            {
                localStorage.getItem("nash_token")
                    ?<li className="navbar__link">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("nash_token")
                            navigate("/login", {replace: true})
                        }}>Logout</Link>
                    </li>
                    :""
            }
        
        </ul>
    )
}

