$(document).ready(() => {
    
    var sliderHome,
        body = $("body"),
        overlay = $(".overlay"),
        searchBtn = $(".header-search"),
        burgerBtn = $(".header-burger");

    burgerBtn.on("click", function () {
        body.removeClass("on-search");
        body.toggleClass("on-menu");
    })

    searchBtn.on("click", function () {
        body.removeClass("on-menu");
        body.toggleClass("on-search");

        $(".header-main-search-input").focus();
    })
    
    overlay.on("click", function () {
        body.removeClass("on-menu on-search");
    })

    sliderHome = new Swiper(".slider-home-init", {
        slidesPerView: 1,
        loop: true,

        pagination: {
            el: ".slider-home-nav",
            type: "bullets",
            bulletElement: "div",
            clickable: true
        },

        navigation: {
            prevEl: ".slider-home-prev",
            nextEl: ".slider-home-next"
        },

        autoplay: {
            delay: 3000
        },

        // watchSlidesProgress: true,
        // watchSlidesVisibility: true,
        
        on: {
            init: function () {
                $(".slider-home").css("opacity", "1");
            }
        }
    });

});