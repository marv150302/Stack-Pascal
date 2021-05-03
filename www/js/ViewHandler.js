//we are going to use this variable to register the last
//home  view selector(news or post) the user selcted
//the default value is the home 
var lastViewSelectedByUser = "post-feed-container"


//we use this function to change the views
function switchView(activeIcon, viewToDisplay) {

    

    $('.active-bottom-icon').removeClass('active-bottom-icon')//we remove any previous selection

    $(activeIcon).addClass('active-bottom-icon')

    //$(activeIcon).addClass('-fill')

    $('.view').hide()//we hide any previous view

    $('.' + viewToDisplay).show()//we show the view we want 

    //now let's check if the user clicked the home view
    //if he clicked on the home view 
    //we need to handle wether to show the post view container
    //or show the new container
    
   
    
}

function switchHomeViewSelector(activeIcon, viewToDisplay, direction) {

    //we change the active icon color
    //$('.active-home-view-selector-icon').removeClass('active-home-view-selector-icon')//we remove any previous selection

    //$(activeIcon).addClass('active-home-view-selector-icon')

    //console.log(viewToDisplay);

    if (viewToDisplay == 'post-news-container') {
        
        mySwipe.next() 

    }else{

        mySwipe.prev() 
    }

    /*
    
    var show = $('.' + viewToDisplay).show('slide', {
        
        direction: direction, 
        
        queue: false
    
    });
    
    var viewToHide = '.home-selector-view:not(.' + viewToDisplay + ')'
    
    var hide = $(viewToHide).hide('slide', {
        
        direction: direction == "right" ? "left" : "right",//we slide
    
        queue: false
            
    })//we show the view we want 
    
    */

    

    /*lastViewSelectedByUser = viewToDisplay;

    var viewToHide = '.home-selector-view:not(.' + viewToDisplay + ')'

    var hide = $(viewToHide).hide("slide", {direction: direction == "right" ? "left" : "right"}, 400);

    var show = $('.' + viewToDisplay).show("slide", {direction: direction}, 400);*/

    
    
}

community_swiper.on('slideChange', function () {

    switchCurrentIconOtherView()

});

function switchCurrentIconOtherView() {
    
    switch (community_swiper.activeIndex) {
        case 0://clicked on the community icon

            //we fill the community icon with black color by changin the class name
                
            $('#community-icon').removeClass('bi bi-people');

            $('#community-icon').addClass('bi bi-people-fill');

            //we remove the filled icon from the marketplace icon
            $('#marketplace-icon').addClass('bi bi-bag');

            $('#marketplace-icon').removeClass('bi bi-bag-fill');

            break;

        case 1://clicked on the marketplace icon

            //we  fill the marketplace icon 
            $('#marketplace-icon').removeClass('bi bi-bag');

            $('#marketplace-icon').addClass('bi bi-bag-fill');

            //we remove the fill icon to the community icon
            
            $('#community-icon').addClass('bi bi-people');

            $('#community-icon').removeClass('bi bi-people-fill');
        

            break;
    
        default:
            break;
    }
}