//assigning variables
//calculator code
let per = document.querySelector(".percent");
let clr = document.querySelector(".clear");
let del = document.querySelector(".del");
let n7 = document.querySelector(".num7");
let n8 = document.querySelector(".num8");
let n9 = document.querySelector(".num9");
let mtpl = document.querySelector(".multiplication");
let n4 = document.querySelector(".num4");
let n5 = document.querySelector(".num5");
let n6 = document.querySelector(".num6");
let sb = document.querySelector(".sub");
let n1 = document.querySelector(".num1");
let n2 = document.querySelector(".num2");
let n3 = document.querySelector(".num3");
let add = document.querySelector(".add");
let div = document.querySelector(".div");
let n0 = document.querySelector(".num0");
let equ = document.querySelector(".equ");


var SOlve = [per,clr,del]



























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
