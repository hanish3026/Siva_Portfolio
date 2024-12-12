import React from 'react'
import '../Css/AboutUs.css'
import Assets from '../assets/Assets'
import Footer from '../comp/Footer'
import NavBar from '../comp/NavBar'
const AboutUs = () => {
    return (
        <div>
            <NavBar/>
        <div className='container mb-5'>
            <div>
                <p className='intro text-center'>WHAT I OFFER </p>
                <div className='row '>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow">
                            <img class="card-img-top" src={Assets.FunctionalTraining} alt="Card image cap" style={{ height: "500px", objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">FUNCTIONAL TRAINING</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow" >
                            <img class="card-img-top" src={Assets.WeightLoss} alt="Card image cap" style={{ height: "500px" , objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">WEIGHT LOSS</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow">
                            <img class="card-img-top" src={Assets.Msl} alt="Card image cap" style={{ height: "500px" , objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">WEIGHT GAIN</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow">
                            <img class="card-img-top" src={Assets.postuer} alt="Card image cap" style={{ height: "500px" , objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">POSTURE CORRECTION</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow">
                            <img class="card-img-top" src={Assets.diet} alt="Card image cap" style={{ height: "500px" , objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">DIET CONSULTING</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-4 mb-5'>
                        <div class="card border-0 hover-grow">
                            <img class="card-img-top" src={Assets.balance} alt="Card image cap" style={{ height: "500px"  ,objectFit:"cover"}} />
                            <div class="card-body design">
                                <h4 class="card-title">BALANCE TRAINING</h4>
                                <p class="card-text">
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src={Assets.siva} style={{ height: "600px", width: "100%", objectFit: "cover" }} className="mt-lg-5" alt="Image" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <p className="intro text-center">ABOUT ME</p>
                    <p className="para">
                        You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write, and check academic essays.
                        Task One, how to approach the task and the language needed for a successful answer. You’ll examine Task Two questions and learn how to plan, write, and check academic essays.
                        You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer.
                    </p>
                </div>
                <div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutUs
