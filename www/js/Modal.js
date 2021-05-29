var Modal = function () {}

Modal.prototype.show = function (modal, id) {

    //if we open the full screen

    if (modal == '.full-screen-post') {

        $(modal).attr('id', id)//we set the post ID

        httpRequest.loadComments(id)
        
        post_index = post.data.map(function(e) { return e.ID; }).indexOf(id);

        this.showPostFullScreen(
            
            post.data[post_index].username, 

            post.data[post_index].date, 

            post.data[post_index].title, 

            post.data[post_index].text
            
        )
    }

    if (modal == '.post-options') {
        
        //console.log(user.id, id);

        let index = user.post.findIndex(x => x.ID === id);

        if (index == -1) {//if the post on which we call the modal, wasn't posted by the current user,
                            //   we need to hide the delete post option

            $('#delete-post').hide();

            console.log('hide');
            
        }else{

            $('#delete-post').show();

            $(modal).attr('id', id);//we assign the modal(post-options) the id of the post on which we want to act
        }
    }
    

    //$(modal).slideDown()

    //$('.modalView').hide()
    
    $(modal).slideToggle()

    $('body').addClass('no-scroll')

    $(modal).addClass('overlay')

}
Modal.prototype.showPostFullScreen = function (username, date, title, text) {
    
    $('#full-screen-post-username').html('@'+username)

    $('#full-screen-post-date').html(date)

    $('#full-screen-post-title').html(title)

    $('#full-screen-post-text').html(text)

    

}

Modal.prototype.hide = function () {
    
    $('.modalView').slideUp()

    $('body').removeClass('no-scroll')

    $(modal).removeClass('overlay')

}


document.addEventListener('click', function (event) {

    /* var modalView = $('.modalView:not(.community-select)')

    for (let index = 0; index < modalView.length; index++) {

        const element = modalView[index];

        var isClickInsideElement = element.contains(event.target);

        if (!isClickInsideElement && $(element).is(":visible") && !$(element).is(':animated')) {

            //we close the div if we click outside and we allow the body to be scrollable
            $(element).slideUp()

            $('body').removeClass('no-scroll')

            $(element).removeClass('overlay')
        }

    } */

});

var modal = new Modal()