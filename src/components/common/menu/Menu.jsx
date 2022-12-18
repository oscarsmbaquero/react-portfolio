import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.scss'

const Menu = ({ active, setActive }) => {
    const location = useLocation()

    useEffect(() => {
        setActive(false)
    }, [location])

    return (
        <ul className={`menu ${active ? 'active' : ''}`}>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/cv">Cv</Link>
            </li>
            {/* <li>
                <Link to="/projects">Proyectos</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/stack">Stack</Link>
            </li> */}
        </ul>
    )
}

export default Menu