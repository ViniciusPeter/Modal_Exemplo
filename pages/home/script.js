const btnAdd = document.querySelector('.btn-add');
const imgLogout = document.querySelector('.logout');
const imgDelete = document.querySelectorAll('.content-table img');
const mask = document.querySelector('.mask');

const modalAdd = document.querySelector('.modal-new-contact');
const modalAddBtnAdd = document.querySelector('.modal-new-contact .btn-green');
const modalAddBtnClear = document.querySelector('.modal-new-contact .btn-red');
const modalAddClose = document.querySelector('.modal-new-contact img');

const modalDelete = document.querySelector('.modal-delete');
const modalDeleteBtnConfim = document.querySelector('.modal-delete .btn-green');
const modalDeleteBtnCancel = document.querySelector('.modal-delete .btn-red');
const modalDeleteClose = document.querySelector('.modal-delete img');

imgLogout.addEventListener('click', (event) => {
    event.stopPropagation();
    window.location = '../sign-in/index.html';
});

const toggleModalAdd = () => {
    mask.classList.toggle('show-mask');
    modalAdd.classList.toggle('show-modal-add');
};

[btnAdd, modalAddBtnAdd, modalAddBtnClear, modalAddClose].forEach( (el) => {
    
    el.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleModalAdd();
        
    });
});

const toggleModalDelete = () => {
    mask.classList.toggle('show-mask');
    modalDelete.classList.toggle('show-modal-delete');
};

[modalDeleteBtnConfim , modalDeleteBtnCancel, modalDeleteClose].forEach( (el) => {
    
    el.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleModalDelete();
    });
});

imgDelete.forEach( (imgDel) => {
    
    imgDel.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleModalDelete();
    });
});

