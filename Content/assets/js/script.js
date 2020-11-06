function MekanKaydet(e) {
    $.post("/Home/FavEkle?tip=0&NesneID=" + e).done(function (t) {
        -1 == t
            ? $("#reg_form_model").modal()
            : 1 == t
                ? ($("#favbtn,.save[data-id=" + e + "]").addClass("active"),
                    $(".save[data-id=" + e + "]").html('<i class="fa fa-heart"></i> favori listenizde'),
                    $("#favbtn").html('<span class="icon-bookmark1"></span><span class="text">Favori Listenizde</span>'))
                : 2 == t &&
                ($("#favbtn,.save[data-id=" + e + "]").removeClass("active"),
                    $(".save[data-id=" + e + "]").html('<i class="fa fa-heart"></i> favorilerime ekle'),
                    $("#favbtn").html('<span class="icon-bookmark1"></span><span class="text">Favorilerime Ekle</span>'));
    });
}
function EtkinlikKaydet(e) {
    $.post("/Home/FavEkle?tip=1&NesneID=" + e).done(function (t) {
        -1 == t
            ? $("#reg_form_model").modal()
            : 1 == t
                ? ($("#favbtn,.save[data-id=" + e + "]").addClass("active"),
                    $(".save[data-id=" + e + "]").html('<i class="fa fa-heart"></i> favori listenizde'),
                    $("#favbtn").html('<span class="icon-bookmark1"></span><span class="text">Favori Listenizde</span>'))
                : 2 == t &&
                ($("#favbtn,.save[data-id=" + e + "]").removeClass("active"),
                    $(".save[data-id=" + e + "]").html('<i class="fa fa-heart"></i> favorilerime ekle'),
                    $("#favbtn").html('<span class="icon-bookmark1"></span><span class="text">Favorilerime Ekle</span>'));
    });
}
function YorumYap(e, t) {
    var a = { Yorum: $("#yorum").val(), Puan: $("#yorumform .rating-form li.active").length, UrunID: e };
    return (
        !(a.Puan < 1 || a.Puan > 5) &&
        !(a.Yorum.length < 1) &&
        void $.post("/Partial/YorumYap", { yorum: a }).done(function (e) {
            1 == t ? TRYorumSonuc(e) : 2 == t ? ENYorumSonuc(e) : 8 == t && ESPYorumSonuc(e);
        })
    );
}
function YorumKaldir(e) {
    swal(
        {
            title: "Yorum Kaldırılacaktır Onaylıyor Musunuz?",
            text: "Seçilen yorum kaldırılacaktır!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "İptal",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Kaldır",
            closeOnConfirm: !1,
        },
        function () {
            $.post("/Home/YorumKaldir", { UrunID: e }, function (e) {
                1 == e
                    ? (swal({ title: "Kaldırıldı!", text: "Yorum kaldırıldı.", type: "success", confirmButtonClass: "btn-success" }),
                        setTimeout(function () {
                            location.href = location.href;
                        }, 2e3))
                    : swal({ title: "Hata!", text: "Kaldırma esnasında hata, lütfen daha sonra tekrar deneyiniz :(", type: "error", confirmButtonClass: "btn-danger" });
            });
        }
    );
}
function ENYorumKaldir(e) {
    swal(
        {
            title: "Do you approve the comment will be removed?",
            text: "Selected comment will be removed!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "Cancel",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Remove",
            closeOnConfirm: !1,
        },
        function () {
            $.post("/EN/remove-comments", { UrunID: e }, function (e) {
                1 == e
                    ? (swal({ title: "Removed!", text: "Comment Removed.", type: "success", confirmButtonClass: "btn-success" }),
                        setTimeout(function () {
                            location.href = location.href;
                        }, 2e3))
                    : swal({ title: "Error!", text: "Error during uninstall, please try again later :(", type: "error", confirmButtonClass: "btn-danger" });
            });
        }
    );
}
function ESPYorumKaldir(e) {
    swal(
        {
            title: "Aprueba que se eliminará el comentario?",
            text: "El comentario seleccionado será eliminado!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "Cancelar",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Eliminar",
            closeOnConfirm: !1,
        },
        function () {
            $.post("/EN/YorumKaldir", { UrunID: e }, function (e) {
                1 == e
                    ? (swal({ title: "Remota!", text: "Comentario eliminado.", type: "success", confirmButtonClass: "btn-success" }),
                        setTimeout(function () {
                            location.href = location.href;
                        }, 2e3))
                    : swal({ title: "Error!", text: "Error durante la desinstalación, intente nuevamente más tarde :(", type: "error", confirmButtonClass: "btn-danger" });
            });
        }
    );
}
function TRYorumSonuc(e) {
    1 == e
        ? (swal({ title: "Gönderildi!", text: "Yorumunuz başarıyla yapılmış ve yönetici onayına sunulmuştur, ilginiz için teşekkür ederiz!", type: "success", confirmButtonClass: "btn-success" }), $("#yorumform")[0].reset())
        : -1 == e
            ? swal({ title: "Hata!", text: "Daha önce zaten bu ürün için yorumda bulunmuşsunuz, ilginiz için teşekkür ederiz!", type: "error", confirmButtonClass: "btn-danger" })
            : 0 == e && swal({ title: "Hata!", text: "Şuanda işleminizi gerçekleştiremiyoruz, lütfen daha sonra tekrar deneyiniz!", type: "error", confirmButtonClass: "btn-danger" });
}
function ENYorumSonuc(e) {
    1 == e
        ? (swal({ title: "Sent!", text: "Your comment has been made successfully and submitted to the approval of the manager, thank you for your interest!", type: "success", confirmButtonClass: "btn-success" }), $("#yorumform")[0].reset())
        : -1 == e
            ? swal({ title: "Error!", text: "You have already commented on this product, thank you for your interest!", type: "error", confirmButtonClass: "btn-danger" })
            : 0 == e && swal({ title: "Error!", text: "We can't process you right now, please try again later!", type: "error", confirmButtonClass: "btn-danger" });
}
function ESPYorumSonuc(e) {
    1 == e
        ? (swal({ title: "Enviado!", text: "Su comentario se realizó con éxito y se sometió a la aprobación del gerente, gracias por su interés!", type: "success", confirmButtonClass: "btn-success" }), $("#yorumform")[0].reset())
        : -1 == e
            ? swal({ title: "Error!", text: "Ya ha comentado este producto, gracias por su interés.!", type: "error", confirmButtonClass: "btn-danger" })
            : 0 == e && swal({ title: "Error!", text: "No podemos procesarlo ahora, intente nuevamente más tarde!", type: "error", confirmButtonClass: "btn-danger" });
}
function AdresEkle() {
    $("#adresEkleModal .modal-body").load("/Home/AdresForm", function () {
        FormIslemleri();
    }),
        $("#adresEkleModal").modal();
}
function AdresDuzenle(e) {
    var t = { ID: e };
    $("#adresEkleModal .modal-body").load("/Home/AdresForm", { model: t }, function () {
        FormIslemleri();
    }),
        $("#adresEkleModal").modal();
}
function AdresKaldir(e) {
    swal(
        {
            title: "Adres Kaldırılacaktır Onaylıyor Musunuz?",
            text: "Seçilen adres kaldırılacaktır!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "İptal",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Kaldır",
            closeOnConfirm: !1,
        },
        function () {
            $.post("/Home/AdresKaldir", { ID: e }, function (e) {
                1 == e
                    ? (swal({ title: "Kaldırıldı!", text: "Adres kaldırıldı.", type: "success", confirmButtonClass: "btn-success" }), $("#adresler").load("/Home/AdresPartial"))
                    : swal({ title: "Hata!", text: "Kaldırma esnasında hata, lütfen daha sonra tekrar deneyiniz :(", type: "error", confirmButtonClass: "btn-danger" });
            });
        }
    );
}
function adressonuc(e) {
    1 == e
        ? (swal({ title: "Kaydedildi!", text: "Adres başarıyla kaydedildi!", type: "success", confirmButtonClass: "btn-success" }),
            $("#adresform")[0].reset(),
            $("#adresEkleModal").modal("hide"),
            setTimeout(function () {
                $("#adresler").load("/Home/AdresPartial");
            }, 500))
        : -1 == e
            ? swal({ title: "Hata!", text: "Daha önce zaten bu ürün için yorumda bulunmuşsunuz, ilginiz için teşekkür ederiz!", type: "error", confirmButtonClass: "btn-danger" })
            : 0 == e && swal({ title: "Hata!", text: "Şuanda işleminizi gerçekleştiremiyoruz, lütfen daha sonra tekrar deneyiniz!", type: "error", confirmButtonClass: "btn-danger" });
}
function FormIslemleri() {
    $("input[name='adres.Kurumsal']").on("change", function () {
        var e = $(this).val();
        $("input[name='adres.Kurumsal']").prop("checked", !1),
            $("input[name='adres.Kurumsal'][value='" + e + "']").prop("checked", !0),
            1 == e ? ($(".fakurumsal").removeClass("hidden"), $(".fabireysel").addClass("hidden")) : ($(".fakurumsal").addClass("hidden"), $(".fabireysel").removeClass("hidden"));
    }),
        $("select[name='adres.Ulke']").on("change", function () {
            var e = $(this).val();
            $.post("/Partial/SehirleriListele?UlkeID=" + e).done(function (e) {
                $("select[name='adres.Sehir'] option").remove(),
                    $("select[name='adres.Sehir']").val(0),
                    $.each(e, function (e, t) {
                        $("select[name='adres.Sehir']").append('<option value="' + t.id + '">' + t.SehirAdi + "</option>"), 0 == e && ($("select[name='adres.Sehir']").val(t.id), $("select[name='adres.Sehir']").change());
                    });
            });
        }),
        $("select[name='adres.Sehir']").on("change", function () {
            var e = $(this).val();
            $.post("/Partial/SemtleriListele?SehirID=" + e).done(function (e) {
                $("select[name='adres.Semt'] option").remove(),
                    $.each(e, function (e, t) {
                        $("select[name='adres.Semt']").append('<option value="' + t.id + '">' + t.town_name + "</option>"), 0 == e && $("select[name='adres.Semt']").val(t.id);
                    });
            });
        });
}
function SiparisIptal(e) {
    swal(
        {
            title: "İptal talebinde bulunulacaktır onaylıyor musunuz?",
            text: "Seçilen sipariş iptal talebine alınacaktır!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "Vazgeç",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "İptal Et",
            closeOnConfirm: !1,
        },
        function () {
            $.post("/Home/SiparisIptal", { SiparisNo: e }, function (e) {
                1 == e
                    ? (swal({ title: "Başarılı!", text: "İptal talebinde bulunuldu. İlgili ürünleri kargo ile iletmeniz durumunda talep değerlendirilmesi yapılacaktır!", type: "success", confirmButtonClass: "btn-success" }),
                        setTimeout(function () {
                            location.href = location.href;
                        }, 5e3))
                    : swal({ title: "Hata!", text: "Talep esnasında hata, lütfen daha sonra tekrar deneyiniz :(", type: "error", confirmButtonClass: "btn-danger" });
            });
        }
    );
}
function FavKaldir(e) {
    swal(
        {
            title: "Seçilen Ürün Favorilerinizden Kaldırılacaktır Onaylıyor Musunuz?",
            text: "Seçilen ürün kaldırılacaktır!",
            type: "warning",
            showCancelButton: !0,
            cancelButtonClass: "btn-default",
            cancelButtonText: "Vazgeç",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Kaldır",
            closeOnConfirm: !1,
        },
        function () {
            var t = new Array();
            t.push(e),
                $.post("/Home/FavlariKaldir", { idler: t }, function (e) {
                    1 == e
                        ? (swal({ title: "Kaldırıldı!", text: "Ürün favorilerden kaldırıldı.", type: "success", confirmButtonClass: "btn-success" }),
                            setTimeout(function () {
                                location.href = location.href;
                            }, 2e3))
                        : swal({ title: "Hata!", text: "Kaldırma esnasında hata, lütfen daha sonra tekrar deneyiniz :(", type: "error", confirmButtonClass: "btn-danger" });
                });
        }
    );
}
function HizliGetir(e) {
    $("#quick-view-modal-container .modal-body").load("/Home/PartialHizliUrun", { UrunID: e }), $("#quick-view-modal-container").modal();
}
function iletisimsonuc(e) {
    1 == e
        ? ($("#contact-form")[0].reset(), swal({ title: "Gönderildi!", text: "Mesajınız başarıyla gönderildi.", type: "success", confirmButtonClass: "btn-success" }))
        : swal({ title: "Hata!", text: "Mesaj gönderilme esnasında hata, lütfen daha sonra tekrar deneyiniz!", type: "info", confirmButtonClass: "btn-danger" });
}
function ara(e) {
    var t = $("#open-Arama input").val();
    t.length > 0 && (1 == e ? (location.href = "/arama?q=" + t) : 2 == e ? (location.href = "en/search?q=" + t) : 8 == e && (location.href = "esp/buscar?q=" + t));
}
function HesapNoGetir(e) {
    $("#bankHavale .modal-content").load("/Partial/PartialHesapBilgiForm", { HesapID: e }, function () {
        $("#bankHavale").modal();
    });
}
$(".rating-form .rating-star li").click(function () {
    var e = $(this).index();
    $.each($(".rating-form .rating-star li"), function (t, a) {
        t > e ? ($(a).removeClass("active"), $(".rating-form .rating-star li:eq(" + t + ") i").css("color", "#666666")) : ($(a).addClass("active"), $(".rating-form .rating-star li:eq(" + t + ") i").css("color", "#e1b813"));
    });
}),
    $(".fav input[type=checkbox]").change(function () {
        $(this).prop("checked") ? $(this).next("label").text("Kaldır") : $(this).next("label").text("Seç"), 0 == $(".fav input[type=checkbox]:checked").length ? $(".toolbar").addClass("hidden") : $(".toolbar").removeClass("hidden");
    }),
    $("#favKaldir").click(function () {
        swal(
            {
                title: "Seçilen Favori Ürünleriniz Kaldırılacaktır Onaylıyor Musunuz?",
                text: "Seçilen ürünler kaldırılacaktır!",
                type: "warning",
                showCancelButton: !0,
                cancelButtonClass: "btn-default",
                cancelButtonText: "Vazgeç",
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Kaldır",
                closeOnConfirm: !1,
            },
            function () {
                var e = new Array();
                $(".fav input[type=checkbox]:checked").each(function (t, a) {
                    var n = $(this).data("id");
                    e.push(n);
                }),
                    $.post("/Home/FavlariKaldir", { idler: e }, function (e) {
                        1 == e
                            ? (swal({ title: "Kaldırıldı!", text: "Seçilmiş favoriler kaldırıldı.", type: "success", confirmButtonClass: "btn-success" }),
                                setTimeout(function () {
                                    location.href = location.href;
                                }, 2e3))
                            : swal({ title: "Hata!", text: "Kaldırma esnasında hata, lütfen daha sonra tekrar deneyiniz :(", type: "error", confirmButtonClass: "btn-danger" });
                    });
            }
        );
    }),
    $("#favSepeteAt").click(function () {
        var e = new Array();
        $(".fav input[type=checkbox]:checked").each(function (t, a) {
            var n = $(this).data("id");
            e.push(n);
        }),
            $.post("/Home/FavlariSepeteAt", { idler: e }, function () {
                swal({ title: "Eklendi!", text: "Seçilmiş ürünler sepete eklendi!.", type: "success", confirmButtonClass: "btn-success" }), MiniSepetiGetir(), SepetGetir();
            });
    }),
    $("select[name=ordertype],select[name=showcount]").change(function () {
        var e = $(this).find("option:selected").data("url");
        location.href = e;
    });
