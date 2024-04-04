import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Educationbox = ({ value }) => {
    return (
        <>

            <div className="years row">
                {
                    value.map((item) => {
                        return (
                            <div className="col-12 col-lg-6">
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <div className="time px-4 py-3 mt-5">
                                        <h5>{item.year}</h5>
                                    </div>
                                    <div className="course">
                                        <h4 className="pt-3">{item.position}</h4>
                                        <h6>{item.place}</h6>
                                    </div>
                                    <div className="course-info">
                                        <p className="pt-3">{item.detail}</p>
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Educationbox
