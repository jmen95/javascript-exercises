const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer1 = form.elements.respuesta1.value;

  alert(answer1);
});
