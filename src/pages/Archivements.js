import React, { useState, useEffect } from "react";
import Assets from '../assets/Assets';
import NavBar from '../comp/NavBar';
import Footer from '../comp/Footer';
import '../Css/Archivements.css';
import { useNavigate } from "react-router-dom";
const Archivements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nav = useNavigate()
  const images = [
    Assets.siva_img_prize, Assets.sivaimg_8,
    Assets.sivaimg_2,
    Assets.sivaimg_3,
    Assets.sivaimg_5,
    Assets.sivaimg_6,
    Assets.sivaimg_7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  function handleButton(){
    nav("/contact")
  }
  return (
    <>
      <NavBar />
      <div className="text py-4">
        <div className="container">
          <div className="row align-items-center ">
            {/* Image Section */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <img
                src={images[currentIndex]}
                alt="Achievement"
                className="img-fluid img-edit"
              />
            </div>
            {/* Text Section */}
            <div className="col-lg-6 col-md-12">
              <p className="text-lg-start text-shadow">
                Keep striving relentlessly until you savor the sweetness of success.
              </p>
            </div>
          </div>
          <div className="text-white">MY CLIENTS</div>
          <div className="mt-lg-5">
            <div className='row align-items-center'>
              {[
                Assets.trans7,
                Assets.trans1,
                Assets.trans2,
                Assets.trans6,
                Assets.trans4,
                Assets.trans5,
              ].map((image, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-5'>
                  <div className="card border-0 hover-grow">
                    <img className="card-img-top p-1" src={image} alt={`Card ${index + 1}`} style={{objectFit:"cover"}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text">BE A MEMBER</div>
      <div className=" text text-danger join" onClick={handleButton}>JOIN US!</div>
      <Footer />
    </>
  );
};

export default Archivements;
