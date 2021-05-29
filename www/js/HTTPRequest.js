var HTTPRequest = function () {

}

//get request
HTTPRequest.prototype.fetchPostData = function (classObject) {

    var me = classObject

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?&type=fetch-post-data",

        type: 'GET',

        async: false,

        success: function (data) {


            data = JSON.parse(data);



            $.each(data, function (i, field) {

                me.data.push({

                    ID: field.ID,

                    userID: field.userID,

                    username: field.username,

                    date: field.date,

                    likes: field.likes,

                    text: field.text,

                    title: field.title,

                    comments: field.comments,

                    communityID: field.community_id,

                    community_name: field.community_name

                })

            });

        }
    });
}

HTTPRequest.prototype.fetchNewsData = function (classObject) {

    var me = news

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?&type=get-news-data",

        type: 'GET',

        async: false,

        success: function (data) {

            data = JSON.parse(data);

            $.each(data, function (i, field) {

                me.data.push({

                    ID: field.id,

                    text: field.text,

                    date: field.date,

                    title: field.title

                })

            });

        }
    });
}

//for user like
//post request

HTTPRequest.prototype.getUserID = function (email, password, userObject) {

    var me = userObject

    let id = $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/user.php?type=get-id",

        type: 'POST',

        data: {
            "email": email,

            'password': password
        },

        async: false,

        success: function (data) {

            me.id = data;

        }
    });

}

//get request
HTTPRequest.prototype.getUserData = function (userID, userObject) {

    var me = userObject

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/user.php?&type=get-user-profile-data&id=" + userID,

        type: 'GET',

        async: false,

        success: function (data) {

            data = JSON.parse(data);

            me.data.class = data.class,

                me.data.course = data.course,

                me.data.followers = data.followers,

                me.data.name = data.name,

                me.data.surname = data.surname,

                me.data.username = data.username

                me.data.number_of_post = data.number_of_post

                me.data.likes = data.likes

        }
    });

}

//get request
//get user liked post
HTTPRequest.prototype.getUserLikedPost = function (userID, userObject) {

    userObject.likedPost = new Array()

    var me = userObject

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?&type=get-liked-post&user_ID=" + userID,

        type: 'GET',

        async: false,

        success: function (data) {

            data = JSON.parse(data);

            $.each(data, function (i, field) {

                me.likedPost.push(field.post_ID)

            });

        }
    });
}

HTTPRequest.prototype.getUserUpvotedComments = function (userID) {

    user.upvotedComments = new Array()

    var me = user

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?&type=get-upvoted-comments&user_ID=" + userID,

        type: 'GET',

        async: false,

        success: function (data) {

           data = JSON.parse(data);

            $.each(data, function (i, field) {

                me.upvotedComments.push(field.comment_id)

            });

        }
    });
}


//get list of all communities and their data
HTTPRequest.prototype.getCommunities = function (communityObject) {

    var me = communityObject;

    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/community.php?&type=get_coommunities",

        type: 'GET',

        async: false,

        success: function (data) {

            data = JSON.parse(data);

            $.each(data, function (i, field) {

                me.data.push({

                    ID: field.ID,

                    name: field.name,

                    followers: field.number_participant,

                    category: field.category,

                    adminID: field.user_admin_ID,

                    number_of_post : field.number_of_post

                })

            });

        }
    });
}

HTTPRequest.prototype.login = function (email, password) {



    $.post("http://" + server.IP + "/php/" + server.folder_name + "/login.php", {

        email: email,

        password: password,

    },
        function (data) {


            if (data == 'correct') {

                $('#user-password').parent().parent().addClass('login-correct')

                $('#user-email').parent().parent().addClass('login-correct')


                //------//------//------//------//------//------//------//------

                $('#user-password').parent().parent().removeClass('login-error')

                $('#user-email').parent().parent().removeClass('login-error')

                //-----//-----//-----//-----//-----//-----//-----//-----//-----



                httpRequest.getUserID(email, password, user)

                window.localStorage.setItem("loggedin", 'true');
                window.localStorage.setItem("id", user.id);

                main()
                $('.login-view').hide('slide', { direction: "down" }, 700);

                location.reload()



            } else {

                $('#user-password').parent().parent().addClass('login-error')

                $('#user-email').parent().parent().addClass('login-error')

                //------//------//------//------//------//------//------//------

                $('#user-password').parent().parent().removeClass('login-correct')

                $('#user-email').parent().parent().removeClass('login-correct')


                window.localStorage.setItem("logged", false);
            }
        }
    );
}


