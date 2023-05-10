const formLogin = document.querySelector('#form-login');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const btnLogin = document.querySelector('#btn-login');
const linkSignIn = document.querySelector('.sign-up');
const errorEmail = document.querySelector('.error-email');
const errorPassword = document.querySelector('.error-password');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
});



btnLogin.addEventListener('click', (event) => {
    event.stopPropagation();
    
    errorEmail.textContent = '';
    errorPassword.textContent = '';

    if(!inputEmail.value){
        errorEmail.textContent = 'Preencha o campo Email.'
        return;
    };

    if(!inputPassword.value){
        errorPassword.textContent = 'Preencha o campo Password.'
        return;
    };
    
    window.location = '../home/index.html'
});

linkSignIn.addEventListener('click', (event) => {
    event.stopPropagation();

    window.location = '../sign-up/index.html';
});
