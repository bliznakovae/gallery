'use strict';

var app = angular
    .module('app', ['ngRoute'])
app.config(function($routeProvider) {
    $routeProvider
        .when("/gallery", {
            templateUrl: "views/gallery/gallery.html",
        })
        .otherwise({
            redirectTo: '/gallery'
        });
});
