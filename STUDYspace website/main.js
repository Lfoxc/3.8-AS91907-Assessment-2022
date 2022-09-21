//Random website name for checkbox interactive

window.addEventListener('load', gentext);

function gentext() {
  var social = ['Youtube', 'Instagram', 'Facebook', 'Twitter', 'Snapchat', 'Tik Tok', 'Discord', 'Pinterest', 'Spotify', 'Netflix', 'Reddit'];

  var lab = document.getElementById('media');

  lab.innerHTML = social[Math.floor(Math.random() *social.length)]
}

//FAQ accordian

const acc_btns = document.querySelectorAll('.accordian-header');
const acc_contents = document.querySelectorAll('.accordian-body');

acc_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    acc_contents.forEach((acc) => {
      if(e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
        acc.classList.remove('active');
        acc_btns.forEach(btn => btn.classList.remove('active'));
      }
    })

    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    btn.classList.toggle('active');
  })
})

window.onclick = (e) => {
  if (!e.target.matches(".accordian-header")) {
    acc_btns.forEach(btn => btn.classList.remove('active'));
    acc_contents.forEach(acc => acc.classList.remove('active'));
  }
}


//Contact form
