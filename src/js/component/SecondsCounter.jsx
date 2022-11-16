import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = ({segundos}) => {
	let string = segundos.toString()
	let unidad = string[string.length-1]
	let decena = string[string.length-2]
	let centena= string[string.length-3]
  return (
    <div className="text-center">
		
		<svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>
      
      <button className="btn btn-dark btn-lg">{centena==undefined? "0":centena}</button>
	  <button className="btn btn-dark btn-lg">{decena==undefined? "0":decena}</button>
	  <button className="btn btn-dark btn-lg">{unidad}</button>
	</div>
  );
};

export default SecondsCounter;
