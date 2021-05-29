var post = new Post()

//when the login view we prevent the body from scrolling
$('body').addClass('no-scroll')

//if the user has already logged in we direct him to his homepage
if (window.localStorage.getItem("loggedin") == 'true') {

    $('.login-view').hide();

    main()

}


var other_view_swiper = new Swiper('.other-view-swiper-container', {

    observer: true,
    observeParents: true,
    autoHeight: true,


});

var home_view_swiper = new Swiper('.home-swiper-container', {

    observer: true,
    observeParents: true,
    autoHeight: true,
    setWrapperSize: true,
    calculateHeight: true,

});


function main() {

    $('.active-bottom-icon').removeClass('active-bottom-icon')//we remove any previous selection

    $('#home-button').addClass('active-bottom-icon')

    $('body').removeClass('no-scroll')

    //we show the home view first when the app launches
    $('.view').hide()//we hide any previous view

    $('.home-view').show()


    //$('.other-view').show()

    //$('.other-view').hide()

    httpRequest.getUserLikedPost(user.id, user)

    httpRequest.getUserUpvotedComments(user.id);

    news.loadNews()

    post.loadPost()//we need to load the post for the homepage

    httpRequest.getUserData(user.id, user)

    httpRequest.getCommunities(community);

    community.selected_community = community.data[0].name;//we give the default community in (first one in the database)

    $('.selected-community-value').val(community.selected_community)

    community.loadPost();

    user.loadProfileData();

    longpressListener()

}


//we use this for the pull for refresh function
PullToRefresh.init({

    onRefresh: function () {

        httpRequest.getUserLikedPost(user.id, user)

        post.loadPost()//we need to load the post for the homepage

        httpRequest.getCommunities(community)//we reload the avalible communities

        //once it finishes it vibrates
        if (getMobileOperatingSystem().toLocaleLowerCase() == "android") {

            window.navigator.vibrate()

        }
    },

    mainElement: '#post-container',

    triggerElement: '#post-container',

    distMax: 80,

    distReload: 80,

});

PullToRefresh.init({

    onRefresh: function () {

        news.loadNews()//we need to load the news 

        /*httpRequest.getUserLikedPost(user.id, user)

        post.loadPost()//we need to load the post for the homepage

        httpRequest.getCommunities(community)//we reload the avalible communities*/

        //once it finishes it vibrates
        if (getMobileOperatingSystem().toLocaleLowerCase() == "android") {

            window.navigator.vibrate()

        }
    },

    mainElement: '.news-container',

    triggerElement: '.news-container',

    distMax: 80,

    distReload: 80,

});

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}


//we show the search button only if the user has typed something
$("input").keyup(function () {

    //result-list is the container(ul) used for the live search of the communities
    $('#result-lists').slideDown()//when the user is typing we slide down the result div

    if (!$(this).val()) {

        $('.search-button').fadeOut();
    }
    else {

        $('.search-button').fadeIn();
    }
});


//for the reply input container
//if the user is typing then we show the post button

$("#reply-input-box").keyup(function () {

    if (!$(this).val()) {
        $("button").fadeOut();
    }
    else {
        $("button").fadeIn()
    }
});





function longpressListener() {
    
        // get the element
    var el = document.getElementsByClassName('card');


    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('long-press', function(e) {

            // stop the event from bubbling up
            e.target.setAttribute('data-editing', 'true');

            modal.show('.post-options', this.id)
        });
    }

    // add a long-press event listener
}
