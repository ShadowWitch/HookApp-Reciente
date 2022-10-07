import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <NavLink
                        className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}
                        to="/home"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}
                        to="/about"
                    >
                        About
                    </NavLink>

                    <NavLink
                        className={(args) => `nav-link ${args.isActive ? 'active' : ''}`}
                        to="/login"
                    >
                        Login
                    </NavLink>

                </div>
                </div>
            </div>
        </nav>
    )
}
