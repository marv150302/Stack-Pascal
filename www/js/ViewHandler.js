//we use this function to change the views
function switchView(activeIcon, viewToDisplay) {

    $('.active-bottom-icon').removeClass('active-bottom-icon')//we remove any previous selection

    $(activeIcon).addClass('active-bottom-icon')

    $('.view').hide()//we hide any previous view

    $('.' + viewToDisplay).show()//we show the view we want 

}


other_view_swiper.on('slideChange', function () {

    $('#community-icon').toggleClass('bi bi-people bi bi-people-fill')

    $('#marketplace-icon').toggleClass('bi bi-bag bi bi-bag-fill')

});

home_view_swiper.on('slideChange', function () {

    $('#home-icon').toggleClass('active-home-view-selector-icon ')

    $('#news-icon').toggleClass('active-home-view-selector-icon ')

});



/* let str = 'bi bi-people';

const fill = '-fill';

let fill_icon = str.concat(fill);

let substr = fill_icon.substr(0, fill_icon.length - fill.length)

console.log(substr);

console.log(str.concat(fill)); */


//we update the selector(home view, other view) color