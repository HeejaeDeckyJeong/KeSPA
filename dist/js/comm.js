// initiate full page scroll

$('#fullpage').fullpage({
    scrollBar: true,
    responsiveWidth: 300,
    navigation: false,
    navigationTooltips: ['a', 'b', 'c', 'd'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
    fitToSection: false,
    navigationPosition: 'le',

    afterLoad: function (anchorLink, index) {
        var loadedSection = $(this);

        //using index
        if (index == 1) {
            /* add opacity to arrow */
            $('.fa-chevron-down').each(function () {
                $(this).css('opacity', '1');
            });
            $('.header-links a').each(function () {
                $(this).css('color', 'white');
            });
            $('.header-links').css('background-color', 'transparent');
            $('.logo-w').css('display', 'block');
            $('.logo-b').css('display', 'none');
            $('.navTrigger > i').css('background-color', 'white');
        } else if (index != 1) {
            $('.header-links a').each(function () {
                $(this).css('color', 'black');
            });
            $('.header-links').css('background-color', 'white');

            $('.logo-w').css('display', 'none');
            $('.logo-b').css('display', 'block');
            $('.navTrigger > i').css('background-color', 'black');
        }

        //using index
        if (index == 2) {
            /* animate skill bars */
            $('.skillbar').each(function () {
                $(this)
                    .find('.skillbar-bar')
                    .animate(
                        {
                            width: $(this).attr('data-percent'),
                        },
                        2500
                    );
            });
        }
    },
});

// move section down one
$(document).on('click', '#moveDown', function () {
    $.fn.fullpage.moveSectionDown();
});

// fullpage.js link navigation
$(document).on('click', '#skills', function () {
    $.fn.fullpage.moveTo(2);
});

$(document).on('click', '#projects', function () {
    $.fn.fullpage.moveTo(3);
});

$(document).on('click', '#contact', function () {
    $.fn.fullpage.moveTo(4);
});

// smooth scrolling
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    700
                );
                return false;
            }
        }
    });
});
