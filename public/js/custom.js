var navBackground = document.getElementById('testing123')
var navFontColor = document.querySelector('.testy1')
var navFontColor2 = document.querySelector('.testy2')
var navFontColor3 = document.querySelector('.testy3')
var navFontColor4 = document.querySelector('.testy4')
window.onscroll = function (e) {
  navBackground.style.backgroundColor = '#ffffff'
  navFontColor.style.color = '#000000'
  navFontColor2.style.color = '#000000'
  navFontColor3.style.color = '#000000'
  navFontColor4.style.color = '#000000'
}

$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      navBackground.style.backgroundColor = 'transparent'
      navFontColor.style.color = '#ffffff'
      navFontColor2.style.color = '#ffffff'
      navFontColor3.style.color = '#ffffff'
      navFontColor4.style.color = '#ffffff'
    }
});
