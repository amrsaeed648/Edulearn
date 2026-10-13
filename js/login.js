const logregBox = document.querySelector('.logreg-box');
const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

const regName = document.getElementById('reg-name');
const regEmail = document.getElementById('reg-email');
const regPass = document.getElementById('reg-pass');
const termsCheck = document.getElementById('terms-check');
const regError = document.getElementById('reg-error');

const loginEmail = document.getElementById('login-email');
const loginPass = document.getElementById('login-pass');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!\%*?&_]{8,}$/;

document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const text = target.textContent.toLowerCase().trim();
    const href = target.getAttribute('href') || '';

    if (href.includes('#signup') || text === 'sign up' || text === 'register') {
        if(target.tagName === 'A') e.preventDefault(); 
        logregBox.classList.add('active');
        window.location.hash = 'signup';
        
    } else if (href.includes('#signin') || text === 'sign in' || text === 'login') {
        if(target.tagName === 'A') e.preventDefault();
        logregBox.classList.remove('active');
        window.location.hash = 'signin';
    }
});

if (window.location.hash === '#signup') {
    logregBox.classList.add('active');
}

    registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    regError.style.display = 'none'; // Reset error message on new attempt

    const name = regName.value.trim();
    const email = regEmail.value.trim().toLowerCase();
    const password = regPass.value;

    if (!email.endsWith('@gmail.com')) {
        regError.textContent = 'Error: Email must end with @gmail.com';
        regError.style.display = 'block';
        return;
    }

    if (!passwordRegex.test(password)) {
        regError.textContent = 'Error: Password must be 8+ chars, with 1 uppercase, 1 number, and 1 symbol.';
        regError.style.display = 'block';
        return;
    }

    if (!termsCheck.checked) {
        regError.textContent = 'Error: You must agree to the terms & conditions.';
        regError.style.display = 'block';
        return;
    }

    if (localStorage.getItem(email)) {
        regError.textContent = 'Error: An account with this email already exists!';
        regError.style.display = 'block';
        return;
    }

    const userData = { name: name, password: password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert('Account created successfully! Please Sign In.');
    registerForm.reset();
    logregBox.classList.remove('active');
    window.location.hash = 'signin';
});


    loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginEmail.value.trim().toLowerCase();
    const password = loginPass.value;
    const storedAccountData = localStorage.getItem(email);

    if (!storedAccountData) {
        alert('No account found with this email. Please Sign Up.');
        return;
    }

    const userData = JSON.parse(storedAccountData);

    if (userData.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    alert(`Welcome back, ${userData.name}!`);
});