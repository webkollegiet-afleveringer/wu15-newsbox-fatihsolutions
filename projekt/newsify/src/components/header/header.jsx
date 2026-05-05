import "./header.scss"
import SearchBar from "./searchbar"
export default function Header() {

    return (
        <header className="header">
            <img src="/logo-newsify.svg" alt="" />
            <SearchBar />
        </header>
    )
}