import React from "react";

import data from "../../data/skills";
import SkillList from "./SkillList";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-main">
        <p>
          Vivamus vel luctus lorem. Ut at justo est. Donec nisl ipsum, bibendum
          vitae augue ac, hendrerit lobortis velit. Vestibulum non nisl non
          nulla ultricies maximus. Sed non dolor cursus, porttitor nulla nec,
          efficitur metus. Sed egestas id erat et finibus. Proin sit amet
          condimentum massa. Mauris vitae lobortis ligula, ultricies cursus
          felis. Phasellus placerat tristique neque ut mollis. Aenean id cursus
          dolor. Praesent suscipit, ante vitae bibendum facilisis, nibh felis
          aliquet justo, vel maximus eros mauris non eros. Maecenas malesuada,
          purus eu facilisis tincidunt, mi ante egestas purus, eu fringilla
          lectus nibh quis justo. Cras sodales rhoncus dolor sed vulputate. Sed
          lacus nisl, consequat et pharetra eget, ultricies a odio.
        </p>
      </div>
      <SkillList data={data} />
    </div>
  );
};

export default Skills;
