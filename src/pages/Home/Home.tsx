import React from "react";
import { SampleComponent } from "../../components";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Home, Below is A Sample Component.</h1>
    <Link to="/redux-sample">Redux Sample</Link>
    <SampleComponent />
  </div>
);

export default Home;
