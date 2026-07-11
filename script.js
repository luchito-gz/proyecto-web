const boton = document.getElementById('boton');
const mensajeDiv = document.getElementById('mensaje');
const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');

const MENSAJE_RESPALDO =
  "Sos una gran persona, gracias por hacerme el aguante tanto en stream como acá conmigo, gracias por esas charlas tan lindas que tengo con vos y me gustaría tener más así, te quiero. Pd: jugás muy bien al Overwatch";

boton.addEventListener('click', async () => {
  boton.disabled = true;
  boton.textContent = 'cargando... ♡';

  let texto = MENSAJE_RESPALDO;

  try {
    const respuesta = await fetch('/api/message');
    if (respuesta.ok) {
      const data = await respuesta.json();
      texto = data.message || MENSAJE_RESPALDO;
    }
  } catch (error) {
    console.warn('No se pudo contactar al backend, se usa el mensaje de respaldo.', error);
  }

  mensajeDiv.textContent = texto + ' ✨🎀';
  mensajeDiv.classList.remove('oculto');
  mensajeDiv.classList.add('mostrar');

  titulo.textContent = '¡graciaaas! ♡';
  subtitulo.textContent = '';
  boton.style.display = 'none';
});
