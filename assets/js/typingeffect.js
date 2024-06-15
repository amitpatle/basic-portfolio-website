// function typeEffect(element, speed) {
//     var text = element.innerHTML;
//     element.innerHTML = "";
  
//     var i = 0;
//     var timer = setInterval(function() {
//       if (i < text.length) {
//         element.append(text.charAt(i));
//         i++;
//       } else {
//         clearInterval(timer);
//       }
//     }, speed);
//   }
  
//   // application
//   var speed = 10;
//   var p = document.getElementById('typingeffect');
//   var delay = p.innerHTML.length * speed + speed;
  
//   // type effect for paragraph
//   typeEffect(p, speed);
  