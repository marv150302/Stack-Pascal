var post = new Post()

//when the login view we prevent the body from scrolling
$('body').addClass('no-scroll')

//if the user has already logged in we direct him to his homepage
if (window.localStorage.getItem("loggedin") == 'true') {

    $('.login-view').hide();

    main()
}

//window.mySwipe = $('#slider').Swipe().data('Swipe');

var element = document.getElementById('slider')

window.mySwipe = new Swipe(element, {
    startSlide: 0,
    speed: 400,
    auto: 0,
    draggable: false,
    continuous: false,
    autoRestart: false,
    disableScroll: false, // prevent touch events from scrolling the page
    stopPropagation: false, 
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {

        if (index == 1) {
            
            $('#news-icon').addClass('active-home-view-selector-icon')

            $('#home-icon').removeClass('active-home-view-selector-icon')
        }else{

            $('#home-icon').addClass('active-home-view-selector-icon')

            $('#news-icon').removeClass('active-home-view-selector-icon')
        }
    }
  });





function main() {

    $('.active-bottom-icon').removeClass('active-bottom-icon')//we remove any previous selection

    $('#home-button').addClass('active-bottom-icon')

    $('body').removeClass('no-scroll')
    
    //we show the home view first when the app launches
    $('.view').hide()//we hide any previous view

    $('.home-view').show()

    httpRequest.getUserLikedPost(user.id, user)

    news.loadNews()

    post.loadPost()//we need to load the post for the homepage

    httpRequest.getUserData(user.id, user)

    httpRequest.getCommunities(community);

    community.selected_community = community.data[0].name;//we give the default community in (first one in the database)

    $('.selected-community-value').val(community.selected_community)

    community.loadPost();
    
    user.loadProfileData();

    init()

}



var other_view_swiper = document.getElementById('other-view-slider')


window.mySwipe = new Swipe(other_view_swiper, {
    startSlide: 0,
    speed: 400,
    auto: 0,
    draggable: false,
    continuous: false,
    autoRestart: false,
    disableScroll: false, // prevent touch events from scrolling the page
    stopPropagation: false, 
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {


    }
  });




//we use this for the pull for refresh function
PullToRefresh.init({

    onRefresh: function() { 

        console.log('here');
        
        httpRequest.getUserLikedPost(user.id, user)

        post.loadPost()//we need to load the post for the homepage

        httpRequest.getCommunities(community)//we reload the avalible communities

        //once it finishes it vibrates
        if (getMobileOperatingSystem().toLocaleLowerCase() == "android") {
            
            window.navigator.vibrate()

        }
    } ,

    mainElement: '#post-container',

    triggerElement: '#post-container',

    distMax : 80,

    distReload : 80,

});

PullToRefresh.init({

    onRefresh: function() { 

        news.loadNews()//we need to load the news 
        
        /*httpRequest.getUserLikedPost(user.id, user)

        post.loadPost()//we need to load the post for the homepage

        httpRequest.getCommunities(community)//we reload the avalible communities*/

        //once it finishes it vibrates
        if (getMobileOperatingSystem().toLocaleLowerCase() == "android") {
            
            window.navigator.vibrate()

        }
    } ,

    mainElement: '.news-container',

    triggerElement: '.news-container',

    distMax : 80,

    distReload : 80,

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



document.addEventListener('click', function(event) {

    var modalView = document.getElementsByClassName('modalView:not(.community-select)')

    for (let index = 0; index < modalView.length; index++) {

        const element = modalView[index];

        var isClickInsideElement = element.contains(event.target);

        if (!isClickInsideElement &&  $(element).is(":visible") && !$(element).is(':animated')) {

            //we close the div if we click outside and we allow the body to be scrollable
            $(element).slideUp()

            $('body').removeClass('no-scroll')

            $(element).removeClass('overlay')
        }
        
    }
    
});




/* document.addEventListener('click', function(event) {
    

    var communityContainer = document.getElementById('community-input-container')

    var isClickInsideElement = communityContainer.contains(event.target);

    if ( !isClickInsideElement ) {

        //console.log('ciao');

         //live search
        //if the user clicks outside the input field for the community
        //we remove empty all the result(li)

        //$('#result-list').empty()
    }

    var communityContainer = document.getElementById('community-input-container')

    var isClickInsideElement = communityContainer.contains(event.target);

    if ( !isClickInsideElement ) {

         //live search
        //if the user clicks outside the input field for the community
        //we remove empty all the result(li)

        //$('#result-list').empty()
    }
    
}); */

//we show the search button only if the user has typed something
$("input").keyup(function () {

    //result-list is the container(ul) used for the live search of the communities
    $('#result-lists').slideDown()//when the user is typing we slide down the result div

    if(!$(this).val()){

        $('.search-button').fadeOut();
    }
    else {

        $('.search-button').fadeIn();
    }
 });






function init() {


    /*

    //here we are setting the topBar height 
    //based on which element is the highest between the plus icon and the app title
    //for example in our case the highest is the plus button div container
    //so the topBar height is going to be based on the plus button div container height

    let appTitleHeight = $('#app-title').height() + "px"

    let plusButtonForUserFunctions = $('#plus-button-for-user-functions').height()

    $('#top-bar' ).css('height', Math.max(appTitleHeight, plusButtonForUserFunctions))

    //this is for setting the post container position in the home view
 
    let topBarHeight = $('#top-bar' ).height() + 10 + "px"

    let bottomBarHeight = $('#bottom-bar' ).height() - 20  + "px"

    $('#post-feed-container').css('margin-top', topBarHeight) 

    $('#post-feed-container').css('margin-bottom', bottomBarHeight) 
        

    */

     //here we are setting the topBar height 
    //based on which element is the highest between the plus icon and the app title
    //for example in our case the highest is the plus button div container
    //so the topBar height is going to be based on the plus button div container height
    let appTitleHeight = $('#app-title').height() + "px"

    let plusButtonForUserFunctions = $('#plus-button-for-user-functions').height()

    $('#top-bar' ).css('height', Math.max(appTitleHeight, plusButtonForUserFunctions))


    //this is for setting the post container position in the home view
 
    let topBarHeight = $('#top-bar' ).height() + $('#home-view-selector' ).height() - 90  + "px"

    let bottomBarHeight = $('#bottom-bar' ).height() - 20  + "px"

    $('#post-feed-container').css('margin-top', topBarHeight) //this is the distance from the top bar + the
                                                                //home view selector bar

    $('#post-feed-container').css('margin-bottom', bottomBarHeight) 


    $('.post-news-container').css('margin-top', topBarHeight) //this is the distance from the top bar + the
                                                                //home view selector bar

    $('.post-news-container').css('margin-bottom', bottomBarHeight) 


    $('#home-view-selector').css('top', $('#top-bar' ).height() )

    //the following settings are for the search view

    $('#search-result-container').css('margin-top', $('#search-bar').height() + 60)

    //the following is for the profile view

    let profile_pfp_height = $('#profile-view-profile-picture').height()

    //console.log( profile_pfp_height );

    //$("#profile-info").css('top', profile_pfp_height - 50)

    //$("#profile-info").css('height', profile_pfp_height - 50)
}


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
//

/*
//loading communities
console.log(community.data);
let resultList = document.querySelector("#result-list");
for (let index = 0; index < community.data.length; index++) {

    

    const element = community.data[index];

    resultList.innerHTML += "<option class='list-group-item'>"+ element.name + "</option>";
    
    console.log(element.name);
}*/