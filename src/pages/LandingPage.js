import React from 'react'
import NavBar from '../comp/NavBar'
import Assets from '../assets/Assets'
import '../Css/LandingPage.css'
import Footer from '../comp/Footer'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const nav = useNavigate()
    function handleButton(){
        nav("/contact")
    }
    return (
        <div>
            <NavBar />
            <div className='app'>
                <video className="background-video" autoPlay loop muted>
                    <source src={Assets.background} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <p className='text-font'>WORK HARDER,GET STRONGER</p>
                    <div>
                        <h1 className='hone'>EASY WITH US</h1>
                    </div>
                <button className='button-Style' onClick={handleButton}>Join <i class="fa-sharp fa-solid fa-dumbbell"></i></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
