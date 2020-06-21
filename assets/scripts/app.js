const defaultResult =0;
let currentResult = defaultResult;
let logEntries = [];

const usrInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text)
{
	currentResultOutput.textContent = result;
	currentCalculationOutput.textContent = text;
}

//lấy giá trị input từ trường input file
function getUserNumberInput(){
	return parseInt(usrInput.value);
}

//Tạo và viết hàm tính toán
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
	const calcDescription =`${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult,calcDescription);//hàm này được gọi từ vender.js
}
//Viết một function để tái sử dụng cho các trường hợp muốn truy cập vào dữ liệu của đối tượng
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation);
	console.log(logEntries);
}
function add(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult + enteredNumber;
	createAndWriteOutput('+',initialResult,enteredNumber);
	writeToLog("ADD",initialResult,enteredNumber,currentResult);
}
function subtract(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult - enteredNumber
	createAndWriteOutput('-',initialResult, enteredNumber);
	writeToLog("SUBTRACT",initialResult,enteredNumber,currentResult);
}
function multiply(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult  = currentResult * enteredNumber;
	createAndWriteOutput('*',initialResult,enteredNumber);
	writeToLog("MULTIPLY",initialResult,enteredNumber,currentResult);
}
function divide(){
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult = currentResult / enteredNumber;
	createAndWriteOutput('/',initialResult,enteredNumber);
	writeToLog("DIVIDE",initialResult,enteredNumber,currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

