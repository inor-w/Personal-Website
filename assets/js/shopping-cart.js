// JavaScript Document
var elList = document.getElementById('list');
var count = document.getElementById('counter');
var addBtn = document.getElementById('addToList');
var usrInput = document.getElementById('usrInput');

function updateCount() {
	count.textContent = elList.getElementsByTagName('*').length
}

function addItem(){
    var newEl, newElText;
	var inputValue = usrInput.value.trim();
	if(!inputValue){ return; }
	
    newEl = document.createElement('div');//put whatever tag you want to insert
    newElText = document.createTextNode(inputValue);
	document.create
    newEl.appendChild(newElText);
    newEl.classList.add('alert');
    newEl.classList.add('alert-info');
	
	newEl.addEventListener('mouseenter', () => {
		newEl.classList.remove('alert-info');
		newEl.classList.add('alert-warning');
	}, false);
	newEl.addEventListener('mouseleave', () => {
		newEl.classList.remove('alert-warning');
		newEl.classList.add('alert-info');
	}, false)
	newEl.addEventListener('click', () => {
		newEl.remove();
		updateCount();
	}, false);
	
	elList.appendChild(newEl);//add new alert div to parent list
	usrInput.value='';
	usrInput.focus();
	updateCount();
}

addBtn.addEventListener('click',addItem,false);

usrInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});