import React from 'react'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const skill = ({ skillname }) => {
    return (
        <>


            <div className="row justify-content-center pt-md-5">

                {skillname.map((items) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-4">
                            <AnimationOnScroll animateIn="animate__zoomIn">
                                <div className="skill">
                                    <div className="skillinner">
                                        <div className="icon">
                                            {items.icon}
                                        </div>
                                        <div>
                                            <h6>{items.course}</h6>
                                        </div>
                                        <div className="icon-detail">
                                            <h6 className="pt-2">{items.per}</h6>
                                        </div>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    );
                })}

            </div>





        </>
    )
}

export default skill
