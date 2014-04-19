angular.module('myAnimations', [
  'ngAnimate'
]).
  animation('.contact-card', function() {
    var animateUp = function(element, className, done) {}
    var animateDown = function(element, className, done) {}

    return {
      addClass: animateUp,
      removeClass: animateDown
    };
  });
