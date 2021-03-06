import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-9 text-center">Main</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
