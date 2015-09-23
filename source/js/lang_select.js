(function(){
  'use strict';

  function changeLang(e){
    e.preventDefault();
    var lang = this.value;
    var canonical = this.dataset.canonical;
    if (lang === 'zh-cn') lang = '';
    if (lang) lang += '/';

    location.href = '/' + lang + canonical;
  }

  document.getElementById('lang-select').addEventListener('change', changeLang);
})();