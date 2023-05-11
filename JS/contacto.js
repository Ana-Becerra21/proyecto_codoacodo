const form = document.getElementById('registro-form');
const enviarBtn = document.getElementById('enviar-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');

  if (nombre.value.trim() === '' || apellido.value.trim() === '' || email.value.trim() === '') {
    alert('Por favor complete todos los campos obligatorios.');
  } else {
    // Envíe el formulario
    form.submit();
  }
});
