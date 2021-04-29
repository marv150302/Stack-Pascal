var Post = function () {

  this.data = new Array()


}

Post.prototype.loadPost = function () {

  this.data = new Array()

  $('#post-feed-container div.card-rows').empty()

  httpRequest.fetchPostData(this)

  for (let index = 0; index < this.data.length; index++) {

    const element = this.data[index];

    let image_src = "http://" + server.IP + "/php/"+ server.folder_name+"/img/feed_post/" + element.ID + ".png";

    let pfp = "http://" + server.IP + "/php/"+ server.folder_name+"/img/" + user.id + "/" + "pfp/" + user.id + ".png";

    let postIsLiked = user.likedPost.includes(element.ID);//check if post ID is present in our liked array containing ID of liked post

    document.getElementById('post-container').appendChild(

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

Post.prototype.readImageURL = function (input) {

  console.log('loaded-image');

  //if the user has already uploaded an image and wants to change it
  //we need to remove the previous image
  if ($('#user-loaded-post-image-container').length > 0) {

    $('#user-loaded-post-image-container').remove()
  }

  let imageContainer = document.createElement("div")

  imageContainer.style.width = "300px"

  imageContainer.style.height = "300px"

  imageContainer.id = "user-loaded-post-image-container"

  imageContainer.style.marginLeft = "auto"

  imageContainer.style.marginRight = "auto"

  document.getElementById('post-loaded-image-container').append(imageContainer)



  var loadedImage = document.createElement("img")

  loadedImage.id = "loaded-image"

  loadedImage.className = "mx-auto d-block"

  document.getElementById('user-loaded-post-image-container').append(loadedImage)


  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {

      $('#loaded-image')

        .attr('src', e.target.result)

        .css('width', '100%')

        .css('height', '100%')

        .css('object-fit', 'contain')

    };

    reader.readAsDataURL(input.files[0]);
    //console.log(reader);
  }
}
//
//
if (window.File && window.FileReader && window.FormData) {

  var $inputField = $('#upload-photo');

  $inputField.on('change', function (e) {

    post.file = e.target.files[0];

    //console.log(post.file);
  });



} else {

  alert("File upload is not supported!");
}

Post.prototype.sendFile = function (fileData) {

  var formData = new FormData();

  formData.append('imageData', fileData);

  $.ajax({

    url: 'http://' + server.IP + '/php/"+ server.folder_name+"/upload.php',

    type: 'POST',

    /* data: formData, */

    data: {

      'id' : user.id,

      "postText": 'test',

      'postTitle': 'test',

      'community': 1,

      'file': formData,

      
    },

    async : false,

    processData: false,

    contentType: "application/x-www-form-urlencoded",

    success: function (data) {

      console.log(data);
    },
    error: function (data) {

      alert('There was an error uploading your file!');
    }
  });
}

Post.prototype.postImage = function () {

  let postID;

  //we are checking if there are any post 
  /* if (homepage.id.length == 0) {

    postID = 1;

  } else {

    //if there are posts
    postID = parseInt(homepage.id[0]) + 1;//we are taking the id of the last post

    //console.log(postID);
  } */

  if (this.file) {

    if (/^image\//i.test(this.file.type)) {

      //post.sendFile(this.file);

      let text = $('#image-post-text').val();

      let title = $('#image-post-title').val();

      httpRequest.postImage(this.file, text, title)

    } else {
      alert('Not a valid image!');
    }
  }

  //homepage.post('#img_post_community', '#img_post_title', '#img_post_text');

}

Post.prototype.loadSearchResult = function (text) {

  //we always empt everything to get fresh data
  $('#search-result-container').empty()

  let postResult = new Array()
  //
  //
  text = text.split(' ')

  //we iterate through the string

  for (let i = 0, length = text.length; i < length; i++) {

    const splittedText = text[i];

    for (let j = 0, length = this.data.length; j < length; j++) {

      const post = this.data[j];

      let res = post.title.toLowerCase().indexOf(splittedText)

      if (res != -1) {

        //we need to check if the post has already been pushed
        if (postResult.indexOf(post.ID) == -1) {//we check if it contains it

          postResult.push(post.ID)
        }

      }

    }

  }


  for (let index = 0, length = postResult.length; index < length; index++) {

    $('#search-result-container').hide()

    const resultCardDataID = postResult[index];

    //we need to get the position of the id in our data 
    pos = this.data.map(function (e) { return e.ID; }).indexOf(resultCardDataID);

    let title = this.data[pos].title;

    let date = this.data[pos].date

    let username = this.data[pos].username

    let imgSrc = "http://" + server.IP + "/php/"+ server.folder_name+"/img/feed_post/" + resultCardDataID + ".png";

    $(card.searchResultCard(

      title,

      date,

      username,

      imgSrc)).appendTo('#search-result-container').show('slow');

    /* document.getElementById('search-result-container').append(card.searchResultCard(
       
       title, 
       
       date,
       
       username,
       
       imgSrc))*/

  }

  $('#search-result-container').slideDown('slow')


}
