"use strict";

var fastDuration = 200;
var slowDuration = 600;
var logoDuration = 11 * slowDuration + fastDuration;

function fadeIn(args, callback) {
  var $element = args[0];
  $element.css('visibility', 'visible').hide().fadeIn('slow', callback);
}

function highlight(args, callback) {
  var $highlight = args[0];
  $highlight.addClass('highlight');
  setTimeout(callback, slowDuration);
}

function underline(args, callback) {
  var $mailto = args[0];
  $mailto.addClass('underline');
  setTimeout(function() {
    $mailto.removeClass('underline');
  }, slowDuration + fastDuration);
}

$(document).ready(function() {
  var $logo = $('#logo');
  var $upper = $('#upper');
  var $position = $('#position');
  var $horizontalEllipsis = $('#horizontal-ellipsis');
  var $middle = $('#middle');
  var $company = $('#company');
  var $exclamationMark = $('#exclamation-mark');
  var $highlight = $('#highlight');
  var $lower = $('#lower');
  var $name = $('#name');
  var $dot = $('#dot');
  var $mailto = $('#mailto');

  fadeIn([$logo], function() {}, logoDuration);
  $S.sequence([
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
  ], [
    [$upper],
    [$position],
    [$exclamationMark],
    [$middle],
    [$company],
    [$horizontalEllipsis],
    [$highlight],
    [$lower],
    [$name],
    [$dot],
    [$mailto],
  ]);
});
