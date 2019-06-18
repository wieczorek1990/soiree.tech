"use strict";

var $S = {
  sequence: function (functions, args) {
    var function_args;
    var function_primes = [];
    var incrementers = [];
    var prime_index = 0;

    if (!Array.isArray(args)) {
        function_args = Array(functions.length).fill([]);
    } else {
        function_args = args;
    }

    for (var index = 0; index < functions.length; index += 1) {
      var incrementer = function () {
        prime_index += 1;
        function_primes[prime_index](incrementers[prime_index]);
      };

      incrementers.push(incrementer);

      var function_prime = function (callback) {
        if (function_args[prime_index].length === 0) {
          functions[prime_index](callback);
        } else {
          functions[prime_index](function_args[prime_index], callback);
        }
      };

      function_primes.push(function_prime);
    }

    function_primes[0](incrementers[0], function_args[0]);
  }
}
