var selected_category;
var selected_sub_category;

Ching.controller('populate_categories_Controller',['$scope','$resource','$http',
	function($scope,$resource,$http) {
		console.log("Hello World From Categories Controller")
		$scope.categories = [];
		
		$http.get('json-data/categories_list.JSON').success(function(response){
			$scope.categories = response;
			console.log("List of Categories received");
		});

		$scope.get_sub_categories = function(){
			selected_category = $scope.category.name;
			console.log(selected_category);
			$scope.subcategories = $scope.category.sub_name;
			console.log("List of subcategories received");
		}
}]);
