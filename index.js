document.querySelector('#nav-toggle').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('visible')
})

var navAnchors = document.querySelectorAll('nav a')
for (var i = 0; i < navAnchors.length; i++) {
  navAnchors[i].addEventListener('click', closeNav)
}

function closeNav () {
  document.querySelector('nav').classList.remove('visible')
}
