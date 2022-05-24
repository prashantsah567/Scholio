



const form = document.getElementById('form');
const date = document.getElementById('date');
const grade = document.getElementById('grade');
const zipcode = document.getElementById('zipcode');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const dateValue = date.value.trim();
	const zipcodeValue = zipcode.value.trim();
	const emailValue = email.value.trim();
	const gradeValue = grade.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	// if(usernameValue === '') {
	// 	setErrorFor(username, 'Zip Code cannot be blank');
	// } else {
	// 	setSuccessFor(username);
	// }	
	if(gradeValue === '') {
		setErrorFor(grade, 'Grade cannot be blank');
	} else {
		setSuccessFor(gra``);
	}

	if(dateValue === '') {
		setErrorFor(date, 'Date cannot be blank');
	}else if (!isDate(dateValue)){
		setErrorFor(date, 'Not a valid Date')
	} else {
		setSuccessFor(date);
	}

	if(zipcodeValue === '') {
		setErrorFor(zipcode, 'Zip Code cannot be blank');
	} else {
		setSuccessFor(zipcode);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isDate(date){
	return /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/.test(date);
}