HTTPRequest.prototype.loadComments = function (post_id) {


    $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/comments.php?type=get-comments",

        type: 'GET',

        data: {

            'post_ID': post_id
        },

        async: false,

        success: function (data) {
            
            data = JSON.parse(data);

            $('#comments-container').empty()

            //console.log(data);

            $.each(data, function (i, field) {

                user.upvotedComments = new Array()

                httpRequest.getUserUpvotedComments(user.id)

                //comment container 
                let comment_container = document.createElement('div')

                comment_container.className = 'row mb-3 text-center reply';

                let data = document.createElement('div')

                let upVoted = "col text-center"

                //if the user has liked the post reply 
                //then we need to add the 'upvoted-reply' class
                //which basically changes the color of the upvote icon to yellow
                //if the user hasn't liked the comment we won't add any class
                if (user.upvotedComments.indexOf(this.ID) != -1) {
                    
                    upVoted += " upvoted-reply";
                }


                data.className =  upVoted;

                data.id = this.ID

                /* upvote icon */

                data.insertAdjacentHTML('afterBegin', "<div class='row text-center'><div class='col'> <i id='reply-upvote' onclick='post.upvoteComment(this)' class='bi bi-arrow-up-square-fill reply-upvote'>" + " " + field.upvotes + " </i></div></div>")

                //text

                data.insertAdjacentHTML('afterBegin', "<div class='row text-center'><div class='col'> <p class='reply-text' >" + field.text + "</p></div></div>")

                //username

                data.insertAdjacentHTML('afterBegin', "<div class='row text-center'><div class='col'> <p class='reply-username' >" + "@" + field.username + "</p></div></div>")

                comment_container.append(data)

                $('#comments-container').append(comment_container);

            });

        }
    });
}


/* post http requests */
HTTPRequest.prototype.postComment = function (text, post_id) {

    let id = $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/comments.php?type=post-comment",

        type: 'POST',

        data: {
            "text": text,

            'post_ID': post_id,

            'user_ID': user.id
        },

        async: false,

        success: function (data) {

            httpRequest.loadComments(post_id)

            $('#reply-input-box').val('')

        }
    });

}
HTTPRequest.prototype.deletePost = function (post_id) {
    
    console.log(post_id);

    let id = $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?type=delete-post",

        type: 'POST',

        data: {

            'postID': post_id,
        },

        async: false,

        success: function (data) {

            console.log(data);

            //httpRequest.loadComments(post_id)

            //$('#reply-input-box').val('')

        }
    });

}

HTTPRequest.prototype.postText = function (text, title) {

    let index = community.data.findIndex(x => x.name === community.selected_community);//we get the index of the community from the array object

    let community_id = community.data[index].ID;//we retrieve the id 


    let id = $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?type=post-text",

        type: 'POST',

        data: {
            "text": text,

            'title': title,

            'userID': user.id,

            'community':  community_id//we get the id
        },

        async: false,

        success: function (data) {

            modal.hide()//once we have uploaded to the database we hide the modal

        }
    });

}
HTTPRequest.prototype.postImage = function (fileData, callback) {

    var formData = new FormData();

    formData.append('imageData', fileData);

    $.ajax({

        url: 'http://' + server.IP + '/php/' + server.folder_name+'/image-upload.php?id=' + user.id,

        type: 'POST',

        data: formData,

        contentType: false,

        processData: false,

        /* once we have uploaded the image to the server
        we need to upload the post with the text and the title */

         success: function (data) {

            callback() //we upload the text and the title 
                      // once we have uploaded the image to the database
        }, 

        error: function (data) {

            alert('There was an error uploading your file!');

        }
    });
}

HTTPRequest.prototype.likePost = function (postID, userID, operation) {

    $.post("http://" + server.IP + "/php/" + server.folder_name + "/post.php?&type=update-like", {

        id: postID,

        user_id: userID,

        operation: operation

    },
        function (data) {

            console.log(data);

        }
    );

}

HTTPRequest.prototype.upvoteComment = function (comment_id, operation) {

    let id = $.ajax({

        url: "http://" + server.IP + "/php/" + server.folder_name + "/post.php?type=upvote-comment",

        type: 'POST',

        data: {
            "comment_id": comment_id,

            "user_id" : user.id,

            "operation" : operation
        },

        async: false,

    });

}

HTTPRequest.prototype.postBook = function () {
    
    let name = $('#book-name').val();

    let price = $('#book-price').val()

    let isbn = $('#book-isbn').val()

    let phone_number = $('#seller-phone-number').val()

    let email = $('#seller-email').val()

    let subject = $('#book-subjects').val()

    let condition = $('#book-condition').val()

    let editor = $('#book-editor').val()

    let details = $('#book-details').val()


    console.log(name, price, isbn, phone_number,email, subject, condition, editor, details);

}
var httpRequest = new HTTPRequest()