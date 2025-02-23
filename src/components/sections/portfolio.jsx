import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "@remixicon/react";
import { projectsData } from "../../utlits/data/projectData";
import SlideUp from "../../utlits/animations/slideUp";

const animations = ["slideIn", "fadeIn", "scaleUp"];

const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const Portfolio = ({ className }) => {
  const [category, setCategory] = useState("All");
  const [animationClass, setAnimationClass] = useState("");

  const handleCategoryClick = (item) => {
    setCategory(item);
    const randomAnimation = getRandomAnimation();
    setAnimationClass(randomAnimation);
  };

  // ------ filter unique category
  const filteredCategory = ["All"];
  projectsData.forEach(({ category }) => {
    if (!filteredCategory.includes(category)) {
      filteredCategory.push(category);
    }
  });
  // ------ filter unique category

  const filteredProjects =
    category === "All"
      ? projectsData
      : projectsData.filter((image) => image.category === category);

  return (
    <section id="portfolio" className={`projects-area ${className}`}>
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>Works & Projects</h2>
                  <p>
                    Check out some of my projects, meticulously crafted with
                    love and dedication, each one reflecting the passion and
                    soul I poured into every detail.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
          <SlideUp>
            <ul className="project-filter filter-btns-one justify-start pb-[15px]">
              {filteredCategory.map((item, id) => (
                <li
                  key={id}
                  onClick={() => handleCategoryClick(item)}
                  className={item === category ? "current" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </SlideUp>
          <div className="row project-masonry-active overflow-hidden ">
            {filteredProjects.map(({ category, id, src, title, link }) => (
              <Card
                key={id}
                id={id}
                category={category}
                src={src}
                title={title}
                link={link}
                animationClass={animationClass}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const Card = ({ category, title, src, animationClass, id, link }) => {
  return (
    <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
      <SlideUp delay={id}>
        <div className="project-item style-two overflow-hidden">
          <div className="project-image">
            <img src={src} alt="Project" />
            <Link to={`${link}`} target="_blank" className="details-btn">
              <RiArrowRightUpLine className="absolute top-1/2 right-[15%] transform -translate-x-1/2 -translate-y-1/2" />{" "}
            </Link>
          </div>
          <div className="project-content">
            <span className="sub-title">{category}</span>
            <h3>{title}</h3>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};
