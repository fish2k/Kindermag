$(document).ready(() => {
    
    var sliderHome,
        body       = $("body"),
        wnd        = $(window),
        overlay    = $(".overlay"),
        searchBtn  = $(".header-search"),
        burgerBtn  = $(".header-burger"),
        showFilter = $(".show-filter"),
        toTop      = $(".go-top");

    // кнопка "НАВЕРХ"
    wnd.scroll(function () {
        var offset = $(this).scrollTop();

        if ( offset >= 300 ) {
            toTop.addClass("show");
        } else {
            toTop.removeClass("show clicked");
            var fadeText = setTimeout(function () {
                toTop.find("span").text("наверх");

                clearTimeout(fadeText);
            }, 150);
        }
    });

    // скроллим НАВЕРХ
    toTop.on("click", function () {
        var th = $(this),
            goText = th.find("span").data("go");

        $(this).addClass("clicked");
        $(this).find("span").text(goText); // поiхали

        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });

    // ФИЛЬТР
    showFilter.on("click", function () {
        body.removeClass("state-search state-menu");
        body.toggleClass("state-filter");
    });

    // МЕНЮ
    burgerBtn.on("click", function () {
        body.removeClass("state-search state-filter");
        body.toggleClass("state-menu");
    });

    // ПОИСК
    searchBtn.on("click", function () {
        body.removeClass("state-menu state-filter");
        body.toggleClass("state-search");

        $(".header-main-search-input").focus();
    });
    
    // общий оверлэй
    overlay.on("click", function () {
        body.removeClass("state-menu state-search state-filter");
    });

    $(".reviews-faq-item").on("click", function () {
        $(".reviews-faq-item").removeClass("faq-active");
        $(this).toggleClass("faq-active");

        $(".reviews-faq-item").find(".faq-ask").stop().slideUp();
        $(this).find(".faq-ask").stop().slideDown();
    })

    // если блок со слайдером имеется в DOM - СТАРТУЕМ!
    if (document.querySelector(".slider-home-init")) {
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
            
            on: {
                init: function () {
                    $(".slider-home").css("opacity", "1");
                    console.log("slider initiated")
                }
            }
        });
    }

    var detailThumbsSlider = new Swiper(".detail-slider-thumbs", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,

        breakpoints: {
            0: {
                direction: "horizontal",
                spaceBetween: 15
            },
            481: {
                direction: "vertical",
            }
        }
    });

    var detailSlider = new Swiper(".detail-slider", {
        slidesPerView: 1,
        //loop: true,
        height: "auto",

        navigation: {
            prevEl: ".detail-prev",
            nextEl: ".detail-next"
        },

        thumbs: {
            swiper: detailThumbsSlider
        }

    });
});