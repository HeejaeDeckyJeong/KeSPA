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
            $('#myMenu').css('display', 'none');
            $('.myMenu2').css('display', 'flex');
            $('.navTrigger > i').css('background-color', 'white');
        } else if (index != 1) {
            $('.header-links a').each(function () {
                $(this).css('color', 'black');
            });
            $('.header-links').css('background-color', 'white');

            $('#myMenu').css('display', 'flex');
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
// youtube.js
// comm.js 위에다 추가

// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        videoId: 'tho0k_VR7kY', // 최초 재생할 유튜브 영상 ID
        playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'tho0k_VR7kY', // 반복 재생할 유튜브 영상 ID 목록
        },
        events: {
            // 영상이 준비되었을 때,
            onReady: function (event) {
                event.target.mute(); // 음소거!
            },
        },
    });
}

// bbs
const ANIMATEDCLASSNAME = 'animated';
const ELEMENTS = document.querySelectorAll('.item');
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
    let addAnimation = false;

    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index]) ELEMENTS_SPAN[index] = element.querySelector('span');

    element.addEventListener('mouseover', (e) => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + 'px';
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + 3 * 'px';

        // Add an animation-class to animate via CSS.
        if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });

    element.addEventListener('mouseout', (e) => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + 'px';
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + 2 * 'px';
    });
});
