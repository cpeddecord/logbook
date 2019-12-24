import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "antd/es/button";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Button type="primary">Button</Button>
        </header>
      </div>
    </Router>
  );
};

export default App;
