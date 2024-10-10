const grid = document.querySelector(".grid");

function buildGrid(dimension) {

	grid.innerHTML = '';
	const squareDimension = parseInt(960/dimension) ;
	
	for (let i = 0; i < dimension*dimension; i++) {
		const square = document.createElement("div");
		
		square.setAttribute("style", "height: " + squareDimension + "px; width: " + squareDimension + "px; background-color: green");
		
		square.addEventListener('mouseenter', () => {
			square.style.backgroundColor =  "black";
		});
		
		square.addEventListener('mouseleave', () => {
			square.style.backgroundColor =  "green";
		});
		
		grid.appendChild(square) ;
	}
	
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
	const chosenDimension = prompt("Enter number of squares.");
	if (isNaN(Number(chosenDimension))) {
		alert("ERROR: Please enter a number.") ;
	} else {
		buildGrid(Number(chosenDimension));
	}
})
