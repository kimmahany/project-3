// jshint esversion: 6

let failHandler = () => {
  //console.log("Fail -- unknown breed");
  $(".photos")
    .empty()
    .html("<h3>Error -- breed not found <h3>");
};

//This version of clickHandler uses the DOM API methods
//the only jQuery is the getJSON method
let clickHandler = function() {
  let imgElem;
  let prefixURL = "https://dog.ceo/api/breed/";
  let suffixURL = "/images/random/6";
  //get value entered by user from textbox

  let breedTag = document
    .querySelector('input[type = "text"]')
    .value.toLowerCase();

  let requestURL = prefixURL + breedTag + suffixURL;
  console.log(requestURL);

  //clear old photos
  document.querySelector(".photos").innerHTML = "";

  $.getJSON(requestURL, function(dogAPIresponse) {
    dogAPIresponse.message.forEach((imgURL, index) => {
      console.log(`URL = ${imgURL} index = ${index}`);

      // create a new element to hold the image
      let imgElem = document.createElement("img");
      imgElem.hidden = true;

      // set the attribute to the response url
      imgElem.setAttribute("src", imgURL);
      imgElem.setAttribute("width", "100");

      // attach the img tag to the main photos div
      document.querySelector(".photos").appendChild(imgElem);
      imgElem.hidden = false;
    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener("load", () => {
  //select the buttons
  let buttonElem = document.querySelector("button");
  buttonElem.addEventListener("click", clickHandler);
});
