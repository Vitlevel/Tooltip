var myf = document.getElementById('my-form');
var tooltip = document.querySelector('div');
myf.addEventListener("mouseover", function(event) {
	var el = event.target;
	tooltip.style.display = "block";
  var left = el.offsetLeft;
  tooltip.style.left = left + 'px';
  tooltip.innerHTML = event.target.getAttribute("data-tooltip");
});

myf.addEventListener("mouseout", function(event) {
	tooltip.style.display = "none";
});
