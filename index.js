// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft() {
    // let leftNumbers = dodger.style.left.replace("px", "");
    let leftNumbers = dodger.style.left
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 20}px`;
    }
    else if (left <= 0){
        dodger.style.left = `${360}px`;
     }
    
  }

  function moveDodgerRight() {
    // let leftNumbers = dodger.style.left.replace("px", "");
    let leftNumbers = dodger.style.left
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 20}px`;
    }
     else if (left >= 360){
        dodger.style.left = `${0}px`;
     }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
  });