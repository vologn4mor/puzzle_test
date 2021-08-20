$(function(){
  $('.classHover').hover(
    function(e){
      $(this).find('.fourthBlockMainFirstImg').css('display', 'none');
      $(this).find('.fourthBlockMainFirstDiv').css('display', 'block');

    },function(e){
      $(this).find('.fourthBlockMainFirstImg').css('display', 'block');
      $(this).find('.fourthBlockMainFirstDiv').css('display', 'none');
    });
    $('.toUpButton').click(function(){
      $('html').animate({scrollTop: 0}, 500);
      return false;
    });
    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
      if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
        $('.parallax').css({'background-attachment':'inherit'})
      }
      var winHeight = $(window).height();
      var target1 = $('#fourthBlockMainFirst');
      var targetPos1 = target1.offset().top + 175;
      var scrollToElem1 = targetPos1 - winHeight;
      var target2 = $('#fourthBlockMainSecond');
      var targetPos2 = target2.offset().top + 175;
      var scrollToElem2 = targetPos2 - winHeight;
      var target3 = $('#fourthBlockMainThird');
      var targetPos3 = target3.offset().top + 175;
      var scrollToElem3 = targetPos3 - winHeight;
      var target4 = $('#fourthBlockMainFourth');
      var targetPos4 = target4.offset().top + 175;
      var scrollToElem4 = targetPos4 - winHeight;


      $(window).scroll(function(){
        var winScrollTop = $(this).scrollTop();
        if(winScrollTop > scrollToElem1 && winScrollTop < scrollToElem1 + 300){
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainFirst').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem2 && winScrollTop < scrollToElem2 + 300){
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainSecond').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem3 && winScrollTop < scrollToElem3 + 300){
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainThird').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
        if(winScrollTop > scrollToElem4 && winScrollTop < scrollToElem4 + 300){
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstImg').css('display', 'none');
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstDiv').css('display', 'block');
        }
        else {
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstImg').css('display', 'block');
          $('#fourthBlockMainFourth').find('.fourthBlockMainFirstDiv').css('display', 'none');
        }
  });
    }

})

// $(function(){
//   var img;
//   var div;
//   $('.classHover').hover(
//     function(e){
//       img = null;
//       div = null;
//       img = event.target.querySelector('.fourthBlockMainFirstImg');
//       div = event.target.querySelector('.fourthBlockMainFirstDiv');
//       img.style.display = 'none';
//       div.style.display = 'block';
//     },function(e){
//       img.style.display = 'block';
//       div.style.display = 'none';
//     });
// })

// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
// function scrolled() {
//   var pageY = window.pageYOffset;
//   if(pageY > 0 && pageY < 1700) {
//     colorMenu(1);
//     return;
//   }
//   if(pageY > 1700 && pageY < 3200){
//     colorMenu(3);
//     return;
//   }
//   if(pageY > 3200 && pageY < 5000){
//     colorMenu(5);
//     return;
//   }
//   if(pageY > 5000){
//     colorMenu(7);
//     return;
//   }
// }

// function colorMenu(id) {
//   var menu = document.getElementById('secondBlockMenu').childNodes;
//   let value = id - 2;
//   if(id != 1 && menu[value].innerText[0] == "—"){
//     menu[value].innerText = menu[value].innerText.slice(1);
//     menu[value].classList.remove('blue');
//   }
//   value = id + 2;
//   if(id != 7 && menu[value].innerText[0] == "—"){
//     menu[value].innerText = menu[value].innerText.slice(1);
//     menu[value].classList.remove('blue');
//   }
//   if(menu[id].innerText[0] != "—"){
//     menu[id].innerHTML = "—" + menu[id].innerText;
//     menu[id].classList.add('blue');
//   }
// }

// function colorMenu(id) {
//   var menu = document.getElementById('secondBlockMenu').childNodes;
//   for(let i = 1; i <=7; i += 2){
//     if(i != id && menu[i].innerText[0] == "—"){
//       menu[i].innerText = menu[i].innerText.slice(1);
//       menu[i].classList.remove('blue');
//       console.log(1);
//     }
//     console.log(2);
//   }
//   if(menu[id].innerText[0] != "—"){
//     menu[id].innerHTML = "—" + menu[id].innerText;
//     menu[id].classList.add('blue');
//   }
// }

