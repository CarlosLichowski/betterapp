import './Nav.css'

function Nav(){

    return(
        <nav className='navContainer'>

            <div className='navUser'>
                <div className='navUserImgContainer'>

                <p>userimage</p>
                </div>

                <div className='NavUserNameContainer'>
                <p>Admin</p>
                <h3>userName</h3>
                </div>

            </div>
        

        <ul className='navLinks'>
            <li className='navLink'>Home</li>
            <li className='navLink'>Daily challenges</li>
            <li className='navLink'>Goals</li>
            <li className='navLink'>Estadisticas</li>
            <li className='navLink'></li>
        </ul>
        </nav>
    )
}
export default Nav
