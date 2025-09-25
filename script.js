let emailInput = document.getElementById('email')
let emailAlert = document.getElementById('error-message')
let notifyBtn = document.getElementById('btn')

function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email)
}

notifyBtn.addEventListener('click', e => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if(validateEmail(email)) {
        emailInput.classList.remove('active')
        emailInput.value = ''
        emailAlert.textContent = ''
    } else {
        emailInput.classList.add('active')
        emailAlert.textContent = 'Please provide a valid email address'
    }
})