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

toUpButtonBottom.onclick = function () {
  window.scrollTo(0, 0)
}

toUpButton.onclick = function () {
  window.scrollTo(0, 0)
}

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
    preloader.marginLeft = '203px';
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
