//import { HttpClient, HttpParams } from '@angular/common/http';

var app = angular.module("myapp", ['ngSanitize']);

//var apiURL = "https://localhost:44385/api/";

var apiURL = "https://testapi.nereyegidilmeli.com/api/";

var sayfalink = location.href;
var katid = getParameterByName("kategori", sayfalink);






app.controller("mekancontroller", function ($scope, $http) {
  


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

    $http.get(apiURL + "mekan/mekanlarilistele?katid=" + katid + "&sayfa&sehirid&semtid&etiket&q").then(function (result) {

        //var data = JSON.parse(result.data);
        var data = result.data;
        console.log(data);
         
        if (data.AktifKategori != null) {
              $scope.KategoriAdi = data.AktifKategori.KategoriAdi;
        }
      
        $scope.Mekanlar = data.Mekanlar;
        $scope.Kategoriler = data.Kategoriler;
        $scope.Etiketler = data.Etiketler;


        //$scope.Sehirler = data.Sehirler;

        //$("select[name=sehir] option").remove();

        


        //$.each(data.Sehirler, function (i, e) {
          

        //    $("select[name=sehir]").append("<option value='" + e.id + "'>" + e.SehirAdi + "</option>");

        //})


        //$('select[name=sehir]').niceSelect('destroy');
        //$("select[name='sehir']").niceSelect('update');




        //$("select[name='semt'] option").remove();

        //$.each(data.Semtler, function (i, e) {
          
        //    $("select[name='semt']").append("<option value='" + e.id + "'>" + e.town_name + "</option>");
        //})
        
        //$scope.veri = "asdadad";
       



    })


   

    //$('select[name=sehir]').niceSelect('destroy');
    //$("select[name='sehir']").niceSelect('update');


    //$http.get(apiURL + "kategori/getlist?tip=2").then(function (result) {
    //    $scope.etkinlikkats = result.data;


    //    console.log(result.data);

    //})


    //$http.get(apiURL + "/mekan/mekanlarilistele?katid="+ katid +"&sayfa&sehirid&semtid&etiket&q").then(function (result) {

    //    console.log(result);

    //    var model = result.data;


    //    $scope.KategoriAdi = model.AktifKategori.KategoriAdi;





    //})




})






