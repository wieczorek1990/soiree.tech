$(document).ready(async function() {
  let uuid = "2a68a2ef-0a93-46b4-9b05-8727008d9e9a";  // Grab this from Luke.

  let readyActionId = 1;  // Grab this from Luke.
  let readyAction = window.Śledzik.getUrl(readyActionId);
  await window.Śledzik.hit(readyAction, uuid);
});
