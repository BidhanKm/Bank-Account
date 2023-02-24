document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInputField = document.getElementById('deposit-field');
    const depositFieldString = depositInputField.value
    const depositField = parseFloat(depositFieldString);

    const deposit = document.getElementById('total-deposit');
    const totalDepositString = deposit.innerText
    const totalDeposit = parseFloat(totalDepositString);

    const currentBalance = depositField + totalDeposit;

    deposit.innerText = currentBalance;
    
//  add balance

const balance = document.getElementById('balance-field');
const totalBalanceString = balance.innerText;
const totalBalance = parseFloat(totalBalanceString)

const currentTotalBalance = totalBalance + depositField;
balance.innerText = currentTotalBalance;







depositInputField.value = "";

})

