$(document).ready(() => {
    
    var sliderHome,
        body       = $("body"),
        wnd        = $(window),
        overlay    = $(".overlay"),
        searchBtn  = $(".header-search"),
        burgerBtn  = $(".header-burger"),
        showFilter = $(".show-filter"),
        toTop      = $(".go-top");

    var main_menu_width = $('.header-cats-list').innerWidth();
    var avialable_menu_width = main_menu_width - 150;
    var items_width = 0;
    
    $(".header-cats-item").each(function () {
        var item_width = $(this).innerWidth();
        items_width += item_width;

        if (items_width >= avialable_menu_width) {
            $(this).addClass('sub');
        }
    });

    var sub_li = $('.header-cats-item.sub');
    $('.header-cats-item.sub').remove();

    //$('.header-cats-inner').append('<div class="header-cats-more"><img src="images/header-more.svg" alt="Ещё" class="header-cats-more-img"><span>Ещё</span><ul class="header-cats-more-list"></ul></div>');
    
    sub_li.each(function () {
        var item = $(this).clone();
        $('.header-cats-more-list').append(item);

        if (wnd.innerWidth() <= 767) {
            var clonedItems = $('.header-cats-more-list').children(),
                clonedItemsClone = clonedItems.clone();

            $('.header-cats-list').append(clonedItemsClone);
            clonedItems.remove();
        }
    });

    $(".header-cats-item").hover(
        function () {
            $(".header-cats-item").addClass("nothover");
            $(this).addClass("hover");
        },
        function () {
            $(".header-cats-item").removeClass("nothover");
            $(this).removeClass("hover")
        }
    )

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
    });



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

        $(".slider-home-init").hover(
            function () {
                sliderHome.autoplay.stop()
            },
            function () {
                sliderHome.autoplay.start()
            }
        )
    }

    var shopSlider = new Swiper(".shop-slider", {
        slidesPerView: 1,

        autoplay: {
            delay: 3000
        }
    });

    $(".shop-slider").hover(
        function () {
            shopSlider.autoplay.stop()
        },
        function () {
            shopSlider.autoplay.start()
        }
    )

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

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});