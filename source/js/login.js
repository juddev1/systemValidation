const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = form.username.value;
	const password = form.password.value;
    
	if (username === 'usuario' && password === 'contraseña') {
		// Si el usuario y la contraseña son correctos, redirigir al usuario a la página principal
		window.location.href = 'asistencia.html';
	} else {
		// Si el usuario y/o la contraseña son incorrectos, mostrar un mensaje de error al usuario
		alert('Usuario y/o contraseña incorrectos');
	}
});