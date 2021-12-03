import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <section className="nav-menu-btn">
                <i class="fas fa-bars"></i>
            </section>
            <section className="nav-links">
                <ul className='nav-center-column'>
                    <li>
                        <i class="fas fa-user-tie active"></i>
                        <p>About</p>
                    </li>
                    <li>
                        <i class="fas fa-phone"></i>
                        <p>Contact</p>
                    </li>
                    <li>
                        <i class="fas fa-file-alt"></i>
                        <p>Resume</p>
                    </li>
                    <li>
                        <i class="fas fa-laptop-code"></i>
                        <p>Projects</p>
                    </li>
                </ul>
            </section>
            <section className="nav-download">
                <ul className='center-column'>
                    <li>
                        <i class="fas fa-cloud-download-alt"></i>
                        <p>
                            Download
                            Resume
                        </p>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navbar;