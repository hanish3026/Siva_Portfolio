import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Assets from '../assets/Assets';
import '../Css/Contact.css'
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7s38hia', 'template_sf35qth', formRef.current, 'Xhzuk-_NMje0G1_nA')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message. Please try again later.');
            });
    
        setForm({
            name: '',
            email: '',
            message: '',
            number: ''
        });
    };
    

    return (
        <>
            <div className='layout'>
                <div className='overWords'>
                    <p>Hi I'm <span className='text-danger'>SIVA</span></p>
                    <p>GYM TRAINER</p>
                    <p>Strive for <span className='text-danger'>progress</span>, not<span className='text-danger'> perfection</span></p>
                </div>
                <div>
                    <img src={Assets.wide} className='image' alt='noimg'></img>
                </div>
                {/*  */}
                <div className="row py-5 mb-5 text-light">
                    <p className="text" style={{ color: "#57000e" }}>GET IN TOUCH</p>
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div className="container text-center">
                            <div className="mb-5 big-hov">
                                <p className="">
                                    <i className="fa-solid fa-house fa-2xl p-3" style={{ color: "#57000e" }}></i>
                                    <span className="d-block">Porur, Chennai</span>
                                </p>
                            </div>
                            <div className="mb-5 big-hov">
                                <p className="">
                                    <i className="fa-solid fa-phone fa-2xl p-3" style={{ color: "#57000e" }}></i>
                                    <span className="d-block">6382619141</span>
                                </p>
                                <small className="text-light">9am to 6pm</small>
                            </div>
                            <div className="mb-5 big-hov">
                                <p className="">
                                    <i className="fa-solid fa-envelope fa-2xl p-3" style={{ color: "#57000e" }}></i>
                                    <span className="d-block">sivam.sm77@gmail.com</span>
                                </p>
                                <small className="text-light">Send us your query anytime!</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="container">
                            <div className="card w-100 shadow-lg border-0">
                                <div className="card-header text-white text-center" style={{ backgroundColor: "#57000e" }}>
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="card-body">
                                    <form ref={formRef} onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name" className="form-label text-dark">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="form-label text-dark">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="Number" className="form-label text-dark">Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="number"
                                                name="number"
                                                value={form.number}
                                                onChange={handleChange}
                                                placeholder="Enter your number"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="message" className="form-label text-dark">Message</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Enter your message"
                                                rows="4"
                                                required
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-success btn-lg">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
