import { useState } from "react";
import "./App.css";
import CustomCursor from "./components/customCursor";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="main">
      <CustomCursor isHovered={isHovered} />
      <h1
        className="dune-logo"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        Tesract
      </h1>
      <footer className="lato-regular footer">
        Under Development &copy; Tesract LLC 2024
      </footer>
    </div>
  );
}

export default App;
