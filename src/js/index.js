//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let tiempo =  0;

setInterval(()=>{
    console.log(tiempo);
    tiempo++


//render your react application
ReactDOM.render(<SecondsCounter 
    segundos={tiempo}/>, document.querySelector("#app"));
},1000000000)

