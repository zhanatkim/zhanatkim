
let numberOne = document.createElement('input')
numberOne.setAttribute('type', 'number');
numberOne.style['background-color'] = '#d8e2dc';

let numberTwo = document.createElement('input')
numberTwo.setAttribute('type', 'number');
numberTwo.style['background-color'] = '#d8e2dc';
numberTwo.style['margin'] = '20px';

let plusButton = document.createElement('button')
  plusButton.innerText = '+'

let minusButton = document.createElement('button')
  minusButton.innerText = '-'
 
let devideButton = document.createElement('button')
  devideButton.innerText = '/'

let multiplyButton = document.createElement('button')
  multiplyButton.innerText = '*'

let percentButton = document.createElement('button')
  percentButton.innerText = '%'

let myResult = document.createElement('p')
  myResult.style['font-weight'] = 'bold'

let allReset = document.createElement('button')
  allReset.innerText = 'Очистить'
  allReset.style['margin'] = '20px';
  allReset.style['background-color'] = '#8e9aaf';
let myMain = document.querySelector('.main');
myMain.appendChild(numberOne);
myMain.appendChild(numberTwo);
myMain.appendChild(plusButton);
myMain.appendChild(minusButton);
myMain.appendChild(devideButton);
myMain.appendChild(multiplyButton);
myMain.appendChild(percentButton);
myMain.appendChild(myResult);
myMain.appendChild(allReset);

 plusButton.addEventListener('click', function(){
   let numOneValue = parseInt(numberOne.value);
   let numTwoValue = parseInt(numberTwo.value);
   myResult.innerText = 'Результат: ' + (numOneValue + numTwoValue);
   })

 allReset.addEventListener('click', function(){
 	myResult.innerText = ''
 	numberOne.value = ''
 	numberTwo.value = ''
   })

 minusButton.addEventListener('click', function(){
 	let numOneValue = parseInt(numberOne.value);
    let numTwoValue = parseInt(numberTwo.value);
    myResult.innerText = 'Результат: ' + (numOneValue - numTwoValue);
    })

 devideButton.addEventListener('click', function(){
 	let numOneValue = parseInt(numberOne.value);
    let numTwoValue = parseInt(numberTwo.value);
 	myResult.innerText = 'Результат: ' + numOneValue / numTwoValue;
    })

 multiplyButton.addEventListener('click', function(){
 	let numOneValue = parseInt(numberOne.value);
    let numTwoValue = parseInt(numberTwo.value);
 	myResult.innerText = 'Результат: ' + numOneValue * numTwoValue;
    })
 percentButton.addEventListener('click', function(){
 	let numOneValue = parseInt(numberOne.value);
    let numTwoValue = parseInt(numberTwo.value);
    myResult.innerText = 'Результат: ' + numOneValue * numTwoValue /100;
    })
