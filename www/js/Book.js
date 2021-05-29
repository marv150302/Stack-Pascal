var Book = function () {}

Book.prototype.postBook = function () {
    

}

Book.prototype.readImageURL = function(input) {

    console.log('loaded-image')

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

      var reader = new FileReader()

      reader.onload = function (e) {

        $('#loaded-image')

          .attr('src', e.target.result)

          .css('width', '100%')

          .css('height', '100%')

          .css('object-fit', 'contain')

      }

      reader.readAsDataURL(input.files[0])
      //console.log(reader);
    }
  }
  Book.prototype.sendFile = function(fileData) {

    var formData = new FormData()

    formData.append('imageData', fileData)

    $.ajax({
      url: 'http://' + server.IP + '/php/"+ server.folder_name+"/upload.php',

      type: 'POST',

      /* data: formData, */
      data: {
        'id': user.id,

        "postText": 'test',

        'postTitle': 'test',

        'community': 1,

        'file': formData,
      },

      async: false,

      processData: false,

      contentType: "application/x-www-form-urlencoded",

      success: function (data) {

        console.log(data)
      },
      error: function (data) {

        alert('There was an error uploading your file!')
        
      }
    })
  }
  Book.prototype.postImage = function() {

    if (this.file) {

      if (/^image\//i.test(this.file.type)) {

        //post.sendFile(this.file);
        let text = $('#image-post-text').val()

        let title = $('#image-post-title').val()

        httpRequest.postImage(this.file, text, title)

      } else {

        alert('Not a valid image!')

      }
    }

  }