//★現在のコンテンツのリンクを色変える

const boxs = document.querySelectorAll('.observer-box');
const activeoptions = {
  rootMargin: '-100px',
  threshold: 0
}
const observer = new IntersectionObserver(callBack, activeoptions);
// それぞれのboxを監視する
boxs.forEach(box => {
  observer.observe(box);
});


function callBack(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      active(entry.target);
    }
  })
}

function active(target){
  //既にアクティブな要素を取得
  const currentActiveIndex = document.querySelector('.nav-list .active-link');
  if(currentActiveIndex !== null){
    currentActiveIndex.classList.remove("active-link");
  }


  const newActive = document.querySelector(`a[href='#${target.id}']`);
  newActive.classList.add('active-link');


}
