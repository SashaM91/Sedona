const modalElement = document.querySelector('.modal-oddzwon'); 
const modalElementKoszt = document.querySelector('.modal-obliczyc-koszt'); 
const formElement = document.querySelector('.modal');  
const orderButtons = document.querySelectorAll('.action-button');  
const orderButtonsKoszt = document.querySelectorAll('.action-button-koszt')
const closeButton = document.querySelectorAll('.close-modal');
const closeButtonX = document.querySelectorAll('.close-modal.x');
const orderButtonObliczyc = document.querySelectorAll('.obliczyc-koszt');
const modalDziekuje = document.querySelector('.modal-Dziekuje-za-twoja-prosbe');
const modalPrzyblizonyKoszt = document.querySelector('.Przyblizony-koszt');
const orderLinks = document.querySelectorAll('.nav-link');
const orderWyslacProsbe = document.querySelectorAll('.obliczyc-koszt.zl40000');
const orderButtonsBlack = document.querySelectorAll('.przeliczyc');

const onClick = () => { 
    modalElement.classList.add('shown'); 
}; 
const onClickKoszt = () => { 
    modalElementKoszt.classList.add('shown'); 

}; 
const onClickDziekuje = () => { 
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalDziekuje.classList.add('shown'); 

}; 

const onClickPrzyblizonyKoszt = () =>{
    modalElementKoszt.classList.remove('shown');
    modalPrzyblizonyKoszt.classList.add('shown');
}

const onCloseClick = () => { 
    modalElement.classList.remove('shown'); 
    modalElementKoszt.classList.remove('shown');
}; 

const onCloseClickX = () =>{
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalDziekuje.classList.remove('shown'); 
}

const onPrzeliczycClick =() =>{
    modalPrzyblizonyKoszt.classList.remove('shown');
    modalElementKoszt.classList.add('shown'); 
}
orderButtons.forEach((orderButton) => { 
    orderButton.addEventListener('click', onClick); 
}); 
 
orderButtonsKoszt.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickKoszt); 
});

orderButtonObliczyc.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickPrzyblizonyKoszt); 
});
closeButton.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onCloseClick); 
});

orderWyslacProsbe.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onClickDziekuje); 
});

closeButtonX.forEach((orderButton) =>{ 
    orderButton.addEventListener('click', onCloseClickX); 
});

orderButtonsBlack.forEach((orderButton) =>{
    orderButton.addEventListener('click', onPrzeliczycClick)
})





// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     effect:'coverflow',
//     centeredSlides: true,
//     direction: 'horizontal',
//     loop: true,
   
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     coverflowEffect: {
// 			rotate: 0,
// 			stretch: 0,
// 			depth: 0,
// 			modifier: 3, // 2,3
// 			slideShadows : false,
// 		},
//     spaceBetween: 50,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type:'fraction',
    // },

//   });

const swiper = new Swiper('.swiper', {
    slidesPerView: 1.3, 
    centeredSlides: true,
    loop: true,
    // spaceBetween: 400,
    pagination: {
          el: '.swiper-pagination',
          type:'fraction',
        },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

