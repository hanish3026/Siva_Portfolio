import React from 'react'
import '../Css/Footer.css'
import '../Css/NavBar.css'
const Footer = () => {
    return (
        <div>
            <footer class="text-white text-center py-4 mt-auto bg-darks" style={{ background: "black" }}>
                <div class="container">
                    <p class="mb-0">&copy; 2024 SIVA. All rights reserved.</p>
                    <div class="social-icons">
                        <ul className='nav d-flex justify-content-center '>
                            <li className='nav-link '>
                                <a href='/about' className='nav-link text-danger'>About</a>
                            </li>
                            <li className='nav-link text-danger'>
                            <a href='/contact' className='nav-link text-danger'>Conatct</a>
                            </li>
                            <li className='nav-link text-danger'>
                            <a href='/about' className='nav-link text-danger'>Archivements</a>
                            </li>
                        </ul>
                        <a href="/home" class="text-white me-3 "><i class="fab fa-facebook hov"></i></a>
                        <a href="/home" class="text-white me-3 "><i class="fab fa-twitter hov"></i></a>
                        <a href="/home" class="text-white me-3 "><i class="fab fa-instagram hov"></i></a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
