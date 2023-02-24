document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInputField = document.getElementById('deposit-field');
    const depositFIeld = depositInputField.value

    const deposit = document.getElementById('total-deposit');
    const totalDeposit = deposit.innerText
    deposit.innerText = depositFIeld;
})

//