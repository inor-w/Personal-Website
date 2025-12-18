const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email")
const password = document.getElementById("password")
const username = document.getElementById("username")
const comment = document.getElementById("comment")
const phoneNumber = document.getElementById("phoneNumber")

function handleError(group, warning, message){
	if (group.classList.contains("has-success")){
		group.classList.remove("has-success");
	}	
	group.classList.add("has-error");
	warning.innerHTML = message;
}

function handleSuccess(group, warning){
	warning.innerHTML = "";
	if (group.classList.contains("has-error")){
		group.classList.remove("has-error");
	}
	group.classList.add("has-success");
}


function validate_names(nameType){
	let name;
	let warning;
	let group;
	let message;
	const nameRegex = /^[a-zA-z\-\']{2,}$/;

	if (nameType == "firstName"){
		name = firstName;
		warning = document.getElementById("firstNameWarning");
		group = document.getElementById("firstNameGroup");
	}
	else{
		name = lastName;
		warning = document.getElementById("lastNameWarning");
		group = document.getElementById("lastNameGroup");
	}
	

	if (!nameRegex.test(name.value)){
		if (name.value.length < 2){
			message = "Length cannot be less than 2";
		}
		else{
			message = "Name can only have alphabet characters, hyphens and apostrophes";
		}
		handleError(group, warning, message);
	}
	else{
		handleSuccess(group, warning)
	}
}


function validate_email(){
	var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let group = document.getElementById("emailGroup");
	let warning = document.getElementById("emailWarning");

	if (!emailRegex.test(email.value)){
		handleError(group, warning, "Invalid Email");
	}
	else{
		handleSuccess(group, warning);
	}
}

function validate_credentials(value){
	let element;
	let group;
	let warning;
	let message;
	if (value == "username")
	{
		element = username;
		group = document.getElementById("usernameGroup");
		warning = document.getElementById("usernameWarning");
		message = "Username should be at least 6 characters";
	}
	else{
		element = password;
		group = document.getElementById("passwordGroup");
		warning = document.getElementById("passwordWarning");
		message = "Password should be at least 6 characters";
	}

	if (element.value.length < 6){
		handleError(group, warning, message);
	}
	else{
		handleSuccess(group, warning);
	}
}

function validate_phoneNumber(){
	let phoneNumberRegex = /^\d{10}$/;
	let alphaRegex = /[a-zA-Z]/;
	let group = document.getElementById("phoneNumberGroup");
	let warning = document.getElementById("phoneNumberWarning");
	let number = phoneNumber.value;

	if (!phoneNumberRegex.test(number)){
		if (alphaRegex.test(number)){
			message = "Phone number cannot have alphabets";
		}
		else if (number.length == 0){
			message = "Phone number cannot be null";
		}
		else if(number.length < 10 || number.length > 10){
			message = "Phone number length should be exactly 10 digits"
		}
		else{
			message = "Invalid phone number";
		}

		handleError(group, warning, message);
	}
	else{
		handleSuccess(group, warning);
	}
}

function validate_comment(){
	let group = document.getElementById("commentGroup");
	let warning = document.getElementById("commentWarning");

	if (comment.value.length == 0){
		message = "Comment cannot be null";
		handleError(group, warning, message);
	}
	else{
		handleSuccess(group, warning);
	}
}


firstName.addEventListener('blur', function(){
	validate_names("firstName");
});

lastName.addEventListener('blur', function(){
	validate_names("lastName");
});

email.addEventListener('blur', function(){
	validate_email();
});

username.addEventListener('blur', function(){
	validate_credentials("username");
});

password.addEventListener('blur', function(){
	validate_credentials("password");
});

phoneNumber.addEventListener('blur', function(){
	validate_phoneNumber();
});

comment.addEventListener('blur', function(){
	validate_comment();
});
