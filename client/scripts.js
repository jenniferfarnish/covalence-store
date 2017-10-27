$(document).ready(function() {
    let $toggleButton = $('.toggle-button');
    let $menuWrap = $('.menu-wrap');

    $(document).on('click', '.circle', function() {
        $('.menu-wrap').toggleClass('menu-show');
    });
});