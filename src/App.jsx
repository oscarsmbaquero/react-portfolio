import './App.scss'
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Cv from './pages/Cv/Cv'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='service' element={<Service />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='cv' element={<Cv />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
