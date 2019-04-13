// function openNav() {
//   document.getElementsByClassName("side_nav_bar").style.width = "250px";
//   document.getElementsByClassName("body").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementsByClassName("side_nav_bar").style.width = "0";
//   document.getElementsByClassName("body").style.marginLeft = "0";
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementsByClassName("container")[0].style.marginLeft="40px";
 
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementsByClassName("container")[0].style.marginLeft="0";
}