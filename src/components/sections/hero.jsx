import React from "react";
import Marquee from "react-fast-marquee";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
  RiTreeFill,
} from "@remixicon/react";

import Javascript from "../../assets/images/technology/Javascript.png";
import Typescript from "../../assets/images/technology/TypeScript.png";
import ReactImg from "../../assets/images/technology/React-JS.png";
import Next from "../../assets/images/technology/Next-JS.png";
import redux from "../../assets/images/technology/Redux.png";
import tailwind from "../../assets/images/technology/Tailwind-CSS.png";
import shadcn from "../../assets/images/technology/ShadCn.png";
import materialUI from "../../assets/images/technology/Material-UI.png";
import bootstrap from "../../assets/images/technology/BootStrap.png";
import wordpress from "../../assets/images/technology/Wordpress.png";
import CV from "../../assets/docs/cv.pdf";
import SlideUp from "../../utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"https://munim-ali.web.app/assets/profile-BvU5Ny5c.webp"} alt="About Me" />
                <h2 className="mt-4">Munim Ali</h2>
                <p>I am a Software Developer based in Karachi, Pakistan.</p>
                <div className="about-social text-center ">
                  <ul>
                    <li>
                      <a href="" target="_blank" className="block">
                        <RiTwitterXLine size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        target="_blank"
                        className="block"
                      >
                        <RiLinkedinFill size={20} />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" className="block">
                        <RiGithubLine size={20} />
                      </a>
                    </li>
                    <li className="linktree-icon">
                      <a href="" target="_blank" className="block">
                        <RiTreeFill size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Hello There!</p>
                <h2>
                  I’m Munim Ali, a software developer dedicated to crafting
                  visually engaging, user-centric experiences that feel as
                  flawless as they look.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li className="flex items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Projects, Remote and Part-time Jobs
                    </li>
                  </ul>
                </div>
                <div className="hero-btns mt-4">
                  <a href={CV} target="_blank" className="theme-btn" download>
                    <span>Download CV</span>{" "}
                    <i>
                      <RiDownloadLine size={16} className="float-right ml-2 mt-1" />
                    </i>{" "}
                  </a>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className="about-content-part-bottom">
                <h2>Tech Stack I Use</h2>
                <div className="company-list">
                  <div className="scroller">
                    <div className="scroller__inner">
                      <Marquee>
                        <img src={Javascript} alt="" />
                        <img src={Typescript} alt="" />
                        <img src={ReactImg} alt="" />
                        <img src={Next} alt="" />
                        <img src={redux} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={shadcn} alt="" />
                        <img src={materialUI} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={wordpress} alt="" />
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
