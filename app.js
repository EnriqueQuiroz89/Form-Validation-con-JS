console.log('Hola Programer');

const form = document.getElementById('form'),
    username = document.getElementById('username'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    repassword = document.getElementById('repassword');

// Agrega un escucha a la forma
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Quita la accion de capturar los campos y enviarlos

    checkInputs();



})

function checkInputs() {
    // Obtiene los valores desde los inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repasswordValue = repassword.value.trim();

    let haveAnError = false;

    if (usernameValue === '') {
        // Show Error
        setErrorFor(username, 'Username no puede estar vacio');
        haveAnError = true;
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        // Show Error
        setErrorFor(email, 'Email no puede estar vacio');
        haveAnError = true;
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        // Show Error
        setErrorFor(password, 'Password no puede estar vacio');
        haveAnError = true;
    } else {
        setSuccessFor(password);
    }

    if (repasswordValue === '') {
        // Show Error
        setErrorFor(repassword, 'pass no puede estar vacio');
        haveAnError = true;
    } else if (repasswordValue !== passwordValue) {
        setErrorFor(repassword, 'Las contraseñas no coinciden');
        haveAnError = true;
    } else {
        setSuccessFor(repassword);
    }

    if (haveAnError === false) {
        // Alerta todo OK 
        window.alert("Tu Info esta correcta");
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;  // .form-control
    const small = formControl.querySelector('small');

    // agrega el mensaje4 de error dentro de Small 
    small.innerText = message;
    // Agrega la clase error
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;  // .form-control
    // Agrega la clase error
    formControl.className = 'form-control success';
}