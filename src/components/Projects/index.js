import React from "react";
import { useEffect, useRef } from "react";
import data from "../../data/projects";
import Project from "./Project";
import Slider from "react-slick";

export default function Projects() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slider = useRef();
  const sliderRef = useRef();
  useEffect(() => {
    slider.current.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      if (evt.deltaY < 0) {
        sliderRef.current.slickPrev();
      } else {
        sliderRef.current.slickNext();
      }
    });
  });

  return (
    <div ref={slider} className="container-panel">
      <div className="project-grid panel">
        <Slider ref={sliderRef} {...settings}>
          {data.map((project) => {
            return <Project data={project} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
