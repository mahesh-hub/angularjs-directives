var app = angular.module("myApp", []);
// app.controller("firstCtrl", function($scope, $rootScope) {
//     $scope.name = "mahesh";
//     $rootScope.fullName = "naga mahehs";
// });
// app.controller("firstCtrl", function($scope) {
//     $scope.data = [{
//             name: "mahesh",
//             age: 25,
//             contact: 8790029337,
//             email: "mahesh8978051591@gmail.com"
//         },
//         {
//             name: "malli",
//             age: 24,
//             contact: 7898657412,
//             email: "malli12@gmail.com"
//         },
//         {
//             name: "lavanya",
//             age: 26,
//             contact: 987865456,
//             email: "lavanya123@gmail.com"
//         },
//         {
//             name: "anjaneyulu",
//             age: 54,
//             contact: 9704815532,
//             email: "anjaneyulu12@gmail.com"
//         },
//         {
//             name: "arshia",
//             age: 22,
//             contact: 8978051591,
//             email: "arsiha786@gmail.com"
//         },
//         {
//             name: "prassna",
//             age: 25,
//             contact: 9676022284,
//             email: "prasanna12@gmail.com"
//         },
//         {
//             name: "hamenth",
//             age: 25,
//             contact: 786954567,
//             email: "hamenth12@gmail.com"
//         },
//         {
//             name: "hari",
//             age: 23,
//             contact: 987678965,
//             email: "hari12@gmail.com"
//         },
//         {
//             name: "suneel",
//             age: 27,
//             contact: 897865655,
//             email: "suneel123@gmail.com"
//         },
//         {
//             name: "gowthami",
//             age: 24,
//             contact: 786787776,
//             email: "gowthami12@gmail.com"
//         }

//     ]

// });
app.directive("firstDirective", function() {
    return {
        template: "<h1>this is my first directive</h1>",
        restrict: "C"
    }


});