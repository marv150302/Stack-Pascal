var Modal = function () {
    

}

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
    

    

    $('.modalView').hide()
    
    $(modal).slideDown()

    $('body').addClass('no-scroll')

    $(modal).addClass('overlay')

}
Modal.prototype.showPostFullScreen = function (username, date, title, text) {
    
    $('#full-screen-post-username').html('@'+username)

    $('#full-screen-post-date').html(date)

    $('#full-screen-post-title').html(title)

    $('#full-screen-post-text').html(text)

    

}

//this is just for the full screen post modal

Modal.prototype.loadComments = function () {
    

}
Modal.prototype.hide = function () {
    
    $('.modalView').slideUp()

    $('body').removeClass('no-scroll')

    $(modal).removeClass('overlay')

}

var modal = new Modal()