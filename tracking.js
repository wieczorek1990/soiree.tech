$(document).ready(async function() {
  let token = "4c2af087-06ce-4a4a-bdff-fa20e03cae2a";

  let userToken = window.Śledzik.getAuthToken();
  if (!userToken) {
    try {
      let response = await fetch("https://sledzik.soiree.tech/api/register/anonymous/", {
        method: "POST"
      });
      if (response.ok) {
        let data = await response.json();
        userToken = data.token;
        window.Śledzik.setAuthToken(userToken);
      }
    } catch (e) {
      console.error("Failed to register anonymous user:", e);
    }
  }

  let readyActionId = 1;
  let readyAction = window.Śledzik.getUrl(readyActionId);
  await window.Śledzik.hit(readyAction, token, userToken);

  let emailActionId = 2;
  let emailAction = window.Śledzik.getUrl(emailActionId);
  $("#mailto").on("click", async function() {
    await window.Śledzik.hit(emailAction, token, userToken || window.Śledzik.getAuthToken());
  });

  let privacyPolicyActionId = 3;
  let privacyPolicyAction = window.Śledzik.getUrl(privacyPolicyActionId);
  $("#privacy-policy").on("click", async function() {
    await window.Śledzik.hit(privacyPolicyAction, token, userToken || window.Śledzik.getAuthToken());
  });
});
