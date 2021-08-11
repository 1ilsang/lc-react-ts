import "./App.css";
import { FunctionComponent } from "react";
import Container from "./Container";

const App: FunctionComponent<{}> = () => {
  return (
    <Container name={"App"}>
      <h1>TSX App</h1>
    </Container>
  );
};

export default App;
