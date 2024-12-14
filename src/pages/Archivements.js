import React, { useState, useEffect } from "react";
import Assets from '../assets/Assets';
import '../Css/Archivements.css';
import { useNavigate } from "react-router-dom";

const Archivements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const nav = useNavigate();

  const images = [
    Assets.siva_img_prize, Assets.sivaimg_8,
    Assets.sivaimg_2,
    Assets.sivaimg_3,
    Assets.sivaimg_5,
    Assets.sivaimg_6,
    Assets.sivaimg_7,
  ];

  const textToType = "Keeep striving relentlessly until you savor the sweetness of success.";

  useEffect(() => {
    const typingSpeed = 200; // Speed at which each character types (in milliseconds)
    let currentCharIndex = 0;

    // Create a typing effect
    const interval = setInterval(() => {
      setTypedText((prevText) => prevText + textToType[currentCharIndex]);
      currentCharIndex += 1;

      // If all characters have been typed, clear the interval
      if (currentCharIndex === textToType.length-1) {
        clearInterval(interval); // Stop once all characters are typed
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  function handleButton() {
    nav("/contact");
  }

  return (
    <>
      <div className="text py-4">
        <div className="container">
          <div className="row align-items-center">
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
                {typedText}
              </p>
            </div>
          </div>
          <div className="text-white">MY CLIENTS</div>
          <div className="mt-lg-5">
            <div className="row align-items-center">
              {[
                Assets.trans7,
                Assets.trans1,
                Assets.trans2,
                Assets.trans6,
                Assets.trans4,
                Assets.trans5,
                Assets.trans8,
                Assets.trans9,
                Assets.trans12,
                Assets.trans11,
                Assets.trans10,
              ].map((image, index) => (
                <div key={index} className='col-lg-4 col-md-6 mb-5'>
                  <div className="card border-0 hover-grow">
                    <img className="card-img-top p-1" src={image} alt={`Card ${index + 1}`} style={{ objectFit: "cover" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text">BE A MEMBER</div>
      <div className="text text-danger join" onClick={handleButton}>
        JOIN US!
      </div>
    </>
  );
};
export default Archivements;
