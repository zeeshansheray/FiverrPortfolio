import React from "react";
import { Link } from "react-router-dom";
import { RiDownloadLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";

const CallToAction = () => {
  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center">
                <h2>
                  Are You Ready to kickstart your project with a touch of magic?
                </h2>
                <p>
                  Let’s bring your vision to life! ✨ Available for full-time or
                  part-time roles where creativity meets precision in every
                  pixel.
                </p>

                <div className="hero-btns mt-10">
                  <Link to="/contact" className="theme-btn">
                    <span>Let's Talk{" "}</span>
                    <i>
                      <RiDownloadLine size={16} className="float-right ml-2 mt-1"  />
                    </i>
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
