const calc_keyboard = document.querySelector('#keyboard');
const model_key = document.querySelector('#models .keyboard_key');
const calculationInput = document.querySelector('.calculation input');
const aftermath = document.querySelector('.aftermath');

const keys = [
    {type:'operator',view:'C',value:'clear()'},
    {type:'operator',view:'DEL',value:'deleteExp()'},
    {type:'operator',view:'%',value:'%'},
    {type:'operator',view:'➗',value:'/'},
    {type:'numbeer',view:'7',value:'7'},
    {type:'numbeer',view:'8',value:'8'},
    {type:'numbeer',view:'9',value:'9'},
    {type:'operator',view:'✖',value:'*'},
    {type:'numbeer',view:'4',value:'4'},
    {type:'numbeer',view:'5',value:'5'},
    {type:'numbeer',view:'6',value:'6'},
    {type:'operator',view:'➖',value:'-'},
    {type:'numbeer',view:'1',value:'1'},
    {type:'numbeer',view:'2',value:'2'},
    {type:'numbeer',view:'3',value:'3'},
    {type:'operator',view:'➕',value:'+'},
    {type:'numbeer',view:'0',value:'0'},
    {type:'numbeer',view:'00',value:'00'},
    {type:'signal',view:'◦',value:'.'},
    {type:'operator',view:'=',value:'showResult()'},
]

keys.map((key,index)=>{
    const keyItem = model_key.cloneNode(true);

    keyItem.setAttribute('data-type',key.type);
    keyItem.value = key.value;
    keyItem.innerHTML = key.view;

    keyItem.addEventListener('click',(e)=>{
        calculationInput.value += keyItem.value;
    });

    calc_keyboard.append(keyItem);
})
