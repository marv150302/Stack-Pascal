var Community = function () {

    this.data = new Array()

    this.selected_community = ""
}

//this functions is used for live search of community
Community.prototype.livesearch = function (text) {

    //console.log("searching");

    let resultList = document.querySelector('#result-lists')

    resultList.innerHTML = ``;

    this.data.map(function (algo) {

        text.split(" ").map(function (word) {

            if (algo.name.toLowerCase().indexOf(word.toLowerCase()) != -1) {

                resultList.innerHTML += '<li class="list-group-item">' + algo.name + '</li>';

            }
        })
    })
}

//this is to load posts on the 'other' view
Community.prototype.loadPost = function () {

    //we always need to empty the container so the new values don't append at the end
    $('#post-container-other-view').empty();

    

    //current community index
    let index = community.data.findIndex(x => x.name === community.selected_community);

    //we filter the posts based on the community ID
    var filtered_post_array = post.data.filter(function (el) {

        return el.communityID == community.data[index].ID
               
    })

    /* we update the new community insights values(followers, number of post) */

    $('#community-number-of-followers').html(community.data[index].followers)

    $('#community-number-of-post').html(community.data[index].number_of_post)

    /** */

    for (let index = 0; index < filtered_post_array.length; index++) {

        const element = filtered_post_array[index];
    
        let image_src = "http://" + server.IP + "/php/" + server.folder_name+"/img/feed_post/" + element.ID + ".png";
    
        let pfp = "http://" + server.IP + "/php/" + server.folder_name+"/img/" + user.id + "/" + "pfp/" + user.id + ".png";
    
        let postIsLiked = user.likedPost.includes(element.ID);//check if post ID is present in our liked array containing ID of liked post
    
        document.getElementById('post-container-other-view').appendChild(
    
          card.postCard(
            element.username,
            element.date,
            element.title,
            element.text,
            image_src,
            element.ID,
            element.likes,
            postIsLiked,
            element.comments,
            pfp
          ))
      }
}

var community = new Community()


//if the user clicks on one of the results then we load it in the input field
$('#result-lists').on('click', 'li', function () {

    $('.post-community-name').val($(this).html())//we write the result in our input text

    community.selected_community = $(this).html();

    $('.selected-community-value').show();

    $('.selected-community-value').val($(this).html())

    $('#result-lists').slideUp()//we slide up the animation

    $('.community-select').slideUp()

    //we load the news posts based on the community when the user changes the community
    community.loadPost()

});



