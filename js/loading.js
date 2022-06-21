
window.addEventListener('DOMContentLoaded', e=>{

  const title = document.querySelector('.main-title');
  const header = document.querySelector('header');
  const animeButton = document.querySelector('.anime-button');
  const mainComment = document.querySelector('.main-container p');
  const arrow = document.querySelector('.arrow-fluffy');

  const mainArr = [
    animeButton,
    mainComment,
    arrow,
  ];

  title.classList.add('load-anime');

  setTimeout(() =>{
    header.classList.add('text-in');
  }, 2000);

  mainArr.forEach(item =>{
    setTimeout(() =>{
      item.classList.add('text-in');
      console.log(item);
    }, 3000);


    setTimeout(() =>{
      item.classList.remove('text-in');
      item.style.opacity = '1';

    }, 4500);
  });

  setTimeout(() =>{
    title.classList.remove('load-anime');
    title.style.opacity = '1';
    header.classList.remove('text-in');
    header.style.opacity = '1';
  }, 4500);



});
