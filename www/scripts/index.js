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


        //indexislem();
       


        //$.ajax({
        //    url: "header.html",
        //    type: "get",
        //    dataType: "html",
        //    success: function (result) {
        //        $("#header").html(result);

        //    }


        //});



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





var app = angular.module("myapp", []);

//var apiURL = "https://localhost:44385/api/";

var apiURL = "https://testapi.nereyegidilmeli.com/api/";



app.controller("mycontroller", function ($scope, $http) {




    //$scope.names = [{Name:"Barış",Country:"Türkiye"},{Name:"Ahmedov",Country:"Azerbaycan"}]



    //$.get(apiURL + "mekan/HtmlDeneme").done(function (data) {
    //    console.log(data);
    //    $scope.html = "<b>Test</b>";
    //})





    $http.get(apiURL + "kategori/getlist?tip=1").then(function (result) {

        $scope.mekankats = result.data;




    })




    $http.get(apiURL + "mekan").then(function (result) {

        $scope.mekanlar = result.data;
    })





    $http.get(apiURL + "kategori/getlist?tip=2").then(function (result) {
        $scope.etkinlikkats = result.data;


        console.log(result.data);

    })



    $http.get(apiURL + "etkinlik/AnasayfaEtkinlikleriListele").then(function (result) {

        console.log(result.data);

        $scope.etkinlikler = result.data;
    })



    $http.get(apiURL + "blog/AnasayfaBlogYazilari").then(function (result) {
        console.log(result.data);


        $scope.blogyazilari = result.data;

    })



})

