let total = 0
let stringAnswer = '0'
let previousOperator


const screen = document.querySelector('.answer_screen')

function buttonClick(value){
    // isNan (Is Not A Number) calls the handleSymbol function below ie plus, subtract etc
    if(isNaN(value)){
        handleSymbol(value)
    //Else it calls the handleNumber function
    }else{
        handleNumber(value)
    }
    screen.innerText = stringAnswer
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            stringAnswer = '0'
            total = 0
            break
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperator(parseInt(stringAnswer))
            previousOperator = null
            stringAnswer = total
            total = 0
            break
        case '←':
            if(stringAnswer.length === 1){
                stringAnswer = '0'
            }
            else{
                stringAnswer = stringAnswer.substring(0, stringAnswer.length -1)
            }  
            break
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol)
            break
    }
}
function handleMath(symbol){
    if (stringAnswer === '0'){
        return
    }

    const intAnswer = parseInt(stringAnswer)
    
    if(total === 0 ){
        total = intAnswer
    }
    else{
        flushOperator(intAnswer)
    }
    previousOperator = symbol
    stringAnswer = '0'
}
function flushOperator(intAnswer){
    if (previousOperator === '+'){
        total += intAnswer
    }
    else if (previousOperator === '−'){
        total -= intAnswer
    }
    else if (previousOperator === '×'){
        total *= intAnswer
    }
    else if (previousOperator === '÷'){
        total /= intAnswer
    }
}

function handleNumber(numberString){
    if(stringAnswer === '0'){
        stringAnswer = numberString
    }
    else{
        stringAnswer += numberString
    }
}

function init(){
    document.querySelector('.buttons_section').addEventListener("click", function(event){
        buttonClick(event.target.innerText)
    })
}

init()