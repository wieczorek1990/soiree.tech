$(document).ready(async function() {
  let token = "2a68a2ef-0a93-46b4-9b05-8727008d9e9a";  // Grab this from Luke.
  let data = {
    token: token
  };

  let readyActionId = 1;  // Grab this from Luke.
  let readyAction = window.Śledzik.getUrl(readyActionId);
  await window.Śledzik.hit(readyAction, data);

  let emailActionId = 2;  // Grab this from Luke.
  let emailAction = window.Śledzik.getUrl(emailActionId);
  $("#mailto").on("click", async function() {
    await window.Śledzik.hit(emailAction, data);
  });

  let privacyPolicyActionId = 3;  // Grab this from Luke.
  let privacyPolicyAction = window.Śledzik.getUrl(privacyPolicyActionId);
  $("#privacy-policy").on("click", async function() {
    await window.Śledzik.hit(privacyPolicyAction, data);
  });
});
