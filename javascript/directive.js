
angular.module('YNDBDirectives',[]).directive('wineInfoBox', function() {
  return {
    restrict: 'E',    // usage of the directive: E -> element
    scope: {
      wine: '=info'    // 'wine' set with the 'info' attribute
    },
    templateUrl: 'templates/directives/wine-info-box.html'
  };
});

