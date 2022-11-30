import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import Convertisseur from "./components/Convertisseur/index";

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <nav className="AppBar">
            <img
              className="AppBar-logo"
              src={logo}
              aria-label="people"
              alt="People"
            />
          </nav>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <Convertisseur />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
