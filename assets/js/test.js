// JavaScript Document
var elMsg = document.getElementById('feedback');     			
var elUsername = document.getElementById('username');
var elunGroup = document.getElementById('unGroup');
function checkUsername(minLength) 
{                             							
    if (elUsername.value.length < minLength) 
    {                   								
        elMsg.innerHTML = 'Username must be '+minLength+' characters or more';
        elunGroup.classList.add('has-error');
    } 
    else 
    {                                              						
        elMsg.innerHTML = '';
        elunGroup.classList.remove('has-error');
        elunGroup.classList.add('has-success');
    }
}
elUsername.addEventListener('blur', function() {
	checkUsername(5);
	},false);