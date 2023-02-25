document.getElementById('btn-deposit').addEventListener('click', function () {
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
// witdhdraw section

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const witdhdrawInputfield = document.getElementById('withdraw-field');
    const witdhdrawInputfieldString = witdhdrawInputfield.value;
    const withdrawValue = parseFloat(witdhdrawInputfieldString);

    witdhdrawInputfield.value = '';

    if (isNaN(withdrawValue)) {
        alert('please provide valid number')
        return;
    }

    const witdhdrawTextField = document.getElementById('total-widthdraw');
    const witdhdrawTextFieldString = witdhdrawTextField.innerText;
    const witdhdrawText = parseFloat(witdhdrawTextFieldString)


    // witdhdraw balance
    
    const balance = document.getElementById('balance-field');
    const totalBalanceString = balance.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if (withdrawValue > totalBalance) {
        alert('insufficient balance')
        return;
    }

    const currentWitdhdraw = withdrawValue + witdhdrawText;
    witdhdrawTextField.innerText = currentWitdhdraw;

    const currentTotalWitdhdraw = totalBalance - withdrawValue;
    balance.innerText = currentTotalWitdhdraw;
   
})









