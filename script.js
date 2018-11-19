"use strict";

var fastDuration = 200;
var slowDuration = 600;
var logoDuration = 11 * slowDuration + fastDuration;

function fadeIn($element, callback, duration='slow') {
  $element.css('visibility', 'visible').hide().fadeIn(duration, callback);
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

  // TODO(wieczorek): Refactor
  fadeIn($logo, function() {}, logoDuration);
  fadeIn($upper, function() {
    fadeIn($position, function() {
      fadeIn($exclamationMark, function() {
        fadeIn($middle, function() {
          fadeIn($company, function() {
            fadeIn($horizontalEllipsis, function() {
              $highlight.addClass('highlight');
              setTimeout(function() {
                fadeIn($lower, function() {
                  fadeIn($name, function() {
                    fadeIn($dot, function() {
                      $mailto.addClass('underline');
                      setTimeout(function() {
                        $mailto.removeClass('underline');
                      }, slowDuration + fastDuration);
                    });
                  });
                });
              }, slowDuration);
            });
          });
        });
      });
    });
  });
});
