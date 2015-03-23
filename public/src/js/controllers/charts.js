angular.module('charts', ['angularCharts']);

function ChartController($scope, $http) {
	$http.get('json/stats.json')
	.then(function(res){
		$scope.data = {
			series: ['DIFF', 'MHPS'],
			data: res.data
		}});
		$scope.chartType = 'line';
		$scope.config = {
			title: 'Stats',
			xAxisMaxTicks: 5
		}
	};
