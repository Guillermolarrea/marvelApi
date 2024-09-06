import { Link } from "react-router-dom"
import SearchBar from "../searchBar/searchBar"
import s from './NavBar.module.css'

const NavBar = ({type}) => {
    return (
        <div className={s.conteinerNavBar}>
            <div className={s.conteinerButton}>
                <Link to={`/home`}>
                    <button className={s.button} >Home</button>
                </Link>
                <Link to={`/cards`}>
                    <button className={s.button} >Characters</button>
                </Link>
                <Link to={`/comics`}>
                    <button className={s.button} >Comics</button>
                </Link>
                <Link to={`/about`}>
                    <button className={s.button}>About</button>
                </Link>
                <Link to={`/creators`}>
                    <button className={s.button}>Creators</button>
                </Link>
                <Link to={`/series`}>
                    <button className={s.button}>Series</button>
                </Link>
            </div>
            <div className={s.conteinerSearchBar}>
                {<SearchBar type={type} />}
            </div>
        </div>
    )
}
export default NavBar