// window.addEventListener('scroll', () => {
//     let parent =  document.getElementById('parallax');
//     let children = parent.getElementsByTagName('div');
//     for(let i = 0; i < children.length; i++) {
//       children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
//     }
//   }, false)

let text = document.getElementById("text");
// let p0 = document.getElementById('p0');
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');
// let p3 = document.getElementById('p3');
// let p4 = document.getElementById('p4');
// let p5 = document.getElementById('p5');
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1.5 + "px";
  p1.style.top = value * 0.4 + "px";
  p2.style.top = value * 0.4 + "px";
  // p2.style.top = value * 0.2 + 'px';
  // p3.style.top = value * 0.3 + 'px';
  // p4.style.top = value * 0.4 + 'px';
  // p5.style.top = value * 0.4 + 'px';
});


// $(window).scroll(function () {
//   if ($(this).scrollTop() > 0) {
//     $(".nav").addClass("sticky");
//   } else {
//     $(".nav").removeClass("sticky");
//   }
// });