//import { HttpClient, HttpParams } from '@angular/common/http';

var app = angular.module("myapp", ['ngSanitize']);

var apiURL = "https://localhost:44385/api/";

//var apiURL = "https://testapi.nereyegidilmeli.com/api/";

var sayfalink = location.href;
var id = getParameterByName("id", sayfalink);





app.controller("mekandetay", function ($scope, $http) {
  
    $scope.detaybilgi = "<b>FENER</b>";

    //?katid=" + katid + "&sayfa&sehirid&semtid&etiket&q
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');

    //let params = new HttpParams();
    //params.set('katid', katid);
    //params.set('sayfa',"");
    //params.set('sehirid', "");
    //params.set('semtid', "");
    //params.set('etiket', "");
    //params.set('q', "");

    //$scope.Sehirler = [{ id: 1, SehirAdi: "Ýstanbul" },
    //    { id: 2, SehirAdi: "Ýzmir" }
    //]



    //$("#testdiv").load("Test.html", function () {
       

    //});

    $http.get(apiURL + "/mekan?ID=" + id + "").then(function (result) {

        //var data = JSON.parse(result.data);
        var data = result.data;
        console.log(data);
         
       
        $scope.mekan = data;
       



    })





})






