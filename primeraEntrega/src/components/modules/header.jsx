import '../styles/header.css'

function Header() { 
  return (
    <div className="header">
        <div className="header-title"><a href="#"><h1>KeyStore</h1></a></div>
        <nav className='header-nav'>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Cátalogo</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header