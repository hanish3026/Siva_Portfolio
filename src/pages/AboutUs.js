import React from 'react'
import '../Css/AboutUs.css'
import Assets from '../assets/Assets'
import Footer from '../comp/Footer'
import NavBar from '../comp/NavBar'
const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <div className='container mb-5'>
                <div>
                    <p className='intro text-center'>WHAT I OFFER </p>
                    <div className='row '>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow">
                                <img class="card-img-top" src={Assets.FunctionalTraining} alt="Card  cap" style={{ height: "500px", objectFit: "cover" }} />
                                <div class="card-body design">
                                    <h4 class="card-title">FUNCTIONAL TRAINING</h4>
                                    <p class="card-text">
                                        Functional training helps you build strength and agility for everyday tasks. Stay consistent, focus on proper form, and remember: your progress benefits your lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow" >
                                <img class="card-img-top" src={Assets.WeightLoss} alt="Card cap" style={{ height: "500px", objectFit: "cover"}} />
                                <div class="card-body design">
                                    <h4 class="card-title">WEIGHT LOSS</h4>
                                    <p class="card-text">
                                        Weight loss is a journey of discipline and patience. Focus on balanced nutrition, regular exercise, and sustainable habits. Celebrate small victories along the way!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow">
                                <img class="card-img-top" src={Assets.Msl} alt="Card  cap" style={{ height:"500px", objectFit:"cover"}} />
                                <div class="card-body design">
                                    <h4 class="card-title">WEIGHT GAIN</h4>
                                    <p class="card-text">
                                        Weight gain requires consistency and smart choices. Prioritize calorie-dense, nutritious foods, strength training, and proper rest. Stay patient and track your progress to meet your goals!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow">
                                <img class="card-img-top" src={Assets.postuer} alt="Card  cap" style={{ height: "500px", objectFit: "cover" }} />
                                <div class="card-body design">
                                    <h4 class="card-title">POSTURE CORRECTION</h4>
                                    <p class="card-text">
                                        Posture correction focuses on improving alignment to reduce strain, enhance mobility, and prevent discomfort. Commit to exercises, awareness, and adjustments for lasting results!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow">
                                <img class="card-img-top" src={Assets.diet} alt="Card  cap" style={{ height: "500px", objectFit: "cover" }} />
                                <div class="card-body design">
                                    <h4 class="card-title">DIET CONSULTING</h4>
                                    <p class="card-text">
                                        Diet consulting provides personalized nutrition guidance to support your health goals. Stay committed to balanced eating habits and expert advice for sustainable well-being!
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 mb-5'>
                            <div class="card border-0 hover-grow">
                                <img class="card-img-top" src={Assets.balance} alt="Card cap" style={{ height: "500px", objectFit: "cover" }} />
                                <div class="card-body design">
                                    <h4 class="card-title">BALANCE TRAINING</h4>
                                    <p class="card-text">
                                        Balance training improves stability, coordination, and body control. It’s essential for enhancing physical performance, preventing falls, and maintaining overall functional strength and agility.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src={Assets.siva} style={{ height: "600px", width: "100%", objectFit: "cover" }} className="mt-lg-5" alt="Images" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p className="intro text-center">ABOUT ME</p>
                        <p className="para">
                            I am a skilled gym trainer with over 9 years of experience and a proven track record of successful transformations. I specialize in personalized training programs for weight loss, muscle gain, posture correction, and overall fitness. My approach combines functional training with diet consulting, ensuring safe and effective progress. I am passionate about empowering clients to reach their full potential, providing motivation and expert guidance every step of the way. I help individuals improve their strength, health, and confidence, making each fitness journey both impactful and rewarding.                    </p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AboutUs
