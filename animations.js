"use strict";

var Sequently = Sequently.default;

const fastDuration = 200;
const slowDuration = 600;
const logoDuration = 11 * slowDuration + fastDuration;

$.fn.retype = function (delay) {
  var el = this,
    t = el.text(),
    c = t.split(""),
    l = c.length,
    i = 0;
  delay = delay || 100;
  el.empty();
  var interval = setInterval(function () {
    if (i < l) el.text(el.text() + c[i++]);
    else clearInterval(interval);
  }, delay);
};

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
    setTimeout(callback, slowDuration);
  }, slowDuration + fastDuration);
}

function typistText(args, callback) {
  const $target = args[0];

  $target.css("visibility", "visible");
  $target.retype();
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
  const $thanks = $("#thanks");

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
      typistText,
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
      [$thanks],
    ],
  );
});
