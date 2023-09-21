import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'><Link to="/">Demo</Link></div>
    </nav>
  )
}

export default Navbar