bbgApp.controller("homeCtrl", function ($scope, $http, $log) {
    $scope.searchRedirect = function (searchText) {
        if (searchText !== undefined)
        {
//            window.location.assign("http://localhost:8383/BuckBuckBuckGo/index.html#/" + searchText);
            window.location.assign("#/" + searchText);
        }
    };
});


bbgApp.controller("resultsCtrl", function ($scope, $http, $routeParams, $log) {
    $scope.data = {message: "Eternal peace"};
    $scope.descTextLimit = 200;
    $scope.rtTextLimit = 50;
    $scope.init = function () {
        $log.log("inside init");        
        var url = "https://api.duckduckgo.com/?q=" + $routeParams.query + "&format=json&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data) {
            $scope.response = data;
            if ($scope.response.Image === "" && $scope.response.RelatedTopics.length === 0 && $scope.response.AbstractText == "") {
                $log.log("Completely empty");
                $scope.jumboVisible = "true";
            }
            if ($scope.response.Image === "") {
//                $log.log("No Image");
                $scope.imageVisible = "true";
            }
            $log.log($scope.response.RelatedTopics.length);
            if ($scope.response.RelatedTopics.length === 0) {
                $log.log("No Result");
                $scope.rtVisible = "true";
            }
            if ($scope.response.Results.length === 0) {
                $scope.resultText = "No Results Found";
            }
        });
    };

    $scope.init();
});
