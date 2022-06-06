const addRecordBtn = document.querySelector('.addRecordBtn');
const backdropModal = document.querySelector('.backdrop__modal');
const back = document.querySelector('.back')
const formModal = document.querySelector('.form__modal');
addRecordBtn.addEventListener('click', () => {
    backdropModal.style.display = "block"
})

back.addEventListener('click', () => {
    formModal.classList.add('removeModal');

    setTimeout(() => {
        backdropModal.style.display = "none";
        formModal.classList.remove('removeModal');
    }, 250);
    
    formModal.classList.remove('displayModal');

})