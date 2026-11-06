$(document).ready(function () {
  const token = "4c2af087-06ce-4a4a-bdff-fa20e03cae2a";

  window.Śledzik.hit(1, token);

  $("#mailto").on("click", function () {
    window.Śledzik.hit(2, token);
  });

  $("#privacy-policy").on("click", function () {
    window.Śledzik.hit(3, token);
  });
});
