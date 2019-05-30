function ShopController($scope, CartService) {
    // var ctrl = this;
    // $scope.processForm = function() {
    //     // execute something
    //     $scope.showTheForm = false;
    // }


    $scope.addItem = () => {
        $scope.items.push({
            id: $scope.newItem.id,
            product: $scope.newItem.product,
            price: $scope.newItem.price,
            quantity: $scope.newItem.quantity,
            available: $scope.newItem.available
        });
        CartService.addItem($scope.items);

    }


    $scope.removeItem = (item) => {
        var i = $scope.items.indexOf(item);
        $scope.items.splice(i, 1);
        CartService.removeItem($scope.items);
        console.log(items);
    }

    $scope.items = [];
    
  
     
}
  
  
  angular.module('shopApp')
  .component('shop', {
    template: `
        <section class="shop">
         
            <div class="insideheader"> 
                <h3>Shop</h3>         
            </div>

     
        <form class="create-order" ng-submit="addItem()">
    
            <h4>NEW ORDER FORM:</h4>
                <input class="input-item" type="number" placeholder="ID" ng-model="newItem.id"/>
                <input class="input-item" type="text" placeholder="Product" ng-model="newItem.product"/>
                <input class="input-item" type="number" placeholder="Price" ng-model="newItem.price"/>
                <input class="input-item" type="number" placeholder="Quantity" ng-model="newItem.quantity"/>
                
                <br>
                <br>

                <input type="submit" value="SUBMIT"/>
                <input type="button" ng-click="showTheForm = false" value="CANCEL" />
                
        </form>


    
     
        

        </section>
        `, // or use templateUrl
    controller: ShopController
  });