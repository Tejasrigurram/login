import React from "react";
import "./App.css";
import Login from "./Login"; // Import the Login component

const App: React.FC = () => {
  return (
    <div className="App">
      <Login /> {/* Render the Login component here */}
    </div>
  );
};

export default App;
