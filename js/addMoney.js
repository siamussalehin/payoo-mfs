document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();
    
    
    const addMoney = getInputFiledValueById('input-add-money');
    const pinNumber = getInputFiledValueById('input-pin-number')
    

    if(pinNumber === 1234){
        const balance = getTextFiledValueById('account-balance')
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add Money')
    }

})