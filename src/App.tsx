import { FC } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { Signup } from "./component/Signup";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Routes>
    </Router>
  );
};
