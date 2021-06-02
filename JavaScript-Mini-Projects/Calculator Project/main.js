/*When we add event listener with loggging e.target, it takes the class and shows on the output
but to do it one by one is a very tedious process.
therefore we handle all the buttons using the parent element directly,
due to this, we can select the particular child element we want*/

//1->sense every single button
//2->Get the value of each number. therefore we can get the target as shown below.
//3->Show the number on display after clicking, then overwrite the number if clicked again
//4->if clicked again, we want to concatenate the number .
//5->now we want to access the operators  and also check if the previous key clicked is operator or not
//6->acess the equal operator
//7->do the operation

/* But as we have given a border to the buttons the keypress also can identify the whole parent element.
To prevent this we can use 'closest' condition to traverse all the elements */

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator-keys")
const display = calculator.querySelector(".calculator-display")


keys.addEventListener("click", (e)=>{

	if(!e.target.closest('button')) return

	const key = e.target
	const keyValue = key.textContent
	const displayValue = display.textContent
	const { type } = key.dataset
	const { previousKeyType } = calculator.dataset 


	// Is this a number key?
	if(type === "number-keys"){
		if(parseInt(displayValue) === 0 || previousKeyType === "operator-keys"){
			//Replace the content
			display.textContent = keyValue
		}
		 else {
			display.textContent = displayValue + keyValue
		}
		// calculator.dataset.previousKeyType = 'number-keys'
	}


	//Is this an operator key?
	if(type === "operator-keys"){
		const operatorKeys = keys.querySelectorAll('[data-type="operator-keys"]')
		// will allow only one operator to be selected at a time
		operatorKeys.forEach(el => {el.dataset.state = ''})
		key.dataset.state = 'selected'

		calculator.dataset.firstNum = displayValue
		calculator.dataset.operator = key.dataset.key
		// calculator.dataset.previousKeyType = 'operator-keys'
	}


	//Is this equal operator?
	if(type === "equal-key"){
		// Perform the calculation
		
		const firstNum = calculator.dataset.firstNum
		const operator = calculator.dataset.operator
		const secondNum = displayValue
		display.textContent = calculateOperation(firstNum, operator, secondNum)
	}

	if(type === "clear-key"){
		display.textContent =  "0"
	}

	calculator.dataset.previousKeyType = type
})













function calculateOperation(firstNum, operator, secondNum){

	firstNum = parseInt(firstNum)
	secondNum = parseInt(secondNum)

		let result = ''
		if(operator === "plus") return firstNum + secondNum
		if(operator === "minus") return firstNum - secondNum
		if(operator === "times") return firstNum * secondNum
		if(operator === "divide") return firstNum / secondNum

}