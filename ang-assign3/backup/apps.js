(function ()  {
  'use strict';

    angular.module("NarrowItDownApp",[])
    .controller("NarrowItDownController",NarrowItDownController)
    .service("MenuSearchService",MenuSearchService)
    .directive("foundItems",foundItemsDirective)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    function foundItemsDirective() {
      var ddo = {
        templateUrl: 'menuitems.html'
      };
      return ddo;
    }

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService, $scope) {
        var list = this;

      
        var items1=[];
        var searchTerm;

        list.searchTerm = searchTerm;

        list.items1 = items1;

        list.logitems = function () {
        var promise = MenuSearchService.getMatchedMenuItems();
            promise.then(function (response) {
              list.items1 = response.data.menu_items;

              var items = [];
              for (var i=0; i< list.items1.length;i++) {
                if (list.items1[i].description.indexOf(list.searchTerm) != -1) {
                  var fitem = {
                    name: list.items1[i].name,
                    short_name: list.items1[i].short_name,
                    description: list.items1[i].description };

                  items.push(fitem);
                }
              }
              list.items = items;

            })
            .catch(function (error) {
              console.log(error);
            })
        };


      list.removeItem = function (itemIndex) {
        list.items.splice(itemIndex, 1);
      };

    };

    MenuSearchService.$inject = ['$http', 'ApiBasePath']
    function MenuSearchService($http, ApiBasePath) {
      var service = this;

      service.getMatchedMenuItems = function () {
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        });

        return response;
      };

    }

})();
