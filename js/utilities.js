/**
 * Common shared functions here
 */

// function getInputFiledValueById(){
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }


function getInputFiledValueById(id) {
const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue)
return inputNumber;
}

function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}