
let totalQuantity = 0;
let appleCost = 7;
let mangoCost = 15;
let strawberryCost = 10;
let quantity = 0;
let appleQuantity = 0;
let mangoQuantity = 0;
let strawberryQuantity = 0;
let fruitQuantity = 0;
let totalAmount = 0;
let fruitInput;
let totalAmountSpan;
let quantitySpan;
let fruitListSpan;
let userAmount = 0;
let remainingAmountSpan;
let fruitName;
let appleTotalCost = 0;
let mangoTotalCost = 0;
let strawberryTotalCost = 0;
let userAmountLeft= userAmount;
let testCondition;

function add(fruit){
	userAmount = document.querySelector('#budget').value;
	userAmountLeft = userAmount - totalAmount;
	switch(fruit){
		case 'apple':
		testCondition=appleCost;
		break;
		case 'mango':
		testCondition=mangoCost;
		break;
		default:
		testCondition=strawberryCost;
	}
	if(userAmountLeft>=testCondition){
		fruitName = fruit;

		quantity = htmlInputs();

		if(userAmount > 0){
		quantity++;
		
		fruitSelector(fruitName,quantity);

		}else{
			alert("Please input your budget");
		}

		total();
		
	}else{
		alert("You don't have enough money");
	}
}

function sub(fruit){
	fruitName = fruit; 
	
	quantity = htmlInputs();
	if(quantity > 0){
		quantity--;
		fruitSelector(fruitName,quantity);
	}else
	{
		alert("Quantity is already 0");
	}

	total();
}

function htmlInputs(){
	
	switch(fruitName){
		case "apple":
		fruitInput = document.querySelector('#apple-input');
		quantity = appleQuantity; 
		return quantity;
		
		break;
		case "mango":
		fruitInput = document.querySelector('#mango-input');
		quantity = mangoQuantity;
		return quantity;
		break;
		case "strawberry":
		fruitInput = document.querySelector('#strawberry-input');
		quantity = strawberryQuantity;
		return quantity;
		break;
		default:
		fruitInput = "none";
	}
	
	
}

function fruitSelector(fruit,quantity){
	
	switch(fruit){
		case "apple":
		appleQuantity = quantity;
		appleTotalCost = appleQuantity * appleCost;
		fruitInput.innerHTML = appleQuantity;
		break;
		case "mango":
		mangoQuantity = quantity;
		mangoTotalCost = mangoQuantity * mangoCost;
		fruitInput.innerHTML = mangoQuantity;
		break;
		case "strawberry":
		strawberryQuantity = quantity;
		strawberryTotalCost = strawberryQuantity * strawberryCost;
		fruitInput.innerHTML = strawberryQuantity;
		break;

	}
}

function total(){
	totalQuantity = appleQuantity + mangoQuantity + strawberryQuantity;
	totalAmount = appleTotalCost + mangoTotalCost + strawberryTotalCost;
	totalAmountCall();
}

function totalAmountCall(){
	remainingAmountSpan = document.querySelector('#remaining-amount');
	totalAmountSpan = document.querySelector('#total-amount');
	quantitySpan = document.querySelector('#total-quantity');
	fruitListSpan = document.querySelector('#fruit-list');
	fruitListSpan.innerHTML ="";

		if(appleQuantity > 0 ){
			fruitListSpan.innerHTML += "Apple : " +appleQuantity;
		}
		if(mangoQuantity > 0){
			fruitListSpan.innerHTML += " Mango : " +mangoQuantity;
		}
		if(strawberryQuantity > 0){
			fruitListSpan.innerHTML += " Strawberry : " +strawberryQuantity;
		}
	
	totalAmountSpan.innerHTML = totalAmount + " Rs";

	quantitySpan.innerHTML = totalQuantity;

	remainingAmountSpan.innerHTML = userAmount - totalAmount;

}

