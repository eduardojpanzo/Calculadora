const calc_keyboard = document.querySelector('#keyboard');
const model_key = document.querySelector('#models .keyboard_key');
const calculationInput = document.querySelector('.calculation input');
const aftermath = document.querySelector('.aftermath');

const keys = [
    {type:'function',view:'C',value:'clear()'},
    {type:'function',view:'DEL',value:'deleteExp()'},
    {type:'operator',view:'%',value:'%'},
    {type:'operator',view:'➗',value:'/'},
    {type:'number',view:'7',value:'7'},
    {type:'number',view:'8',value:'8'},
    {type:'number',view:'9',value:'9'},
    {type:'operator',view:'✖',value:'*'},
    {type:'number',view:'4',value:'4'},
    {type:'number',view:'5',value:'5'},
    {type:'number',view:'6',value:'6'},
    {type:'operator',view:'➖',value:'-'},
    {type:'number',view:'1',value:'1'},
    {type:'number',view:'2',value:'2'},
    {type:'number',view:'3',value:'3'},
    {type:'operator',view:'➕',value:'+'},
    {type:'number',view:'0',value:'0'},
    {type:'number',view:'00',value:'00'},
    {type:'signal',view:'◦',value:'.'},
    {type:'function',view:'=',value:showResult},
]

let lastNum,lastNumString = '', currentNum,currentNumString, result, operatorAtived= false;

keys.map((key,index)=>{
    const keyItem = model_key.cloneNode(true);

    keyItem.setAttribute('data-type',key.type);
    keyItem.value = key.value;
    keyItem.innerHTML = key.view;

    keyItem.addEventListener('click',(e)=>{
        calculationInput.value += keyItem.value;

        //showResult();
    });
    calc_keyboard.append(keyItem);
})

/* function makeMath(op) {
    switch (op) {
        case '+':
            result += lastNum;
            lastNumString = '';
            break;
        case '-':
            result -= lastNum;
            lastNumString = '';
            break;
        case '*':
            result *= lastNum;
            lastNumString = '';
            break;
        case '/':
            result /= lastNum;
            lastNumString = '';
            break;
        default:
            console.log('Ending');
            break;
    }
} */

function firstOperator() {
    lastNum = currentNum;
    result = lastNum;
    operatorAtived = true;
}

function showResult() {
    aftermath.innerHTML = `= ${result}`
}

//Melhor o calculo no fim da digitalização do segundo número em diante... :)