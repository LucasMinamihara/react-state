import "./BlockComponent.css";
import ButtonComponent from "./ButtonComponent";

function BlockComponent(props) {
  return (
    <div className="background-color">
      <div>{props.children}</div>
    </div>
  );
}

export default BlockComponent;
