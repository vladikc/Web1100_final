const dog_api_list = 'https://dog.ceo/api/breeds/list/all'
const selectBreed = document.querySelector("#selectBreed")
const viewDog = document.querySelector("#viewDog")
var dog_picture = document.querySelector('#breedImage')
var global_responce // dogs breeds list
var global_responce_random_picture


$.ajax({
    type: 'GET',
    url: dog_api_list,
    dataType: "json",
    success: function (response) {
        console.log(response)
        global_responce = response
        console.log(Object.keys(global_responce.message))
        console.log(Object.keys(global_responce.message).length)
        for (i = 0; i < Object.keys(global_responce.message).length; i++) {
            selectBreed.innerHTML += `<option value="${Object.keys(global_responce.message)[i]}">${Object.keys(global_responce.message)[i]}</option>`
        }


    },
    error: (eroor) => {
        console.log('There was an error');

    }


})


viewDog.addEventListener("click", function () {
    var breedName = selectBreed.options[selectBreed.selectedIndex].value  // got this part here https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    console.log(breedName);
    /////////AJAX////////////////     second Ajax call pictures
    $.ajax({
        type: 'GET',
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        dataType: "json",
        success: function (response) {
            global_responce_random_picture = response
            console.log(this.url)
            console.log(response)
            console.log(response.message)
            document.getElementsByTagName("img")[0].setAttribute("src", response.message);        


        },
        error: (eroor) => {
            console.log('There was an error');

        }
    })
    ////////////////////////////      second ajax end pictures


})