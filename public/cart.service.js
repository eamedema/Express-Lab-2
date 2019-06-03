"use strict";
function CartService($http, $q) {
    const service = this;

    service.cartList = [];
 
    service.addItem = (item) => {
        console.log(item);
        service.cartList.push(item);
        

        function getSuccess (res) { 
            return res.data;
          }
          
            $http.post('/cart-items', item)
            .then( (response) => {
                console.log(response);
            return getSuccess(response);
            }); 
    }

    service.removeItem = (id) => {
        return $q(function(resolve, reject)  {
                return $http({
                url: `/cart-items/${id}`,
                method: "DELETE",
                data: id
            }).then((response) => {
                console.log(id);
                return response.data;
            })

        })
    }

    service.updateCart = (item) => {
        return $q(function(resolve, reject) {
            return $http ({
                url: `/cart-items/${item.itemID}`,
                method: "PUT",
                data: item
            })
            .then( (response) => {
                return response.data;
            })
        })
    }

    service.getTable = () => {

        return $q( (resolve, reject) => {

        function getSuccess (res) { 
            return res.data;
          }

        $http.get('/cart-items')
            .then( (response) => {
                console.log(response);
            resolve(getSuccess(response));
            }); 
        });

    }
    
};
    

angular.module('shopApp')
.service('CartService', CartService); // Passing $http service as dependency for our service