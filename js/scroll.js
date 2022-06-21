
//スムーススクロール
const links = document.querySelectorAll('a[href^="#"]');
const linksArr = Array.from(links);

function smoothScroll(e){
  const targetId = e.currentTarget.hash;
  e.preventDefault();

  //scrollTarget 各スクロール先id
  const scrollTarget = document.querySelector(targetId);
  //scrollSize 各スクロール先の座標
  const scrollSize = scrollTarget.getBoundingClientRect();
  const posTop = window.pageYOffset + scrollSize.top;

  scrollTo({
    top: posTop,
    left: 0,
    behavior: 'smooth'
  });

  const mobileNavBox = document.querySelector('.mobile-nav-box');
  mobileNavBox.classList.toggle('mobile-nav-toggle');
};
linksArr.forEach(link => {
  link.addEventListener('click', smoothScroll);
});
