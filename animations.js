"use strict";

var Sequently = Sequently.default;

const fastDuration = 200;
const slowDuration = 600;
const logoDuration = 11 * slowDuration + fastDuration;

function fadeIn(args, callback, duration = "slow") {
  const $element = args[0];
  $element.css("visibility", "visible").hide().fadeIn(duration, callback);
}

function highlight(args, callback) {
  const $highlight = args[0];
  $highlight.addClass("highlight");
  setTimeout(callback, slowDuration);
}

function underline(args, callback) {
  const $mailto = args[0];
  $mailto.addClass("underline");
  setTimeout(function () {
    $mailto.removeClass("underline");
  }, slowDuration + fastDuration);
}

$(document).ready(function () {
  const $logo = $("#logo");
  const $busy = $("#busy");
  const $position = $("#position");
  const $horizontalEllipsis = $("#horizontal-ellipsis");
  const $contact = $("#contact");
  const $company = $("#company");
  const $exclamationMark = $("#exclamation-mark");
  const $highlight = $("#highlight");
  const $if = $("#if");
  const $name = $("#name");
  const $dot = $("#dot");
  const $mailto = $("#mailto");

  fadeIn([$logo], function () {}, logoDuration);
  Sequently.sequence(
    [
      fadeIn,
      fadeIn,
      fadeIn,
      fadeIn,
      fadeIn,
      fadeIn,
      highlight,
      fadeIn,
      fadeIn,
      fadeIn,
      underline,
    ],
    [
      [$busy],
      [$position],
      [$exclamationMark],
      [$contact],
      [$company],
      [$horizontalEllipsis],
      [$highlight],
      [$if],
      [$name],
      [$dot],
      [$mailto],
    ],
  );
});
