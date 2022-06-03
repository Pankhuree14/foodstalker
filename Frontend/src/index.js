import React from "react";
import ReactDOM  from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
// import Foodstalker from "./components/Foodstalker";
// import Header from "./components/Header";
import App from "./components/App"
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();

// const  element= <h1>Hello world!!</h1>;
// ReactDOM.render(<Counter/>, document.getElementById('root'));
// ReactDOM.createRoot(<div>
//     <App/>
// </div>
// ,
//  document.getElementById('root'));