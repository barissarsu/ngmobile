var apiURL = "https://localhost:44385/api/";

//var apiURL = "https://testapi.nereyegidilmeli.com/api/";






//mekan kategorisi
$.get(apiURL + "kategori/getlist?tip=1").done(function (data) {


    $(data).each(function (i, e) {

        $("select[name=kategori]").append("<option>" + e.KategoriAdi + "</option>");

        var menutemp = $("#menukattemplate").html();

        menutemp = menutemp.replace(/{{kapakfoto}}/g, e.Resim);
        menutemp = menutemp.replace(/{{katadi}}/g, e.KategoriAdi).replace(/{{katid}}/g, e.Id);;


        $("#menukat1").append(menutemp);




        var headertemp = $("#headerkattemplate").html();

        headertemp = headertemp.replace(/{{katid}}/g, e.Id)
            .replace(/{{kategoriAdi}}/g, e.KategoriAdi)
            .replace(/{{icon}}/g, e.Icon);


        $("#headkats").append(headertemp);


    })


})



//etkinlik kategorisi
$.get(apiURL + "kategori/getlist?tip=2").done(function (data) {



    $(data).each(function (i, e) {

        var menutemp = $("#menukattemplate").html();

        menutemp = menutemp.replace(/{{kapakfoto}}/g, e.Resim);
        menutemp = menutemp.replace(/{{katadi}}/g, e.KategoriAdi).replace(/{{katid}}/g, e.ID);



        $("#menukat2").append(menutemp);

    })


})