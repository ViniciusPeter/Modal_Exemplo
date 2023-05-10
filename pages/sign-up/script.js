const formSignIn= document.querySelector('#form-sign-in');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const btnSignIn = document.querySelector('#btn-sign-in');
const btnCancel = document.querySelector('#btn-cancel');
const linkSignUp = document.querySelector('.sign-up');

formSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();    
});

btnSignIn.addEventListener('click', (event) => {
    event.stopPropagation();

    if(!inputName.value || !inputEmail.value || !inputPassword.value){
        alert('Preencha os campos Nome, Email e Senha!');
        return;
    };

    window.location = '../sign-in/index.html';
});

btnCancel.addEventListener('click', (event) => {
    event.stopPropagation();
    window.location = '../sign-in/index.html';
});

linkSignUp.addEventListener('click', (event) => {
    event.stopPropagation();
    window.location = '../sign-in/index.html';
});