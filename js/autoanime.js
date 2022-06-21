

//ボーダースクロール
function borderScroll(e){
  const careerBorder = document.querySelector('.career-border');
  const profileCareerBox = document.querySelector('.profile-career-box');

  const careerBox = profileCareerBox.getBoundingClientRect();
  const careerBoxHeight = careerBox.height;
  const careerBoxTopPosition = window.pageYOffset + careerBox.top; //トップからboxまでの距離

  const userScrollPosition = pageYOffset; //ユーザーがスクロールしてる現在位置
  const differenceSize = userScrollPosition - careerBoxTopPosition + 400;//スクロールした分

  const percentage = Math.floor(differenceSize / careerBoxHeight * 100);

  careerBorder.style.height = `${percentage}%`;

  if(percentage > 100){
    window.removeEventListener('scroll', borderScroll);
  }

};



//監視対象要素リスト
const classLists = [
  //アバウト
  '.about-line-left',
  '.about-line-right',
  '.about-section-title',
  '.about-text-box p',

  //プロフィール
  '.profile-section-title',
  '.profile-image',
  '.profile-text-box td',
  '.career-index-box h3',
  '.profile-career-box p',
  '.profile-career-box h4',
  '.round-icon',
  '.career-border',

  //skill
  '.skill-section-title',
  '.skill-text-box p',
  '.chart-text-box p',
  '.chart-line',


  //work
  '.work-section-title',
  '.work-text-box p',
  '.work-image',

  //ナビ
  '.observer-box',
  '.about-box', //モバイルナビbg入れるための監視
  '.main-container',　//モバイルナビbg入れるための監視



];

//取得した値で新しく配列作成 elementsのkeyに各取得した値入っている
const elements = classLists.map(classname => document.querySelectorAll(classname));

const option = {
  rootMargin: '-120px', //元100
  threshold: 0.25,
};

const borderOption = {
  threshold: 0.25,
};

//全てのelementをobserver生成と監視
elements.forEach(e =>{
  e.forEach(element =>{

    const arr = ['about-line-left','about-line-right','round-icon','career-border','main-container','chart-line'];
    if(arr.includes(element.className)){ //配列内で一致しているかtrue,false判定
      new IntersectionObserver(callBack,borderOption).observe(element);
    }else{
      new IntersectionObserver(callBack,option).observe(element);
    }

  })
});

//要素がエリアに入ったかチェックし各要素別に関数実行かその場で実行
function callBack(entries){
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      const element = entry.target;


      //slidein　配列
      const slideArr = [
        'about-section-title',
        'about-text',
        'profile-image',
        'round-icon',
        'work-image',
        'TD',
        'P',
        'H3',
        'H4',
      ];

      //emergein 配列
      const emergeArr = [
        'profile-section-title',
        'skill-section-title',
        'work-section-title',
      ];


      //共通＊テキストスライド
      if(slideArr.includes(element.className) || slideArr.includes(element.tagName)){
        element.classList.add('text-in');
      }
      //共通＊セクションタイトルイン
      if(emergeArr.includes(element.className)){
        element.classList.add('title-in');
      }

      //about
      if(element.className == 'about-line-left' || element.className == 'about-line-right'){
        element.classList.add('about-line-in');
      }

      //profile
      if(element.className == 'career-border'){
        window.addEventListener('scroll', borderScroll);
      }

      //skill
      if(element.className == 'chart-line'){
        element.classList.add('chart-line-in');
      }


      //nav
      if(element.id){
        const currentActiveIndex = document.querySelector('.active-link');

        if(currentActiveIndex !== null){
          currentActiveIndex.classList.remove('active-link');
        }

        const newActive = document.querySelector(`a[href='#${element.id}']`);
        newActive.classList.add('active-link');

      }
      if(element.className == 'about-box'){
        const mobileNavBg = document.querySelector('.mobile-nav-container');
        mobileNavBg.classList.add('mobile-nav-bg-in');
      }
      if(element.className == 'main-container'){
        const mobileNavBg = document.querySelector('.mobile-nav-container');
        mobileNavBg.classList.remove('mobile-nav-bg-in');
      }





    }
  });
}
