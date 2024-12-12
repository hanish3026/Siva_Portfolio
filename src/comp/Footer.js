import React from 'react'
import '../Css/Footer.css'
import '../Css/NavBar.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <footer class="text-white text-center py-4 mt-auto bg-darks" style={{ background: "black" }}>
                <div class="container">
                    <p class="mb-0">&copy; 2024 SIVA. All rights reserved.</p>
                    <div class="social-icons">
                        <ul className='nav d-flex justify-content-center '>
                            <li className='nav-link '>
                                <NavLink className='nav-link text-danger' to={"/about"}>About</NavLink>
                            </li>
                            <li className='nav-link text-danger'>
                            <NavLink className='nav-link text-danger' to={"/contact"}>Contact</NavLink>
                            </li>
                            <li className='nav-link text-danger'>
                            <NavLink className='nav-link text-danger' to={"/archivements"}>Archivements</NavLink>
                            </li>
                        </ul>
                        <a href="https://www.facebook.com/share/19p124UeJ9/?mibextid=LQQJ4d" class="text-white me-3 "><i class="fab fa-facebook hov"></i></a>
                        <a href="https://www.facebook.com/share/19p124UeJ9/?mibextid=LQQJ4d" class="text-white me-3 "><i class="fab fa-twitter hov"></i></a>
                        <a href="https://www.instagram.com/coach_monster_siva?igsh=emw0dHRqdWo2eG42" class="text-white me-3 "><i class="fab fa-instagram hov"></i></a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
