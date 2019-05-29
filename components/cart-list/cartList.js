"use strict";
function CartListController(CartService) {
    let ctrl = this;
    
    ctrl.cartList = CartService.cartList;
    // ctrl.removeItem = CartService.removeItem;

    ctrl.removeItem = (item) => {
      let i = ctrl.items.indexOf(item);
          ctrl.items.splice(removedItem, 1);
          ctrl.cartList.splice(i, 1);
          console.log("working");
  }

    console.log(ctrl.cartList);

}
  
  angular.module('shopApp')
  .component('cartList', {
    template: `
    <section id="cart-list">
      <h3 class="cart-list-header">Cart List</h3>
  
    <table>
      <thead>
          <tr>          
              <th>ID</th>
              <th>Product</th>
              <th>Price</th> 
              <th>Quantity</th>
              <th>Close</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="item in $ctrl.cartList">
              <td> {{item[0].id}} </td>
              <td> {{item[0].product}} </td>
              <td> {{item[0].price}} </td>
              <td> {{item[0].quantity}} </td>
              <td> <button class="remove" ng-click="removeItem(item)"> x </button> </td>
          </tr>
        </tbody>
    </table>


    </section>

   
    `, // or use templateUrl
    controller: CartListController,
    bindings: {
      addItem: '&',
      removeItem: '&'
    }
  });