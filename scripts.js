(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const messageBox = document.getElementById('formMessage');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);

    // IMPORTANT: Replace YOUR_FORM_ID with your real Google Form ID shown in the full form URL
    const url = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: data
    }).then(function(){
      messageBox.innerHTML = '<div class="alert alert-success">¡Gracias! Tus datos fueron enviados. Te contactaremos pronto.</div>';
      form.reset();
    }).catch(function(err){
      messageBox.innerHTML = '<div class="alert alert-warning">Hubo un problema enviando tu formulario. Intenta de nuevo.</div>';
    });
  });
})();