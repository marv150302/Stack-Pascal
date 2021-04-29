var Card = function () {
    

}

Card.prototype.postCard = function (post_username, post_date, post_title, post_text, image_src, postID, likes, isLiked, n_comments, pfp_src) {

    let card = document.createElement('div');

    card.className = 'card';


    let pfp = document.createElement("img")

    pfp.src = pfp_src

    pfp.className = "card-pfp img-fluid"




    let username = document.createElement('h6');

    username.append(pfp)

    username.style.color = "gray"

    username.style.fontWeight = 'bold'

    username.innerHTML += " " + post_username + ' ' + '<i style="color:rgb(247, 194, 68);font-weight: normal; font-size=1px;">@marvelasuenimhen<i/>';

    

    username.className = 'card-username';



    let date = document.createElement('h7');

    date.innerText = post_date;

    date.className = 'card-date';



    let cardImage = document.createElement('img');
    
    cardImage.className = 'card-img-top';

    cardImage.src = image_src

    cardImage.setAttribute("onerror", "this.style.display='none'")



    let cardBody = document.createElement('div');

    cardBody.className = 'card-body';



    let title = document.createElement('h4');
    
    title.innerText = post_title;

    title.className = 'card-title';

    title.style.color = "black"

    title.style.fontFamily = "helvetica"



    let text = document.createElement('h6');

    text.innerText = post_text

    text.className = 'card-text';



    //buttons
    let buttonRow = document.createElement('div');

    buttonRow.className = "row card-button-row"



    let likeButton = document.createElement("i");

    likeButton.id = postID
    
    likeButton.setAttribute("onclick",

     "httpRequest.likePost(this.id, user.id, this.style.color == 'rgb(247, 194, 68)' ? 'remove' : 'add'); card.updateLikeLocally(this.id)")

     
    likeButton.innerHTML += " " + likes

    likeButton.className = isLiked ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'

    likeButton.style.color = isLiked ? 'rgb(247, 194, 68)' : 'black'

    likeButton.style.marginRight = "20px"
    
    likeButton.style.marginTop = "5%"

    


    let commentButton = document.createElement("i");
    
    commentButton.className = "bi bi-chat-left-text ";

    commentButton.id = postID

    commentButton.setAttribute("onclick", "modal.show('.full-screen-post', this.id)")

    commentButton.innerHTML += " " + " " + n_comments

    

    commentButton.style.marginTop = "5%"


    

    let shareButton = document.createElement("i");

    shareButton.className = "bi bi-upload";

    shareButton.style.marginLeft = "20px"

    shareButton.style.marginTop = "5%"

    shareButton.innerHTML += " Share"


    
    //appending buttons to the button row
    buttonRow.appendChild(likeButton)
    buttonRow.appendChild(commentButton)
    buttonRow.appendChild(shareButton)
    //end button function

    //appending
    card.appendChild(username)
    card.appendChild(date)
    cardBody.appendChild(title);
    cardBody.appendChild(text)

    card.appendChild(cardBody);
    card.appendChild(cardImage)
    card.appendChild(buttonRow)

    let row = document.createElement("div")
    row.className ="row card-rows"    

    row.appendChild(card)
    
    return row;//we return the card
}

Card.prototype.newsCard = function (news_date, news_title, news_text, image_src, newsID) {

    let card = document.createElement('div');

    card.className = 'card news-card'

    let date = document.createElement('h7');

    date.innerText = news_date;

    date.className = 'card-date';



    let cardImage = document.createElement('img');
    
    cardImage.className = 'card-img-top';

    cardImage.src = image_src

    cardImage.setAttribute("onerror", "this.style.display='none'")



    let cardBody = document.createElement('div');

    cardBody.className = 'card-body';



    let title = document.createElement('h4');
    
    title.innerText = news_title;

    title.className = 'card-title';

    title.style.color = "rgb(247, 194, 68)"

    title.style.fontFamily = "helvetica"



    let text = document.createElement('h6');

    text.innerText = news_text

    text.className = 'card-text';

    //appending
    card.appendChild(date)
    cardBody.appendChild(title);
    cardBody.appendChild(text)

    card.appendChild(cardBody);
    card.appendChild(cardImage)

    let row = document.createElement("div")
    row.className ="row card-rows"    

    row.appendChild(card)
    
    return row;//we return the card
}
//we use this function to give the user the effect that the like has been updated, instead we are just changing the 
//button color and its number of likes
Card.prototype.updateLikeLocally = function (postID) {   
    
    if (document.getElementById(postID).style.color == 'rgb(247, 194, 68)' ) {
        
        document.getElementById(postID).innerHTML = " " + (parseInt(document.getElementById(postID).innerHTML) - 1)

        document.getElementById(postID).style.color = "black"

        document.getElementById(postID).className = "bi bi-hand-thumbs-up"

    }else{

        document.getElementById(postID).innerHTML = " " + (parseInt(document.getElementById(postID).innerHTML) + 1)

        document.getElementById(postID).style.color = "rgb(247, 194, 68)"

        document.getElementById(postID).className = "bi bi-hand-thumbs-up-fill"

    }

}


Card.prototype.searchResultCard = function (postTitle, postDate, postUsername,postImageSrc) {
    
    let card = document.createElement('div');

    card.className = 'card';

    card.style.height = "auto"


    let username = document.createElement('h5');

    username.innerHTML = "@" + postUsername;

    username.className = 'card-username';

    username.style.boxShadow = "none"


    username.style.borderBottom = "none"

   // username.style.textTransform = 'uppercase'

    username.style.textAlign = "left"

    username.style.marginLeft = "5%"

    username.style.color = "rgb(247, 194, 68)"

    username.style.fontStyle = "oblique"

    username.style.backgroundColor = "white"



    let date = document.createElement('h7');

    date.innerText = postDate;

    date.className = 'card-date';


    let cardImage = document.createElement('img');
    
    cardImage.className = 'card-img-top';

    cardImage.src = postImageSrc

    cardImage.setAttribute("onerror", "this.style.display='none'")



    let cardBody = document.createElement('div');

    cardBody.className = 'card-body';



    let title = document.createElement('p');
    
    title.innerText = postTitle;

    title.className = 'card-title';

    title.style.color = "gray"

    title.style.textAlign = "center"

    title.style.textTransform = "uppercase"

    let openButton = document.createElement("button")

    

    openButton.innerHTML = "<i  style='color:gray; font-size: 30px' class='bi bi-box-arrow-in-right'></i>"

    openButton.className = "open-button-from-post-result"

    openButton.style.color = "gray"


    //appending
    card.appendChild(username)
    card.appendChild(date)
    card.appendChild(title);
    card.appendChild(openButton)

    card.appendChild(cardBody);
    card.appendChild(cardImage)

    let row = document.createElement("div")
    row.className ="row card-result-rows"    

    row.appendChild(card)
    
    return row;//we return the card
}

var card = new Card()