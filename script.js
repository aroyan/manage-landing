const menu = document.getElementById('menu');

function toggleMenu() {
  if (menu.style.visibility === 'hidden') {
    menu.style.visibility = 'visible';
  } else {
    menu.style.visibility = 'hidden';
  }
}
