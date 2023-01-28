import SearchBar from '../SearchBar/SearchBar.jsx'
import estilo from './Nav.module.css';
import icono from "../../icon/icon.png"
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav className={estilo.head__content}>
            <img src={icono} alt="Rick_and_Morty" width="120" height="100"/>

            <div className={estilo.head__group}>
                <Link to="/favorites" className={estilo.link}>Favoritos</Link>
                <Link to='/about' className={estilo.link}>About</Link>
                <Link to='/home' className={estilo.link}>Home</Link>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    );
}

export default Nav;