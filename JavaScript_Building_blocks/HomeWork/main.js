var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (let index = 0; index < 5; index++) {
  var imgName = 'images/pic' + (index + 1) + '.jpg'
  var newImage = document.createElement('img');
  newImage.setAttribute('src', imgName);
  thumbBar.appendChild(newImage);
}

function imgChage(e) {
  var imgName = e.target.src;
  displayedImage.src = imgName;
}

thumbBar.addEventListener('click', imgChage)

/* Wiring up the Darken/Lighten button */

function opacityChange(e) {
  if (e.target.className === "dark") {
    overlay.style.backgroundColor = 'black';
    overlay.style.opacity = 0.5;
    e.target.className = 'Light';
    e.target.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = '';
    overlay.style.opacity = 0.5;
    e.target.className = 'dark';
    e.target.textContent = 'Darken';
  }
}

btn.addEventListener('click', opacityChange);