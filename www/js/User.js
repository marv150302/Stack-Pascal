var User = function () {
    
    this.id = window.localStorage.getItem("id")

    this.data = new Object()

    this.likedPost = []

    this.upvotedComments = []

    this.post = []
}

User.prototype.loadProfileData = function () {
    
    document.getElementById('profile-username').innerHTML = '@' + this.data.name;

    document.getElementById('profile-view-profile-picture').src = "http://" + server.IP + "/php/"+ server.folder_name+"/img/" + this.id + "/pfp/" + this.id + ".png";

    document.getElementById('user-number-of-post').innerHTML = " " + this.data.number_of_post

    document.getElementById('number-of-likes').innerHTML = " " + this.data.likes

    this.loadProfilePost()
}

User.prototype.loadProfilePost = function () {
    
    this.post = post.data.filter(function (el) {

        return el.userID == user.id 

    });
    
    this.post.forEach(element => {


        
    let post_container = document.createElement('div');

    post_container.className = 'profile-post row';

    post_container.id = element.ID

    post_container.setAttribute('onclick', "modal.show('.full-screen-post', this.id)")

    let profile_container = document.getElementById('profile-post-container');

    //---------//---------//---------//---------//---------//---------//---------

    //post-community-date

    //---------//---------//---------//---------//---------//---------//---------


    let post_info_row = document.createElement('div');

    post_info_row.className = "row";

    let post_info_col = document.createElement('div');

    post_info_col.className = 'col';

    let post_info = document.createElement('p');

    post_info.className = "profile-post-community-name";

    post_info.innerHTML = element.community_name + ' - ' + element.date

 

    //-----------//-----------//-----------//-----------//-----------//---------

    //post-text

    //---------//---------//---------//---------//---------//---------//---------


    let post_text_col = document.createElement('div');

    post_text_col.className = 'col';

    let post_text = document.createElement('p');

    post_text.className = "profile-post-text";

    post_text.innerHTML = element.text;

    //-----------//-----------//-----------//-----------//-----------//-----------

    //appending

    //-----------//-----------//-----------//-----------//-----------//-----------

    let community_date_row = document.createElement('div')

    community_date_row.className = 'row'

    let post_text_row = document.createElement('div')

    post_text_row.className = 'row'

    let column = document.createElement('div')

    column.className = 'col'

    community_date_row.append(post_info);

    post_text_row.append(post_text);

    column.append(community_date_row)

    column.append(post_text_row)

    post_container.append(column)
    
    profile_container.append(post_container);
    
    });

    

}
User.prototype.logout = function () {
    
    user = new User();

    window.localStorage.removeItem("email");

    window.localStorage.removeItem("password");

    window.localStorage.setItem("loggedin", 'true');

    window.localStorage.setItem("id", null);

    $('.login-view').show('slide', { direction: "down" }, 400);

}
var user = new User()
