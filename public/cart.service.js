"use strict";
function CartService($http, $q) {
    const service = this;

    service.cartList = [];
 
    service.addItem = (item) => {
        console.log(item);
        service.cartList.push(item);  // This part works
        

        function getSuccess (res) { 
            // return res.data.data;
            return res.data;
          }
          
            $http.post('/cart-items', item)
            .then( (response) => {
                console.log(response);
            return getSuccess(response);
            }); 
    }

    service.removeItem = (item) => {
        let i = service.items.indexOf(item);
            // service.items.splice(removedItem, 1);
            service.cartList.splice(i, 1);
            console.log("working");
    }

    service.getTable = () => {

        return $q( (resolve, reject) => {

        function getSuccess (res) { 
            return res.rows
          }

        $http.get('/cart-items')
            .then( (response) => {
                // service.items = {};
                // service.cartList = data;
                console.log(response);
            return getSuccess(response);
            }); 
        });

    }
    
};
    

angular.module('shopApp')
.service('CartService', CartService); // Passing $http service as dependency for our service