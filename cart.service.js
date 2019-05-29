"use strict";
function CartService() {
    const service = this;
    service.cartList = [];
 
    service.addItem = (item) => {
        console.log(item);
    service.cartList.push(item);
        // console.log(`current cart list: ${item}`);
    }

    service.removeItem = (item) => {
        let i = service.items.indexOf(item);
            // service.items.splice(removedItem, 1);
            service.cartList.splice(i, 1);
            console.log("working");
    }
    
};
    

angular.module('shopApp')
.service('CartService', CartService); // Passing $http service as dependency for our service