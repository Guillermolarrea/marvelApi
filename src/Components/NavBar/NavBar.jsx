import { Link } from "react-router-dom"
import SearchBar from "../searchBar/searchBar"

const NavBar = () => {
    return (
        <div>
            <div>
                <Link to={`/home`}>
                    <button >Home</button>
                </Link>
                <Link to={`/about`}>
                    <button>About</button>
                </Link>
            </div>
            <div>
                {<SearchBar />}
            </div>
        </div>
    )
}
export default NavBar