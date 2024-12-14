import React from 'react'
import Assets from '../assets/Assets'
import '../Css/LandingPage.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const nav = useNavigate()
    function handleButton(){
        nav("/contact")
    }
    return (
        <div>
            <div className='app'>
                <img className="background-video"src={Assets.bg} alt='Loading'>
                </img>
                <div>
                    <p className='text-font'>WORK HARDER,GET STRONGER</p>
                    <div>
                        <h1 className='hone'>EASY WITH US</h1>
                    </div>
                <button className='button-Style' onClick={handleButton}>Join <i class="fa-sharp fa-solid fa-dumbbell"></i></button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
