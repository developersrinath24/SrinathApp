import { useState, useEffect, useRef } from "react";

function CircleRevolve(props) {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const rotationSpeed = isScrolling ? 2 : 0.5; // adjust rotation speed based on scroll state
    const rotationInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + rotationSpeed);
    }, 16);
    return () => clearInterval(rotationInterval);
  }, [isScrolling]);

  return (
    <div style={{ position: "relative" }}>
      {props.elements.map((element, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${
              rotation + index * (360 / props.elements.length)
            }deg)`,
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
}

export default CircleRevolve;
