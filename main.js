// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.getElementsByClassName("like-glyph")
const errorModal = document.getElementById("modal")
const modalMessage = document.getElementById("modal-message")

// Your JavaScript code goes here!
// functions
function likes(event){
  mimicServerCall()
  .then(function(resp) {
    console.log(resp)
    if (event.target.innerHTML === EMPTY_HEART){
      event.target.innerHTML = FULL_HEART
      event.target.classList.add("activated-heart")
    } else {
      event.target.innerHTML = EMPTY_HEART
      event.target.classList.remove("activated-heart")
    }
  })
  .catch((error) => {
    modalMessage.innerHTML = "Random server error. Try again."
    errorModal.classList.remove("hidden")
    setTimeout(() => errorModal.classList.add("hidden"), 3000)
  }) 
}

// event listener
for (const heart of hearts){
  heart.addEventListener("click", likes)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
