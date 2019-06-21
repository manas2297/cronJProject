let displayValue;
let result;
function inputNumber(num){
	displayValue = document.calculator.userInput.value;
	// console.log(displayValue);
	document.calculator.userInput.value = displayValue + num;
}
function calculate(){
	displayValue = document.calculator.userInput.value;
	result = eval(displayValue);
	
	if(displayValue.includes("/0")){
		document.calculator.userInput.value="ERROR";
		
	}
	else{
			document.calculator.userInput.value = result.toFixed(3);
	}
	
}
//reset
function reset(){
	let clearInput = "";
	document.calculator.userInput.value = clearInput;
}