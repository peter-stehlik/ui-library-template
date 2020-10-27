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

$(document).ready(function () {
  function initTabs() {
    $(".uil-tabs-nav__item").click(function () {
      var href = $(this).attr("href");
      $(this).addClass("is-active").siblings().removeClass("is-active");
      $(href).addClass("is-active").siblings().removeClass("is-active");
      return false;
    });
  }

  initTabs();
});
hljs.initHighlightingOnLoad();
new ClipboardJS('.ctc');
