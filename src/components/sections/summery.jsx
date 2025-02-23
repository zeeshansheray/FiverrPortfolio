import React from "react";
import profile from "../../assets/images/about/profile.webp";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>I’m Munim Ali, a software developer.</h2>
                <p>
                  I’m a Pakistan-based software developer specializing in web
                  design, interactive UI, and responsive layouts. With a strong
                  background in creating seamless, user-focused digital
                  experiences, I’ve worked across a variety of industries,
                  building interfaces that prioritize accessibility and
                  engagement.
                </p>
                <p>
                  Although many see frontend development as just code, it’s an
                  art of translating complex functionality into a cohesive
                  visual experience. With an eye for detail and a drive for
                  innovation, I bring user-centric designs to life with
                  precision and creativity, ensuring every project stands out.
                </p>
                <div className="hero-btns">
                  <a href="contact.html" className="theme-btn">
                    Get In touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summery;
