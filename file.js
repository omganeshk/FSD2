// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

window.addEventListener(
  "scroll",
   () => {
  document.body.style.setProperty(
    "--scroll",
     window.PageTransitionEvent / (document.body.offsetHeight - window.innerHeight)
     );
}, 
false)
;

