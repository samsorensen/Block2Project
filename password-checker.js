document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('input')
    const passwordStrength = document.getElementById('strength')

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value
        const strength = checkPasswordStrength(password)
        passwordStrength.textContent = `strength: ${strength}`
    });
});

function checkPasswordStrength(password) {
    if (password.length > 10) {
        return 'strong'
    } else if (password.length > 6) {
        return 'medium'
    } else {
        return 'weak'
    }
}
