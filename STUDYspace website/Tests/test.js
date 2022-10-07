var button = document.getElementById("toggle");

if(button){
  button.addEventListener('click', () => {
    document.body.classList.toggle('night');
    localStorage.setItem('theme', document.body.classList.contains('night') ? 'night' : 'light');
  });
}

if (localStorage.getItem('theme') === 'night') {
    document.body.classList.add('night');
}
