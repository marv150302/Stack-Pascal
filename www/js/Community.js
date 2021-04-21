var Community = function () {
    
    this.data = new Array()
}

//this functions is used for live search of community
Community.prototype.livesearch = function (text) {

    console.log("searching");
    
    let resultList = document.querySelector("#result-list");

    resultList.innerHTML = ""

    this.data.map(function(algo){

        text.split(" ").map(function (word){

            if(algo.name.toLowerCase().indexOf(word.toLowerCase()) != -1){

                resultList.innerHTML += `<option class="list-group-item">${algo.name}</option>`;
            }
        })
    })
}

var community = new Community()