const calc_keyboard = document.querySelector('#keyboard');
const model_key = document.querySelector('#models .keyboard_key');
const calculationInput = document.querySelector('.calculation input');
const aftermath = document.querySelector('.aftermath');

const keys = [
    {type:'function',view:'C',value:clear},
    {type:'function',view:'DEL',value:backspace},
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
    {type:'function',view:'=',value:getResolution},
]
//Strings
let numberString = '',operatorAtived;

//Number
let realtyNum,result,timeMath=0;

keys.forEach((key,index)=>{
    const keyItem = model_key.cloneNode(true);

    mountKeyboard(keyItem,key)

    keyItem.addEventListener('click',(e)=>{
        if (isNumberOrSignal(key)) {
            numberString += keyItem.value;
            calculationInput.value += keyItem.value;
        }

        if(isOperator(key)){
            calculationInput.value += keyItem.value;
            if (isfirstOperator()) {
                result = Number(numberString);
                numberString = '';
                timeMath++;
                
                operatorAtived = key.value;
            }
            else {

                if (isWrongExpression()) {
                    aftermath.innerHTML = `= WrongExpression`;
                    defaultValue();
                } else {
                    realtyNum = Number(numberString)
                    numberString = '';
                    
                    makeMath(operatorAtived)
                    
                    operatorAtived = key.value;
                }
            }
           
        }

        if(isFunction(key)){
            key.value();
        }
    });

    calc_keyboard.append(keyItem);
})

function mountKeyboard(keyItem,key) {
    keyItem.setAttribute('data-type',key.type);
    keyItem.value = key.value;
    keyItem.innerHTML = key.view;
}

function makeMath(op) {
    switch (op) {
        case '+':
            result = result + realtyNum;
            break;
        case '-':
            result = result - realtyNum;
            break;
        case '*':
            result = result * realtyNum;
            break;
        case '/':
            result = result / realtyNum;
            break;
        default:
            console.log('Ending');
            break;
    }

    aftermath.innerHTML = `= ${result}`
}

function getResolution() {
   if (!isfirstOperator()) {
       if (isWrongExpression()) {
           aftermath.innerHTML = `= WrongExpression`;
           defaultValue();
           return
       } else {
           realtyNum = Number(numberString)
           makeMath(operatorAtived)
       }
       
   } else {
       result = Number(numberString);
       aftermath.innerHTML = `= ${result}`;
   }

   numberString = `${result}`;
   timeMath = 0;
} 

function isfirstOperator() {
    return timeMath === 0;
}

function backspace() {
    getLastExpression(calculationInput.value);
    console.log();
}


function isWrongExpression() {
    const lastExpretion 
        = getLastExpression(calculationInput.value);
    
    return lastExpretion === operatorAtived
}

function getLastExpression(content) {
    return content.substr(content.length -1)
}

function defaultValue(){
    calculationInput.value = '';
    numberString = '';
    timeMath = 0;
}

function isNumberOrSignal({type}) {
    return type === 'number' || type === 'signal';
}

function isOperator({type}){
    return type === 'operator'
}

function isFunction({type}) {
    return type === 'function'
}

function clear() {
    defaultValue();
    aftermath.innerHTML = ``;
}
//Melhor o calculo no fim da digitalização do segundo número em diante... :)

//criar um var que concatena todos os digitos e se no fim dela tiver um operação deve exibir um erro

//fazer a função de deletar