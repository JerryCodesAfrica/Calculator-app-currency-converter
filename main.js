//assigning variables
//calculator codeconst digits = document.getElementById("input-digits"); //Input digits
const result = document.getElementById("result"); //Result
const inputBtn = document.querySelectorAll(".btn"); //Select all buttons
const container = document.querySelector(".container"); //Container
const lightMode = document.querySelector('[alt="light-mode"]'); //Light Mode
const darkMode = document.querySelector('[alt="dark-mode"]'); //Dark Mode
const resetbtn = document.getElementById("reset"); //Reset Button

// Solution of arthimetic opertions on digits
let sol = "";

// Take input digits
let btnInput = "";

// Function for toggle modes
const toggleModes = () => {
	lightMode.addEventListener("click", () => {
		container.classList.remove("dark-mode");
		container.classList.add("default-mode");
		darkMode.classList.add("invert-icon-grey");
		darkMode.classList.remove("invert-icon-white");
		lightMode.classList.remove("invert-icon-grey");
		resetbtn.classList.remove("invert-icon-white");
	});

	darkMode.addEventListener("click", () => {
		container.classList.remove("default-mode");
		container.classList.add("dark-mode");
		lightMode.classList.add("invert-icon-grey");
		darkMode.classList.remove("invert-icon-grey");
		darkMode.classList.add("invert-icon-white");
		resetbtn.classList.add("invert-icon-white");
	});
};

// Evaluate the input digits
const evalString = (str) => {
	try {
		return Function(`return ${str}`)().toString();
	} catch (error) {
		return "ERROR";
	}
};

// Remove last character
const popLastChar = (str) => {
	return str.slice(0, -1);
};

// Clear Value
const clearValue = () => {
	return "";
};

// Calculator
const btnEval = (input) => {
	input.addEventListener("click", (btn) => {
		try {
			let btnValue = btn.target.value;
			result.style.display = "none";

			if (btnValue === "=") {
				sol = evalString(btnInput);
				result.innerText = sol;
				result.style.display = "block";
			} else if (btnValue === "C") {
				btnInput = clearValue();
				sol = clearValue();
				digits.innerText = btnInput;
			} else if (btnValue === "D") {
				btnInput = popLastChar(btnInput);
				digits.innerText = btnInput;
			} else if (btnValue === "R") {
				btnInput = "0";
				digits.innerText = btnInput;
			} else {
				if (btnInput === "0") {
					btnInput = "";
				}
				btnInput += btnValue;
				digits.innerText = btnInput;
			}
		} catch {
			btnInput = "ERROR";
			digits.innerText = btnInput;
		}
	});
};

toggleModes();

inputBtn.forEach(btnEval);


  



























var convertFrom = document.querySelector('#select-currency');
var converto = document.querySelector('#select-currency2');
//
     //
var numerics = document.querySelector('#input-value');

function currencyTocurrency(firstSelect,secondSelect){
  var firstSelect = convertFrom.options[convertFrom.selectedIndex].text;
var secondSelect = converto.options[converto.selectedIndex].text;
//
var currencypair = firstSelect + secondSelect;
//
var marquee = document.querySelector('.mar');
     var convert = numerics.value;
     var result = '';
     var firstpair = '';
     var secondpair = '';
     var thirdpair = '';
     var samepair = '';
   //
   switch (currencypair) {
     case 'NairaDollar':
     firstpair = convert * 0.0025;
     marquee.innerHTML = 'Dollar equivalent of ' + convert + 'NGN is ' + firstpair + 'USD';
     return marquee;
     break;
     case 'NairaEuro':
       secondpair = convert*0.0030;
       result = alert('Euro equivalent of ' + convert + 'NGN is ' + secondpair + 'EUR');
       return result;
       break;
     case 'NairaPounds':
       thirdpair = convert*0.0025;
       result = alert('Pounds equivalent of ' + convert + 'NGN is ' + thirdpair + 'GBP');
       return result;
       break;
     case 'NairaNaira'&& 'DollarDollar'&&'PoundsPounds'&&'EuroEuro':
       samepair = convert*1;
       result = alert(firstSelect + ' equivalent of ' + convert +' '+ firstSelect + ' is ' + samepair +' '+ secondSelect);
       return result;
       break;
 }
};

//
var submitbtn = document.querySelector('.click-submit').addEventListener('click',currencyTocurrency);
