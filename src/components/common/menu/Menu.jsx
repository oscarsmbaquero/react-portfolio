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
                <Link to="/contact">Proyectos</Link>
            </li>
            <li>
                <Link to="/contact">Stack</Link>
            </li>
            <li>
                <Link to="/contact">Proyectos</Link>
            </li> */}
        </ul>
    )
}

export default Menu