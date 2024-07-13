import "./CSS/navbarcss.css";
import { useRef, useState } from "react";

export default function Navigation() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  return (
    <div className="panels" onMouseDown={() => setHovered(!hovered)}>
      <div className={`${hovered ? "panel1" : "panel1animate"}`}>
        <a href="https://www.juliasuzannegrimes.com">home</a>
      </div>
      <div className={`${hovered ? "panel2" : "panel2animate"}`}>search</div>
      <div className={`${hovered ? "panel3" : "panel3animate"}`}>feed</div>
      <div className={`${hovered ? "panel4" : "panel4animate"}`}>random</div>
    </div>
  );
}
