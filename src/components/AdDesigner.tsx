import { useState } from "react";

import "../components/AdDesigner.css";

function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("Strawberry");
  const [ darkTheme, setdarkTheme] = useState<boolean>(false)

  let darkThemeClass = "";
  if (darkTheme === true){
    darkThemeClass = "darkClass"
  }
  

  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <div className={"cont " + darkThemeClass}>
        <p className="title">Vote for:</p>
        <p>{flavor}</p>
      </div>
      <div className="flavorButtons">
        <p>What to support</p>
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
      </div>

      <div>
        <p>Color Theme</p>
        <button onClick={() => setdarkTheme(true)} className="button">
          Dark
        </button>
        <button onClick={() =>setdarkTheme(false)} className="button">
          Light
        </button>
      </div>
    </div>
  );
}

export default AdDesigner;
