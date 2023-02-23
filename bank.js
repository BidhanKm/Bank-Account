// add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    
const email = document.getElementById('email-field')
const emailField = email.value;

const password = document.getElementById('password-field')
const passwordField = password.value;

if (emailField === "bidhan@gmail.com" && passwordField === "bidhan") {
    console.log('valid user')
}
else{
    console.log('invalid user')
}
})

// console.log(passwordField)

