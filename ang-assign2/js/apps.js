(function ()  {
  'use strict';

    angular.module("ShoppingListCheckOff",[])
    .controller("ToBuyController",ToBuyController)
    .controller("AlreadyBoughtController",AlreadyBoughtController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var sList = this;

        sList.items = ShoppingListCheckOffService.toBuyList;
        sList.bempty = true;

        sList.boughtItem = function (itemIndex) {
          ShoppingListCheckOffService.boughtItem(itemIndex);
            if (sList.items.length == 0 ) {
              sList.empty = true;
            };
            if (sList.items.length < 6 ) {
              sList.bempty = false;
            };
        };
    };

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bList = this;
        bList.items = ShoppingListCheckOffService.boughtList;
    };

    function ShoppingListCheckOffService() {
      var service = this;

      // List of shopping items
      var shoppingList = [
        {      name: "Milk",      quantity: "2"    },
        {      name: "Donuts",      quantity: "200"    },
        {      name: "Cookies",      quantity: "300"    },
        {      name: "Chocolate",      quantity: "5"    },
        {      name: "Chips",      quantity: "10"    },
        {      name: "Nuts",      quantity: "100"    }
      ];

      service.toBuyList = shoppingList;

      var boughtList = [];
      service.boughtList = boughtList;

      service.boughtItem = function (itemIdex) {
        var bitem = {
          name: service.toBuyList[itemIdex].name,
          quantity: service.toBuyList[itemIdex].quantity };

        boughtList.push(bitem);
        service.toBuyList.splice(itemIdex, 1);
      };

    };

})();
