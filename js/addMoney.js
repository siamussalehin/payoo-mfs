document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();
    
    
    const addMoney = getInputFiledValueById('input-add-money');
    const pinNumber = getInputFiledValueById('input-pin-number')
    
    if(isNaN(addMoney)){
        alert('Failed to add Money');
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFiledValueById('account-balance')
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history//
        const p =document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk New Balance: ${newBalance}`;
        console.log(p);

        //Should be a common function//
        document.getElementById('transaction-container').appendChild(p)
    }
    else{
        alert('Failed to add Money')
    }

})