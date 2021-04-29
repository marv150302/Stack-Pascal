var News = function () {
    
    this.data = new Array()
}

News.prototype.loadNews = function () {

   this.data = new Array()

   httpRequest.fetchNewsData()

   $('#post-news-container div.card-rows').empty()

   //httpRequest.fetchPostData(this)

   for (let index = 0; index < this.data.length; index++) {

       const element = this.data[index];

       let image_src = "http://"+server.IP+"/php/"+ server.folder_name+"/img/feed_post/" + element.id + ".png";

       //let pfp = "http://"+server.IP+"/php/"+ server.folder_name+"/img/" + user.id + "/" + "pfp/" + user.id +  ".png";

       //let postIsLiked = user.likedPost.includes(element.ID);//check if post ID is present in our liked array containing ID of liked post
       
       document.getElementById('news-container').appendChild(

           card.newsCard(
               element.date,
               element.title, 
               element.text, 
               image_src, 
               element.ID,
               ))
   }

}


var news = new News()