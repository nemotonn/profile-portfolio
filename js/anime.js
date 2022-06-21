
const bubbleSection = document.querySelector('.bubble-anime');
console.log(bubbleSection);
const size = 20;
const elArr = [];

//作成時のバブルの位置、バブルの作成している
for(let i = 0; i < size; i++){
  const x = Math.random() * window.innerWidth ;
  const y = Math.random() * window.innerHeight ;
  // const bubbleSize = Math.floor(Math.random() * 101 - 10) + 10;
  const bubbleSize = Math.floor(Math.random() * 70 - 10) + 10;

  elArr[i] = document.createElement('div');
  elArr[i].classList.add('bubble');
  elArr[i].style.width = `${bubbleSize}px`;
  elArr[i].style.height = `${bubbleSize}px`;
  elArr[i].style.left = `${x}px`;
  elArr[i].style.top = `${y}px`;

  bubbleSection.appendChild(elArr[i]);


}

let tmOld = 0;
const step = function(tm){
  let tmDif = tm - tmOld;
  if(tmDif > 1000){tmDif = 0;}
  tmOld = tm;

  elArr.forEach((el,key) => {
    const xEl = parseFloat(el.style.left);
    const yEl = parseFloat(el.style.top);

    let x1 = xEl ;
    let y1 = yEl - (tmDif / 40);

    if(y1 < -100){
      x1 = Math.random()*window.innerWidth ;
      y1 = window.innerHeight ;
    }
    el.style.left = `${x1}px`;
    el.style.top = `${y1}px`;

  });

  //最初のアニメーション実行
  requestAnimationFrame(step);

};
requestAnimationFrame(step);
