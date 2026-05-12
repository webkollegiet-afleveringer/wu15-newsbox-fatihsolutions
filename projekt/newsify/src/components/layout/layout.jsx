import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./header.scss";
import "./layout.scss";
import SearchBar from "./searchbar"
import "./footer.scss";

export default function Layout() {
    const location = useLocation();


    return (
        <>
            <header className="header">
                <img src="/logo-newsify.svg" alt="" />
                <SearchBar />
            </header>
            <Outlet />
            <nav>
                <ul className="footer">
                    <li>
                        <Link to="/">
                            <img src="/iconoir_home.svg" alt="home icon" /></Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <img src="/feather_settings.png" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive"> <img src="/feather_bookmark.svg" alt="bookmark" /></Link>

                    </li>

                    <li>
                        <Link to="/favorite" ><img src="/feather_star.png" alt="favorite" /></Link>
                    </li>
                </ul>
            </nav>
        </>






    )
}

