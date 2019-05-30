"use strict";
function HomeController() {
    var ctrl = this;
}
  
  angular.module('shopApp')
  .component('home', {
    template: `
        <section id="home">
            <h3 class="home-header">Home</h3>
            <p>Welcome to Express Shop DB!</p>
        </section>
        `, // or use templateUrl
    controller: HomeController
  });