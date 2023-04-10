import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project" key={data.id}>
      <a target="_blank" href={data.url}>
        <img src={data.image_url} alt={data.title}></img>
      </a>
      <div className="project-details">
        <a target="_blank" href={data.url}>
          <h3>{data.title}</h3>
        </a>
        <p className="project-desc">{data.desc}</p>
        <p className="project-tech">
          <span className="tech-head">Technology:</span>
          {data.tech}
        </p>
      </div>
    </div>
  );
};

export default Project;
