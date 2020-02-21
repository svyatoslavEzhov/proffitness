export default function() {
	var preloader = document.querySelector('.path'),
  values = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ];
    
setInterval(function() {
  // every time unique color;
  var color = '#';
  for(var i = 0; i < 6; i += 1) {
    color += values[Math.round(Math.random() * (values.length - 1))];
  }
  
  preloader.style.stroke = color; 
  
}, 1700)
}