import React, { useState } from 'react'
import '../../App.css';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import axios from 'axios';
import { baseurl } from '../../urls';


function Footer() {
    const [Show, setShow] = useState(false);
    const [maildata, setmaildata] = useState("");

    const sendmailhandler = async () => {
        try {
            let response = await axios.post(`${baseurl}`, { email: maildata });
            console.log(response);
            setmaildata("");
            setShow(true)
        } catch (error) {
            console.error(error);
        }
    }
    const handleClose = () => setShow(false);
    return (
        <>
            <section id="Footer">
                <Modal
                    size="md"
                    show={Show}
                    onHide={() => setShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    style={{ color: "var(--theme-color)" }}
                >
                    <Modal.Header style={{ background: "var(--bg2-color)" }}>
                        <Modal.Title id="example-modal-sizes-title-sm" style={{ textAlign: "center" }}>
                            Email Sent Successfully ...!!!
                        </Modal.Title>
                        <Modal.Footer>
                            <Button style={{ background: "var(--theme-color)", color: "var(--bg2-color)" }} onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
                <div className="footer">
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className="row w-100 m-0 newuser">
                            <div className="container">
                                <h3 className='pb-3'>SUBSCRIBE MY NEWSLETTER</h3>
                                <div className="input">
                                    <input type="text" placeholder='Enter Your Email' value={maildata} onChange={(e) => setmaildata(e.target.value)}></input>
                                    <button onClick={() => sendmailhandler()}>Notify Now</button>
                                </div>
                            </div>
                        </div>
                        <div id="mypersonalinfo">
                            <div className="container">
                                <div className="row mypersonalinfo">
                                    <div className="location col-lg-4 col-12 d-flex align-items-center py-5">
                                        <div className="icon me-3">
                                            <CiLocationOn />
                                        </div>
                                        <div className="icon-info">
                                            <h4>Address</h4>
                                            <a href='/'>C-803 Eden Arcon , Surat <br />Gujrat 395010</a >
                                        </div>
                                    </div>
                                    <div className="call col-lg-4 col-12 d-flex align-items-center py-5">
                                        <div className="icon me-3">
                                            <CiPhone />
                                        </div>
                                        <div className="icon-info">
                                            <h4>Lets Talk Us</h4>
                                            <a href='/'>+91 85112 58591</a>
                                        </div>
                                    </div>
                                    <div className="mail col-lg-4 col-12 d-flex align-items-center py-5">
                                        <div className="icon me-3">
                                            <CiMail />
                                        </div>
                                        <div className="icon-info">
                                            <h4>Send Us Email</h4>
                                            <a href='/'>lakkadumang306@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="row copyright justify-content-center align-items-center">
                                    <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
                                        <a href='/'>© lakkad 2023 | All Rights Reserved</a>
                                    </div>
                                    <div className="col-lg-6 col-12 d-md-flex text-center justify-content-sm-around justify-content-center align-items-center pt-3 pt-lg-0">
                                        <div className='pt-2 pt-sm-0'><a href='/'>Terms & Condition</a></div>
                                        <div className='pt-2 pt-sm-0'><a href='/'>Privacy Policy</a></div>
                                        <div className='pt-2 pt-sm-0'><a href='/'>Sitemap</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>

        </>
    )
}

export default Footer