import React from 'react'
import '../../App.css';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutimg from '../../assests/umang2.png';
import { MdFileDownload } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



function About() {
    return (
        <>
            <section id="About">
                <div className="container">
                    <div className="about row justify-content-between d-xl-flex d-block">
                        <div className="aboutinfo col-xl-6 col-12">
                            <div className="aboutheading">
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <h5 className='pt-4'>ABOUT ME</h5>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <h4 className='pt-4'>Transforming visions into exceptional portfolios</h4></AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <p className='pt-4'>"Crafting digital experiences, one click at a time. Explore my portfolio and discover a world where creativity meets functionality. Elevate your online journey with innovative design and seamless user experiences."</p>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <button className='p-3 p-md-4 mt-4 m-lg-0 m-auto btn1 d-flex d-md-block justify-content-center'>DOWNLOAD CV <MdFileDownload className='download-icon' /></button>
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className="aboutpic col-xl-6 col-12 d-flex justify-content-center">
                            <AnimationOnScroll animateIn="animate__bounceIn">
                                <div className="img">
                                    <img src={Aboutimg} alt="" className='w-100'/>
                                    <div class="about_img_text d-flex align-items-center justify-content-center ">
                                        <div className="icon pe-5 mb-2"><FaChartPie /></div>
                                        <div class="about_content">
                                            <h4>Daily Activity</h4>
                                            <p>Loream is ispam</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default About