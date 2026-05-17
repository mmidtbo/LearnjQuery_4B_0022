const inputNama = document.getElementById("inputNama");
const inputEmail = document.getElementById("inputEmail");
const inputNim = document.getElementById("inputNIM");
const btn = document.getElementById("btnSubmit");

const result = document.getElementById("results");

btn.addEventListener("click", function () {
  let newNama = inputNama.value;
  let newEmail = inputEmail.value;
  let newNim = inputNim.value;

  let pNama = document.createElement("p");
  pNama.innerHTML = newNama;
  pNama.className = "nama";

  let pEmail = document.createElement("p");
  pEmail.innerHTML = newEmail;
  pEmail.className = "email";

  let pNIM = document.createElement("p");
  pNIM.innerHTML = newNim;
  pNIM.className = "nim";

  result.appendChild(pNama);
  result.appendChild(pEmail);
  result.appendChild(pNIM);
});
