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


function showSectionById(id){
    //Hide all the sections//
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    //Show the section//
    document.getElementById(id).classList.remove('hidden');
}