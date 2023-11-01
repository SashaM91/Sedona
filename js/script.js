const modalElement = document.querySelector('.modal-backdrop'); 
const formElement = document.querySelector('.modal'); 
const orderButtons = document.querySelectorAll('.book-in-button'); 
const closeButton = document.querySelector('.close-modal'); 
const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
}; 
 
const onSubmit = (event) => { 
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    console.log(formData); 
 
 
    try { 
        for (const value of formData.entries()) { 
            console.log(value); 
        } 
        onCloseClick(); 
    } catch (e) { 
        console.log(e); 
    } 
 
}; 
 
orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
closeButton.addEventListener('click', onCloseClick); 
 
 
formElement.addEventListener('submit', onSubmit);