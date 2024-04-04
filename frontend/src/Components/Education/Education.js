import React from 'react'
import '../../App.css';
import './Education.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3, FaBootstrap, FaPhp, FaReact, FaNodeJs } from "react-icons/fa";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Educationbox from '../../common/Educationbox';
import Skill from '../../common/Skill';


function Education() {

    const educ = [
        {
            year: '2019-2020',
            position: 'Secondary Education',
            place: 'ASHADEEP VIDHYALAY - 6',
            detail: "Elevating Secondary Education with a focus on holistic development. Explore my portfolio to witness a commitment to fostering intellectual curiosity, critical thinking, and personal growth. Dive into a dynamic learning environment where students are empowered to thrive academically and creatively, preparing them for a future of endless possibilities."
        },
        {
            year: '2020-2022',
            position: 'Higher Secondary Education',
            place: 'ASHADEEP IIT - SCIENCE STREAM',
            detail: 'Where a profound dedication to higher secondary education in the field of science unfolds In my approach to higher secondary science education, I emphasize a comprehensive curriculum that not only imparts theoretical knowledge but also encourages critical thinking and problem-solving skills. From physics to chemistry and biology, each subject is a gateway to understanding the intricate workings of the natural world.'
        },
        {
            year: '2022-2025',
            position: 'BCA',
            place: 'SWARRNIM STARTUP AND INNOVATION',
            detail: 'Embarking on a journey in the realm of Computer Applications, I am a dedicated BCA student passionate about harnessing the power of technology to drive innovation and efficiency. Throughout my academic pursuit, I have delved into a comprehensive curriculum that encompasses a spectrum of subjects, from programming languages and software development to database management and system analysis.'
        },
        {

            year: '2023-2024',
            position: 'Full-Stack Development',
            place: 'CREATIVE DESIGN AND MULTIMEDIA INSTITUTE',
            detail: '"Embarking on a transformative journey in Full Stack Development, I am actively immersed in a comprehensive course that equips me with a versatile skill set to navigate the dynamic landscape of web development. This course has provided an in-depth exploration of both front-end and back-end technologies, empowering me to create seamless, end-to-end solutions.'
        }
    ]

    const skill = [
        {
            icon: <FaHtml5 />,
            course: 'HTML',
            per: '90%'
        },
        {
            icon: <FaCss3 />,
            course: 'CSS',
            per: '90%'
        },
        {
            icon: <FaBootstrap />,
            course: 'BOOTSTRAP',
            per: '90%'
        },
        {
            icon: <SiTailwindcss />,
            course: 'TAILWIND CSS',
            per: '90%'
        },
        {
            icon: <IoLogoJavascript />,
            course: 'JAVASCRIPT',
            per: '90%'
        },
        {
            icon: <FaReact />,
            course: 'REACT JS',
            per: '80%'
        },
        {
            icon: <FaNodeJs />,
            course: 'NODE JS',
            per: '80%'
        },
        {
            icon: <SiMongodb />,
            course: 'MONGO DB',
            per: '80%'
        },
        {
            icon: <SiMysql />,
            course: 'MYSQL',
            per: '80%'
        }


    ]

    return (
        <>
            <section id="Education">
                <div className="container">
                    <div className="education">
                        <div className="educ-heading text-center pt-5">
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <h4>EDUCATION & SKILL</h4>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <h3>Showcasing your talent <br />
                                    amplifying your impact</h3>
                            </AnimationOnScroll>
                        </div>
                        <Educationbox value={educ} />
                        <Skill skillname={skill} />
                    </div>
                </div>
            </section>

        </>

    )
}

export default Education

