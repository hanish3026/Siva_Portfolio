import React from 'react'
import '../Css/Footer.css'
const Footer = () => {
    return (
        <div>
            <footer class="text-white text-center py-4 mt-auto bg-darks" style={{background:"black"}}>
                <div class="container">
                    <p class="mb-0">&copy; 2024 SIVA. All rights reserved.</p>
                    <div class="social-icons">
                        <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
