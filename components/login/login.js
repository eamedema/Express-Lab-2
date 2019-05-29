"use strict";
function LoginController() {
    var ctrl = this;
}
  
  angular.module('shopApp')
  .component('login', {
    template: `
    <section id="login">
            <h3 class="login-header">Login</h3>
            <p>This is where you would login!</p>
    </section>

    `, // or use templateUrl
    controller: LoginController
  });