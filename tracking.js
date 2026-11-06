$(document).ready(async function() {
  let uuid = "2a68a2ef-0a93-46b4-9b05-8727008d9e9a";  // Grab this from Luke.

  let readyActionId = 1;  // Grab this from Luke.
  let readyAction = window.Śledzik.getUrl(readyActionId);
  await window.Śledzik.hit(readyAction, uuid);

  let emailActionId = 2;  // Grab this from Luke.
  let emailAction = window.Śledzik.getUrl(emailActionId);
  $("#mailto").on("click", async function() {
    await window.Śledzik.hit(emailAction, uuid);
  });

  let privacyPolicyActionId = 3;  // Grab this from Luke.
  let privacyPolicyAction = window.Śledzik.getUrl(privacyPolicyActionId);
  $("#privacy-policy").on("click", async function() {
    await window.Śledzik.hit(privacyPolicyAction, uuid);
  });
});
