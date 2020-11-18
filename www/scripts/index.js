// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);


        indexislem();
       


        $.ajax({
            url: "header.html",
            type: "get",
            dataType: "html",
            success: function (result) {
                $("#header").html(result);

            }


        });



        //setTimeout(function () {

        //    $.ajax({
        //        url: "script.html",
        //        type: "get",
        //        dataType: "html",
        //        success: function (result) {


        //            $("#scripts").html(result);

        //        }


        //    });


        //},1000)

     



    };


    function indexislem() {

      
    }


    //function baslat() {

    //   // $("#header").load("header.html");


    //    var app = angular.module("myapp", []);

    //    app.controller("mycontroller", function ($scope, $http) {


    //        $scope.test = "Barış";

    //        $http.get("https://jsonplaceholder.typicode.com/todos").then(function (result) {
    //            console.log(result);
    //            $scope.veriler = result;
    //        })





    //    })


    //}


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}