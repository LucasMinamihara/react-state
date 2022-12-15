import "./ButtonComponent.css";
import { useState } from "react";

function ButtonComponent({ children }) {
  console.log(children);
  const [value, changedValued] = useState(children);

  const changeValues = () => {
    console.log(children);
    changedValued("All values was changed!");
  };

  return (
    <button className="button-color" onClick={changeValues}>
      {value}
    </button>
  );
}

export default ButtonComponent;