// function over(e) {
//   console.log(event.target)
//   if(event.target.querySelector('.fourthBlockMainFirstImg').style.display != 'none'){
//   event.target.querySelector('.fourthBlockMainFirstImg').style.display = 'none';
//   event.target.querySelector('.fourthBlockMainFirstDiv').style.display = 'block';
// }
// }
//
// function out(e) {
//   event.target.querySelector('.fourthBlockMainFirstImg').style.display = 'block';
//   event.target.querySelector('.fourthBlockMainFirstDiv').style.display = 'none';
//
// }

//
// document.querySelectorAll('.fourthBlock')
//
// document.getElementById('fourthBlockMainFirst').onmouseover = function() {
//   document.getElementById('fourthBlockMainFirstImg').style.display = 'none';
//   document.getElementById('fourthBlockMainDiv').style.display = 'block';
// }
//
// document.getElementById('fourthBlockMainFirst').onmouseout = function() {
//   document.getElementById('fourthBlockMainFirstImg').style.display = 'block';
//   document.getElementById('fourthBlockMainDiv').style.display = 'none';
// }



function randomRotateAndOpacity() {
  document.getElementById('firstLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('secondLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('thirdLine').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
  document.getElementById('firstLine').style.transform = "rotate(" + (Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3)) + "deg)";
  document.getElementById('secondLine').style.transform = "rotate(" + (Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3)) + "deg)";
  document.getElementById('thirdLine').style.transform = "rotate(" + (Math.floor(Math.random() * (3 - (-3) + 1) ) + (-3)) + "deg)";

  coords = (Math.floor(Math.random() * (3 - 2 + 1)) + 2);
  document.getElementById('secodLineCircle').style.top =  document.getElementById('secodLineCircle').style.left =
  document.getElementById('firstLineCircle').style.top =  document.getElementById('firstLineCircle').style.left = -(coords - 1) + "px";
  document.getElementById('secodLineCircle').style.border = document.getElementById('firstLineCircle').style.border = coords + "px solid #3335CF";

   document.getElementById('firstLineCircle').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;
   document.getElementById('secodLineCircle').style.opacity = Math.floor(Math.random() * (1 - 0.2 + 1) ) + 0.2;

  setTimeout(randomRotateAndOpacity, 2500);
}

// toUpButtonBottom.onclick = function () {
//   window.scrollTo(0, 0)
// }
//
// toUpButton.onclick = function () {
//   window.scrollTo(0, 0)
// }

// menuFirst.onclick = function () {
//   window.scrollTo(0, 977);
// }
//
// menuSecond.onclick = function() {
//   window.scrollTo(0, 2113);
// }
//
// menuThird.onclick = function() {
//   window.scrollTo(0, 3441);
// }
//
// menuFourth.onclick = function() {
//   window.scrollTo(0, 5999);
// }

setTimeout(function(){
  let preloader = document.getElementById('preloaderLogo').style;
  console.log(document.documentElement.clientWidth);
  let width = document.documentElement.clientWidth;
  preloader.fontSize = '28px';
  if ( width > 1137 ) {
    preloader.marginLeft = '100px';
    console.log(3)
  }
  if (width > 1036 && width <= 1136){
    preloader.marginLeft = '103px';
    console.log(1)
  }
  if (width < 1036) {
    preloader.marginLeft = '63px';
    console.log(2)
  }
  if (width < 457) {
    preloader.marginLeft = '33px';
    console.log(2)
  }

  preloader.marginTop = '26px';
  preloader.top = '0';
  preloader.left = '0';
}, 2000);

setTimeout(function(){
  document.getElementById('preloader').style.opacity = '0';
}, 2500);

setTimeout(function(){
  document.getElementById('preloader').style.display = 'none';
}, 3000);
