$(document).ready(function () {
    $('.news__slider').slick({
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.week').slick({
        dots: false,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('.decors__img').on('click', function () {
        var imgPath = $(this).attr('data-img-path');
        $('.week__slide').css("background-image", "url("+imgPath+")");
    });

    function Tabs(ul, tabContent, ul_li, ul_li_a) {
        var timeInterval, tabCount = 0, currnetIndex = 1;
        tabCount = ul.find('li a').length;
        var tabContentObj = tabContent;
        changeTabIndex();
        timeInterval = setInterval(function () { changeTabIndex(); }, 5 * 1000);

        function changeTabIndex() {
            if (currnetIndex > tabCount) {
                currnetIndex = 1;
            }
            tabContentObj.hide();
            ul.find('li.selected').removeClass('selected');
            var currentAncorObj = ul.find('li a').eq(currnetIndex - 1);
            currentAncorObj.parent().addClass('selected');
            $(currentAncorObj.attr('href')).fadeIn(1000);
            currnetIndex++;
        };

        ul_li.mouseenter(function () {
            clearInterval(timeInterval);
        }).mouseleave(function () {
            timeInterval = setInterval(function () { changeTabIndex(); }, 5 * 1000);
        });

        ul_li_a.click(function () {
            tabContentObj.hide();
            ul.find('li.selected').removeClass('selected');
            var currentAncorObj = $(this);
            currnetIndex = ul.find('li a').index($(this)) + 1;
            currentAncorObj.parent().addClass('selected');
            $(currentAncorObj.attr('href')).fadeIn(1000);
            currnetIndex++;
        });
    };
    
    Tabs($('ul#tabs'), $('.tabContent'), $('#tabs li'), $('#tabs li a'));
    Tabs($('ul#tabs2'), $('.tabContent2'), $('#tabs2 li'), $('#tabs2 li a'));

});