import {
  RiGithubLine,
  RiLinkedinFill,
  RiTreeFill,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-bottom pt-8 pb-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 flex items-center">
              <div className="copyright-text flex items-center justify-start">
                <p>
                  Copyright @{year}, <Link to="/">Munim Ali</Link> All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 flex items-center justify-content-end justify-content-center justify-content-lg-end">
              <div className="footer-social text-end">
                <ul>
                  <li>
                    <a href="" target="_blank"   className="block">
                      <RiTwitterXLine size={18}  />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="_blank"
                        className="block"
                    >
                      <RiLinkedinFill size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank"   className="block"> 
                      <RiGithubLine size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank"   className="block">
                      <RiTreeFill size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
