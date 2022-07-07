
//クリックイベント要素リスト
const clickClassLists = [
  //トップ
  '.anime-button',

  //モーダル
  '.modal-button',
  '.modal-close-button',
  '.modal-container',


  //ナビ
  '.nav-icon-box',
  '.nav-close-button',
  '.nav-list a',

];

const clickElements = clickClassLists.map(clickclassname => document.querySelector(clickclassname));
clickElements.forEach(clickElement =>{

  clickElement.addEventListener('click', e =>{

    //トップ
    const mainTitle = document.querySelector('.main-title');
    const bubbles = document.querySelectorAll('.bubble');


    if(e.currentTarget.className == 'anime-button'){

      bubbles.forEach(bubble =>{
        bubble.classList.toggle('bubble-color-change');
      });

      mainTitle.classList.toggle('title-color-change');

    }


    //モーダル
    const modalContainer = document.querySelector('.modal-container');


    if(e.currentTarget.className == 'modal-button'){
      modalContainer.style.display = 'flex';
      //body.style.overflow = 'hidden';

    }
    if(e.currentTarget.className == 'modal-close-button'){
      modalContainer.style.display = 'none';
      //body.style.overflow = '';


    }


    //ナビ
    const mobileNavBox = document.querySelector('.mobile-nav-box');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');
    const navIconBox = document.querySelector('.nav-icon-box');

    if(e.currentTarget.className == 'nav-icon-box'){
      mobileNavBox.classList.toggle('mobile-nav-toggle');
      mobileNavContainer.classList.toggle('mobile-nav-bg-in');
      navIconBox.classList.toggle('nav-icon-box-toggle');

      //body.style.overflow = 'hidden';
    }
    if(e.currentTarget.className == 'nav-close-button'){
      mobileNavBox.classList.toggle('mobile-nav-toggle');
      mobileNavContainer.classList.toggle('mobile-nav-bg-in');
      navIconBox.classList.toggle('nav-icon-box-toggle');

      //body.style.overflow = '';
    }


  });

});

//navリンククリックで要素toggle
const navLists = document.querySelectorAll('.nav-list a');
navLists.forEach(link => {
  link.addEventListener('click', e =>{

    const mobileNavBox = document.querySelector('.mobile-nav-box');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');
    const navIconBox = document.querySelector('.nav-icon-box');


    mobileNavBox.classList.remove('mobile-nav-toggle');
    mobileNavContainer.classList.toggle('mobile-nav-bg-in');
    navIconBox.classList.toggle('nav-icon-box-toggle');
  });
});
