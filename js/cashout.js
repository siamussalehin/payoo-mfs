document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOut = getInputFiledValueById('input-cash-out')
        const pinNumber = getInputFiledValueById('input-cash-out-pin')


        if(isNaN(cashOut)){
            alert('Failed to Cash Out money');
            return;
        }

        if(pinNumber === 1234){
            const balance = getTextFiledValueById ('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            if(cashOut > balance){
                alert('You do not have enough money to cash out');
                return;
            }

            //show transaction history//

            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h4 class ="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
            `
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert('Failed to cash out money')
        }
    })