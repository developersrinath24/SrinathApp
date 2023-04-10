import { useState, useEffect, useRef } from "react";

const NewSkill = ({ data }) => {
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => {
    function handleScroll() {
      setIsScrolling(true);
      setRotation((prevRotation) => prevRotation + 1); // increase rotation on scroll
      window.clearTimeout(scrollRef.current);
      scrollRef.current = setTimeout(() => setIsScrolling(false), 100); // debounce scroll end
    }
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    const rotationSpeed = isScrolling ? 2.7 : 0.7; // adjust rotation speed based on scroll state
    const rotationInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + rotationSpeed);
    }, 10);
    return () => clearInterval(rotationInterval);
  }, [isScrolling]);

  const transx = [0, 100, 0, -100];
  const transy = [100, 0, -100, -0];
  const bigtransx = [200, 150, 0, -150, -200, -150, 0, 150];
  const bigtransy = [0, 130, 200, 130, 0, -130, -200, -130];
  return (
    <div className="skills-wrapper">
      <div className="skills-text">Skills</div>
      <div className="skills-list-1" style={{ position: "absolute" }}>
        {data
          .filter((skill) => skill.id < 9)
          .map((element, index) => (
            <div
              className="skill-1"
              key={index}
              style={{
                // transform: `rotate(-${rotation}deg) translateX(${transx[index]}px) translateY(${transy[index]}px) rotate(${rotation}deg)`,
                // transform: `rotate(-${rotation}deg) translateX(0px) translateY(0px) rotate(${rotation}deg)`,
                transform: `rotate(${rotation}deg) translateX(${bigtransx[index]}px) translateY(${bigtransy[index]}px) rotate(-${rotation}deg)`,
              }}
            >
              <img src={element.image_url} width={40} />
            </div>
          ))}
      </div>
      <div className="skills-list-2" style={{ position: "absolute" }}>
        {data
          .filter((skill) => skill.id > 8)
          .map((element, index) => (
            <div
              className="skill-2"
              key={index}
              style={{
                transform: `rotate(-${rotation}deg) translateX(${transx[index]}px) translateY(${transy[index]}px) rotate(${rotation}deg)`,
              }}
            >
              <img src={element.image_url} width={40} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewSkill;
