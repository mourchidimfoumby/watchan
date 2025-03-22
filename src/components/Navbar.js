import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
 
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> <img src={logo} alt="Logo de Watchan" id="logo"/> </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;