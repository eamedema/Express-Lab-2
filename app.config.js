"use strict";
angular.module("shopApp")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/shop", {
        // Load the shop component
        template: "<shop></shop>"
      })
      .when("/home", {
        // Load the home component
        template: "<home></home>"
      })
      .when("/cart-list", {
        // Load the cart-list component
        template: "<cart-list></cart-list>"
      })
      .when("/login", {
        // Load the login component
        template: "<login></login>"
      })

      .otherwise( {
        // Otherwise, go home component
        redirectTo: "/home"
      })
}]);