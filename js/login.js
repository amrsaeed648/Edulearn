// TEAM NOTE: Reset login status whenever someone opens the Login page 
// so the header restores the "Login" button for a fresh authentication try.
sessionStorage.setItem('isLoggedIn', 'false');
sessionStorage.removeItem('currentUser');

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
    // TEAM NOTE: Ignore the Logout button click so it can redirect cleanly
    if (text === 'logout') return;

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

    // TEAM NOTE: Mark user as logged in so they can access course.html, then redirect to Home
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('currentUser', name);

    alert('Account created successfully! Redirecting to Home page...');
    registerForm.reset();
    window.location.href = 'index.html';
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

    // TEAM NOTE: Mark user as logged in so they can access course.html, then redirect to Home
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('currentUser', userData.name);

    alert(`Welcome back, ${userData.name}!`);
    window.location.href = 'index.html'; 
});

// ============================================================================
// ULTIMATE FLOATING LABEL FIX (INLINE STYLE OVERRIDE)
// ============================================================================
document.querySelectorAll('.input-box').forEach((box) => {
    const input = box.querySelector('input');
    const label = box.querySelector('label');
    if (!input || !label) return;

    function checkFloat() {
        // If the input is focused OR has any text typed inside it
        if (document.activeElement === input || input.value.length > 0) {
            label.style.setProperty('top', '-5px', 'important');
            label.style.setProperty('color', '#2b70fa', 'important');
            label.style.setProperty('font-size', '13px', 'important');
        } else {
            // Reset back to center when empty and not clicked
            label.style.removeProperty('top');
            label.style.removeProperty('color');
            label.style.removeProperty('font-size');
        }
    }

    input.addEventListener('focus', checkFloat);
    input.addEventListener('blur', checkFloat);
    input.addEventListener('input', checkFloat);
    
    // Run once on page load
    checkFloat();
});