import "./App.scss";
import { Navbar } from "./Components/Navbar";
import { ContextFun } from "./Context/ContextProvider";
import { Home } from "./Components/Home/Home";
export default function App() {
  return (
    <>
      <ContextFun>
        <Navbar />
        <Home />
      </ContextFun>
    </>
  );
}
