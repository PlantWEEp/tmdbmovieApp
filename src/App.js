import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import Innerpage from "./Components/InnerPage/Innerpage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Popular" Component={Popular} />
      <Route path="/Innerpage/:InnerpageId" Component={Innerpage} />
    </Routes>
  );
}

export default App;
