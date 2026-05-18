const $inputNama = $("#inputNama");
const $inputEmail = $("#inputEmail");
const $inputNim = $("#inputNIM");
const $btn = $("#btnSubmit");

const $result = $("#results");

$btn.on("click", function () {
  let newNama = $inputNama.val();
  let newEmail = $inputEmail.val();
  let newNim = $inputNim.val();

  let $pNama = $("<p>").addClass("nama").text(newNama);
  let $pEmail = $("<p>").addClass("email").text(newEmail);
  let $pNIM = $("<p>").addClass("nim").text(newNim);

  $result.append($pNama);
  $result.append($pEmail);
  $result.append($pNIM);
});
