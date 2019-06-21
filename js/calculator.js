let displayValue;
let flag=0;
let result;
function inputNumber(num){
    if(flag===1){
        reset();
        displayValue = document.calculator.userInput.value;
	// console.log(displayValue);
    document.calculator.userInput.value = displayValue + num;
    flag=0;
    }else{
        displayValue = document.calculator.userInput.value;
	// console.log(displayValue);
    document.calculator.userInput.value = displayValue + num;
    }
	
}
function calculate(){
	displayValue = document.calculator.userInput.value;
    result = eval(displayValue);
    flag =1;
	
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
    // console.log(flag);
    
    
}