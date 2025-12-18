// JavaScript Document
var elunMsg     = document.getElementById('unFeedback');
var elpwdMsg    = document.getElementById('pwdFeedback');
var elUsername  = document.getElementById('username');
var elPwd       = document.getElementById('password');
var elunGroup   = document.getElementById('unGroup');
var elpwdGroup  = document.getElementById('pwdGroup');

function checkInput(group, value, minLength, label, elMsg) {
  var val = value.value.trim();
  group.classList.remove('has-error','has-success');
  if (!val) {
    elMsg.textContent = '';
  } else if (val.length < minLength) {
    elMsg.textContent = label + ' must be ' + minLength + ' characters or more!';
    group.classList.add('has-error');
  } else {
    elMsg.textContent = '';
    group.classList.add('has-success');
  }
}
elUsername.addEventListener('blur', function () {
  checkInput(elunGroup, elUsername, 5, 'Username', elunMsg);
}, false);
elPwd.addEventListener('blur', function () {
  checkInput(elpwdGroup, elPwd, 8, 'Password', elpwdMsg);
}, false);
