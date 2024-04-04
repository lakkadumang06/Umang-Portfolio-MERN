import React from 'react'
import '../../App.css';
import './Myinfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mypic from '../../assests/umang1.png'
import mypicborder from '../../assests/border.png';
import { MdFileDownload, MdOndemandVideo } from "react-icons/md";

import About from '../About/About';
import Education from '../Education/Education';
import User from '../User/User';

import { TypeAnimation } from 'react-type-animation';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Myinfo() {
    return (
        <>
            <section id="Myinfo">
                <div className="container">
                    <div className="Myinfo d-flex align-items-center">
                        <div className="myinfo-detail d-flex flex-column justify-content-center pt-md-0 pt-3">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <h2>HI, I'M UMANG! CREATIVE <TypeAnimation
                                    sequence={[
                                        'CODER',
                                        2000,
                                        'DESIGNER',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={200}
                                    style={{ fontSize: '60px', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                                </h2>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <p className='pt-4'>As an aspiring professional currently enrolled in a Full Stack development course, I am actively pursuing opportunities to leverage my skills and contribute to organizational growth. Eager to secure a position in a forward-thinking company where I can initiate my career journey and cultivate a robust skill set. I am committed to making a meaningful impact and adding value to a dynamic teams.</p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <div className="myinfo-btn d-md-flex d-block m-auto pt-4">
                                    <button className='p-4 me-2 btn1'><a href="./UMANG-RESUME.pdf" download>DOWNLOAD CV</a><MdFileDownload /></button>
                                    <button className='p-4 ms-2 btn2'><MdOndemandVideo className='videoicon me-3' />Watch The Video</button>
                                </div>
                            </AnimationOnScroll>
                        </div>

                        <AnimationOnScroll animateIn="animate__bounceIn">
                            <div className="myinfo-pic d-none d-xl-block">
                                <div className="borderpic">
                                    <img src={mypicborder} alt="" />
                                </div>
                                <div className="mypic">
                                    <img src={mypic} alt="" className='w-100' />
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section >

            <About />
            <Education />
            <User />

        </>
    )
}

export default Myinfo