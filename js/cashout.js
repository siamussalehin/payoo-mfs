document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOut = getInputFiledValueById('input-cash-out')
        const pinNumber = getInputFiledValueById('input-cash-out-pin')
        if(pinNumber === 1234){
            const balance = getTextFiledValueById ('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to cash out money')
        }
    })