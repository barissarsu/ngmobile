!(function (e) {
    "use strict";
    var t = {
        scroll_top: function () {
            e("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var t = e("#scroll-top");
            e(window).on("scroll", function () {
                e(this).scrollTop() > e(this).height() ? t.addClass("btn-show").removeClass("btn-hide") : t.addClass("btn-hide").removeClass("btn-show");
            }),
                e("a[href='#top']").on("click", function () {
                    return e("html, body").animate({ scrollTop: 0 }, "normal"), !1;
                }),
                e(".btn-register-now").on("click", function () {
                    e(".user-signin-area").addClass("hidden"), e(".user-signup-area").addClass("show");
                });
        },
        mobile_menu: function () {
            e(".site-header .navigation-area .header-navigation-right").clone().appendTo(".mobile-menu");
            e(".dashborad-menu-area > .btn-close").on("click", function () {
                e(".dashborad-menu-area").toggleClass("active");
            }),
                e(".site-navigation .mainmenu-area nav").meanmenu({ meanMenuClose: "<i class='fa fa-close'></i>", meanMenuCloseSize: "18px", meanScreenWidth: "1199", meanExpandableChildren: !0, meanMenuContainer: ".mobile-menu" });
        },
        sticky_header: function () {
            if (e("#sticky-header").length) {
                e(".site-header").clone().appendTo("#sticky-header");
                e(window).on("scroll", function () {
                    e(window).width() > 992 && (e(this).scrollTop() > 350 ? e("#sticky-header").slideDown(500) : e("#sticky-header").slideUp(500));
                });
            }
        },
        scroll_bar: function () {
            var t;
            e(".listing-todo-main").length &&
                ((t = e(".listing-todo-main")).TrackpadScrollEmulator(),
                    e(window).resize(function () {
                        setTimeout(function () {
                            t.TrackpadScrollEmulator("recalculate");
                        }, 250);
                    }));
            e(".dashborad-menu-main").length &&
                ((t = e(".dashborad-menu-main")).TrackpadScrollEmulator(),
                    e(window).resize(function () {
                        setTimeout(function () {
                            t.TrackpadScrollEmulator("recalculate");
                        }, 250);
                    }));
        },
        nice_select_data_picker: function () {
            e("select").length && e("select").niceSelect(), e("#res_date").length && e("#res_date").datetimepicker();
        },
        bg_parallax: function () {
            e(".bg-parallax").length && e(".bg-parallax").parallax("35%", -0.25);
        },
        sticky_sidebar: function () {
            e(".sidebar.sidebar-one").length && e(".sidebar.sidebar-one").theiaStickySidebar({ containerSelector: ".main-wrapper", additionalMarginTop: 0, minWidth: 992 }),
                e(".sidebar.sidebar-two").length && e(".sidebar.sidebar-two").theiaStickySidebar({ containerSelector: "#listing_list", additionalMarginTop: 0, minWidth: 992 });
        },
        count_down: function () {
            e(".countdown").length &&
                e(".countdown").final_countdown({
                    start: "1362139200",
                    end: "1409961320",
                    now: "1387991319",
                    seconds: { borderColor: "#A02D50", borderWidth: "2" },
                    minutes: { borderColor: "#A02D50", borderWidth: "2" },
                    hours: { borderColor: "#A02D50", borderWidth: "2" },
                    days: { borderColor: "#A02D50", borderWidth: "2" },
                });
        },
        featured_location_slider: function () {
            e(".featured-location-carousel.style-one").length &&
                e(".featured-location-carousel.style-one").owlCarousel({
                    center: !1,
                    items: 4,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 30,
                    singleItem: !0,
                    dots: !0,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 }, 1400: { items: 4 } },
                }),
                e(".featured-location-carousel.style-two").length &&
                e(".featured-location-carousel.style-two").owlCarousel({
                    center: !1,
                    items: 4,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 2,
                    singleItem: !0,
                    dots: !1,
                    nav: !0,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 }, 1400: { items: 4 } },
                });
        },
        client_review_carousel: function () {
            e("#client-review-carousel").length &&
                e("#client-review-carousel").owlCarousel({
                    center: !1,
                    items: 3,
                    smartSpeed: 800,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    loop: !0,
                    margin: 30,
                    nav: !1,
                    dots: !0,
                    singleItem: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 } },
                });
        },
        brands_carousel: function () {
            e(".brands-carousel").length &&
                e(".brands-carousel").owlCarousel({
                    center: !1,
                    items: 4,
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    margin: 0,
                    singleItem: !1,
                    loop: !0,
                    nav: !1,
                    dots: !1,
                    responsive: { 280: { items: 1 }, 500: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
                });
        },
        features_cat_carousel: function () {
            e(".features-cat-carousel").length &&
                e(".features-cat-carousel").owlCarousel({
                    center: !0,
                    items: 5,
                    autoplay: !1,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 10,
                    singleItem: !0,
                    dots: !1,
                    nav: !1,
                    responsive: { 280: { items: 2 }, 520: { items: 3 }, 768: { items: 3 }, 992: { items: 3 }, 1200: { items: 5 } },
                }),
                e(".features-cat-carousel2").length &&
                e(".features-cat-carousel2").owlCarousel({
                    center: !1,
                    items: 6,
                    autoplay: !1,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 10,
                    singleItem: !0,
                    dots: !1,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 320: { items: 2 }, 400: { items: 3 }, 768: { items: 4 }, 992: { items: 5 }, 1200: { items: 6 } },
                });
        },
        todo_items_carousel: function () {
            e(".todo-items-carousel").length &&
                e(".todo-items-carousel").owlCarousel({
                    center: !1,
                    items: 5,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 10,
                    singleItem: !0,
                    dots: !1,
                    nav: !0,
                    navText: ["<span>prev</span>", "<span>next</span>"],
                    responsive: { 280: { items: 1 }, 575: { items: 2 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 }, 1400: { items: 5 } },
                }),
                e(".todo-items-carousel2").length &&
                e(".todo-items-carousel2").owlCarousel({
                    center: !1,
                    items: 3,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 30,
                    singleItem: !0,
                    dots: !0,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 } },
                });
        },
        listing_todo_single: function () {
            e(".listing-todo-feature-list.carousel-nav-dots").length &&
                e(".listing-todo-feature-list.carousel-nav-dots").owlCarousel({
                    center: !1,
                    items: 3,
                    autoplay: !0,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 0,
                    singleItem: !0,
                    dots: !0,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 }, 1400: { items: 3 } },
                }),
                e(".listing-todo-thumbnail-carousel").length &&
                e(".listing-todo-thumbnail-carousel").owlCarousel({
                    center: !1,
                    items: 3,
                    autoplay: !1,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 0,
                    singleItem: !0,
                    dots: !0,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 }, 1400: { items: 3 } },
                });
        },
        grid_masonry: function () {
            var t = e("#masonry");
            t.length > 0 &&
                t.imagesLoaded(function () {
                    t.masonry({ itemSelector: ".grid-item" });
                });
        },
        review_rating: function () {
            if (e(".review-rating").length > 0) {
                e(".review-rating").rate({ max_value: 5, step_size: 1 });
            }
        },
        single_product: function () {
            e(".product-detail-slide").length > 0 && e(".product-detail-slide").owlCarousel({ items: 1, loop: !0, autoplay: !0, nav: !1, dots: !1 }),
                e(".product-detail-slide").length > 0 &&
                (e(".thumbnails").eq(0).addClass("active"),
                    e(".product-detail-slide").on("changed.owl.carousel", function (t) {
                        e(".thumbnails").removeClass("active");
                        var i = t.item.index - 2;
                        i >= 3 && (i = 0), e(".thumbnails").eq(i).addClass("active");
                    }),
                    e(".thumbnails a").click(function (t) {
                        t.preventDefault(), e(".thumbnails").removeClass("active");
                        var i = e(".thumbnails a").index(this);
                        e(".thumbnails").eq(i).addClass("active"), e(".product-detail-slide").trigger("to.owl.carousel", [i, 300, !0]);
                    }));
        },
        listing_gallery: function () {
            e(".listing-gallery-slide").length > 0 && e(".listing-gallery-slide").owlCarousel({ items: 1, loop: !0, autoplay: !0, dots: !1, nav: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }),
                e(".listing-gallery-slide").length > 0 &&
                (e(".thumbnails").eq(0).addClass("active"),
                    e(".listing-gallery-slide").on("changed.owl.carousel", function (t) {
                        e(".thumbnails").removeClass("active");
                        var i = t.item.index - 2;
                        i >= 3 && (i = 0), e(".thumbnails").eq(i).addClass("active");
                    }),
                    e(".thumbnails a").click(function (t) {
                        t.preventDefault(), e(".thumbnails").removeClass("active");
                        var i = e(".thumbnails a").index(this);
                        e(".thumbnails").eq(i).addClass("active"), e(".listing-gallery-slide").trigger("to.owl.carousel", [i, 300, !0]);
                    }));
        },
        input_spinner: function () {
            var t = { maxValue: 100, minValue: 0 };
            e(".input-spinner.product-no").WanSpinner(t), e(".input-spinner.number").WanSpinner(t);
        },
        youtube_video: function () {
            e(".video-btn").length > 0 && e(".video-btn").yu2fvl();
        },
        testimonial: function () {
            e("#testimonial-carousel").length && e("#testimonial-carousel").owlCarousel({ center: !1, items: 1, margin: 0, autoplay: !0, singleItem: !0, smartSpeed: 500, loop: !0, nav: !1, dots: !0 });
        },
        price_distance_range: function () {
            if (e("#search_distance").length > 0) {
                var t = function (t, i) {
                    e(".distance-value").text(i.toFixed(0));
                };
                new RangeSlider(e("#search_distance"), { percentage: 60, onMove: t, onDown: t, pollLimit: 100 });
            }
            if (e("#search_price").length > 0)
                (t = function (t, i) {
                    e(".price-value").text((i / 0.005).toFixed(0));
                }),
                    new RangeSlider(e("#search_price"), { percentage: 30, onMove: t, onDown: t, pollLimit: 100 });
        },
        mega_menu_carousel: function () {
            e(".mega-menu-content").length &&
                e(".mega-menu-content").owlCarousel({
                    center: !1,
                    items: 5,
                    autoplay: !1,
                    autoplayTimeout: 3e3,
                    smartSpeed: 800,
                    loop: !0,
                    margin: 30,
                    singleItem: !0,
                    dots: !0,
                    nav: !1,
                    responsive: { 280: { items: 1 }, 768: { items: 3 }, 992: { items: 3 }, 1200: { items: 4 }, 1400: { items: 5 } },
                });
        },
        add_listing_tab: function () {
            if (e("#add-listing-tab").length > 0) {
                var t = e("#listinfo"),
                    i = t.validate(),
                    a = e("#listlocation"),
                    n = a.validate(),
                    o = e("#listcat"),
                    s = o.validate();
                e("#add-listing-tab").steps({
                    onChange: function (e, l, r) {
                        if (0 === e) {
                            if ("forward" === r) return t.valid();
                            "backward" === r && i.resetForm();
                        }
                        if (2 === e) {
                            if ("forward" === r) return a.valid();
                            "backward" === r && n.resetForm();
                        }
                        if (3 === e) {
                            if ("forward" === r) return o.valid();
                            "backward" === r && s.resetForm();
                        }
                        return !0;
                    },
                    onFinish: function () {
                        alert("Wizard Completed");
                    },
                });
            }
        },
        circle_progress: function () {
            e("#circle").length > 0 && e("#circle").circleProgress({ value: 1, size: 130, fill: { color: ["#F12C15"] } }), e("#circle1").length > 0 && e("#circle1").circleProgress({ value: 1, size: 130, fill: { color: ["#F12C15"] } });
        },
        tag_keyword: function () {
            e("#tag-keyword").length > 0 && new TagsInput({ selector: "tag-keyword", duplicate: !1, max: 8 }).addData(["tags", "here"]);
        },
        line_chart: function () {
            e("#simple-line-chart").length > 0 &&
                new Chartist.Line(
                    "#simple-line-chart",
                    {
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        series: [
                            [1, 9, 7, 8, 5, 12, 5],
                            [2, 12, 9, 11, 7, 10, 3],
                        ],
                    },
                    {
                        fullWidth: !0,
                        axisY: {
                            labelInterpolationFnc: function (e) {
                                return 500 * e;
                            },
                        },
                        chartPadding: { right: 40 },
                        plugins: [Chartist.plugins.tooltip()],
                    }
                ),
                e("#simple-line-chart2").length > 0 && new Chartist.Line("#simple-line-chart2", { labels: !1, series: [[1, 9, 7, 8, 5, 12, 15]] }, { fullWidth: !0, chartPadding: { left: -20 }, plugins: [Chartist.plugins.tooltip()] });
        },
        counter: function () {
            if (e("#counter").length > 0) {
                var t = 0;
                e(window).on("scroll", function () {
                    var i = e("#counter").offset().top - window.innerHeight;
                    0 == t &&
                        e(window).scrollTop() > i &&
                        (e(".counter-value").each(function () {
                            var t = e(this),
                                i = t.attr("data-count");
                            e({ countNum: t.text() }).animate(
                                { countNum: i },
                                {
                                    duration: 2e3,
                                    easing: "swing",
                                    step: function () {
                                        t.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        t.text(this.countNum);
                                    },
                                }
                            );
                        }),
                            (t = 1));
                });
            }
        },
        initializ: function () {
            t.scroll_top(),
                t.mobile_menu(),
                t.sticky_header(),
                t.scroll_bar(),
                t.nice_select_data_picker(),
                t.bg_parallax(),
                t.sticky_sidebar(),
                t.count_down(),
                t.featured_location_slider(),
                t.client_review_carousel(),
                t.brands_carousel(),
                t.features_cat_carousel(),
                t.todo_items_carousel(),
                t.listing_todo_single(),
                t.grid_masonry(),
                t.review_rating(),
                t.single_product(),
                t.listing_gallery(),
                t.input_spinner(),
                t.youtube_video(),
                t.testimonial(),
                t.price_distance_range(),
                t.mega_menu_carousel(),
                t.add_listing_tab(),
                t.circle_progress(),
                t.line_chart(),
                t.tag_keyword(),
                t.counter();
        },
    };
    e(function () {
        t.initializ();
    });
})(jQuery);
