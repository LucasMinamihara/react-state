import "./App.css";
import BlockComponent from "./Components/BlockComponent";
import ButtonComponent from "./Components/ButtonComponent";

function App() {
  return (
    <>
      <BlockComponent>bloco 1</BlockComponent>
      <BlockComponent>bloco 2</BlockComponent>
      <BlockComponent>bloco 3</BlockComponent>
      <ButtonComponent>Click here to changed values!</ButtonComponent>
    </>
  );
}

export default App;
