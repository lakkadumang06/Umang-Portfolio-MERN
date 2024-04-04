import React from "react";
import "../../App.css";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
      <section id="Contact">
        <div className="contact">
          <div className="contact_heading">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-12">
                  <h2>Contact</h2>
                </div>
                <div className="col-sm-6 col-12 d-flex align-items-center justify-content-sm-end justify-content-center">
                  <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="" active>
                      Contact
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </div>
          <div className="location">
            <Container>
              <div className="location-heading pt-md-5">
                <h5>GET IN TOUCH</h5>
                <p>
                  Let’s discuss <br />
                  about an project!
                </p>
              </div>
              <div className="row location-info pb-md-5 pb-3">
                <div className="col-md-6 col-12 enter-info">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Your Website" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="Message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8244860111135!2d72.9156773753068!3d21.23880738046367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04578a59b1f01%3A0x63cfa42c383f26de!2sEden%20Arcon!5e0!3m2!1sen!2sin!4v1704085414919!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
