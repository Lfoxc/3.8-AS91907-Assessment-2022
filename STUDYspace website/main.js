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
};


//Random website name for checkbox interactive

function gentext() {
  var social = ['Youtube', 'Instagram', 'Facebook', 'Twitter', 'Snapchat', 'Tik Tok', 'Discord', 'Pinterest', 'Spotify', 'Netflix', 'Reddit'];

  var lab = document.getElementById('media');

  lab.innerHTML = social[Math.floor(Math.random() * social.length)];
};

gentext();


//Timer interactive
var start = document.querySelector('#start');

var m = document.getElementById("minute");
var s = document.getElementById("sec");

var numLabel = document.getElementById("count");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timecheck();
        }, 1000);
    }
    startInterval();

    function disableinput() {
      start.disabled = true;
      start.innerHTML = `---`;
      m.disabled = true;
      s.disabled = true;
    }

    disableinput();
})

function timecheck() {
  if(m.value > 10) {
    m.value = 10;
  } else if(s.value > 60) {
    s.value = 60;
  } else if(m.value >= 10 && s.value > 0) {
    m.value = 9;
  }
  timer();
}

function timer(){
    if(m.value == 0 && s.value == 0){
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    }
    displayCount();
}

function displayCount() {
  numLabel.innerHTML = `${m.value}:${s.value}`;

  if(m.value < 10 && s.value < 10) {
    numLabel.innerHTML = `0${m.value}:0${s.value}`;
  } else if(s.value < 10) {
    numLabel.innerHTML = `${m.value}:0${s.value}`;
  } else if(m.value < 10) {
    numLabel.innerHTML = `0${m.value}:${s.value}`;
  };

  if(m.value == 0 && s.value > 10){
    numLabel.innerHTML = `00:${s.value}`;
  } else if(m.value == 0 && s.value < 10) {
    numLabel.innerHTML = `00:0${s.value}`;
  }

  if(m.value == 0 && s.value == 0) {
    start.disabled = false;
    start.innerHTML = `Start`;
    m.disabled = false;
    s.disabled = false;
    clearInterval(startTimer);
  }
}
