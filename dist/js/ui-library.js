"use strict";

var SideNav = {
  toggleSideNav: function toggleSideNav($this) {
    var $switcher = $this;
    var $side = document.querySelector(".grid-side");
    $switcher.classList.toggle("is-active");
    $side.classList.toggle("is-opened");
  }
};
var $sideSwitcher = document.getElementById("sideSwitcher");

if ($sideSwitcher) {
  $sideSwitcher.addEventListener("click", function () {
    SideNav.toggleSideNav(this);
  });
}
