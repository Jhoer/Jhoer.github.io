
document.getElementById("contactForm").addEventListener("submit", function(e){
 e.preventDefault();
 const form = e.target;
 const data = new FormData(form);
 fetch("https://docs.google.com/forms/d/e/1FAIpQLSc7l_formResponse", { method:"POST", body:data })
 document.getElementById("msg").innerText="¡Gracias! Tus datos fueron enviados.";
 form.reset();
});
