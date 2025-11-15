
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  fetch('https://docs.google.com/forms/d/e/1FAIpQLSdfWWO2gN56pjcv8ezVrwi8_5qXZ9G1wKaWOGp3EoKeabO1cw/formResponse',
  {method:'POST',mode:'no-cors',body:data})
  .then(()=>{document.getElementById('msg').innerHTML='¡Enviado con éxito!';this.reset();})
  .catch(()=>{document.getElementById('msg').innerHTML='Error al enviar.';});
});
