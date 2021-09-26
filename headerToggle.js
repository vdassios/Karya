let header = document.getElementById("head");

const mediaQuery = window.matchMedia("(min-width: 320px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    header.parentNode.removeChild(header);
  }
}
// Register event listener
mediaQuery.addEventListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
