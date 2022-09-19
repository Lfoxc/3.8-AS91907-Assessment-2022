//Random website name for checkbox interactive

window.addEventListener('load', gentext);

function gentext() {
  var social = ['Youtube', 'Instagram', 'Facebook', 'Twitter', 'Snapchat', 'Tik Tok', 'Discord', 'Pinterest', 'Spotify', 'Netflix', 'Reddit'];

  var lab = document.getElementById('media');

  lab.innerHTML = social[Math.floor(Math.random() *social.length)]
}
