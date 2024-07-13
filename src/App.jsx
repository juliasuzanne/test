import { useState } from "react";
import { useRef, useEffect } from "react";
import Navigation from "./Navigation";

export default function App() {
  const [nameEntered, setFirstName] = useState("Name");
  const ref = useRef();

  const handleSetName = () => {
    console.log("Set name");
  };
  // useEffect(handleSetName, []);
  return (
    // <div className="title">
    //   <h1 className="text">Welcome</h1>
    // </div>
    <div className="title">
      <Navigation />
      <form autoComplete="off">
        <input
          onChange={(e) => (e.target.value != null ? setFirstName(e.target.value) : "Name")}
          type="text"
          defaultValue={nameEntered}
          className="form-styling"
          name="name"
          required
        />
      </form>
      <div className="test">
        {/* <h1 className="text">Welcome</h1> */}
        <div className="testSkew">
          <p className="form-input">{nameEntered}</p>
        </div>
      </div>
      <div className="testNoSkew">
        <form autoComplete="off">
          <input type="text" defaultValue={nameEntered} className="form-styling2" name="name" required />
        </form>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.05" numOctaves="10" result="noise" seed="0" />
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="10" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.05" numOctaves="10" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.05" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.05" numOctaves="9" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>

          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.05" numOctaves="9" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
