console.log("this a js page")

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");


menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}
