window.console.log("Hello World")

const clickMeButton = window.document.querySelector("#click-me-button");

if (clickMeButton) {
    clickMeButton.addEventListener("click", function() {
      window.alert("You clicked me!");  
    });
}

//"click me button"