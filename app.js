/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $navbarMenu = $(".navbar-menu");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible";
        getSidebar.style.overflow = "visible";

        getSidebarLinks.forEach((item, index) => {
            console.log(item);
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });
        getSidebar.style.width = "60%";
        getSidebar.style.overflow = "visible";
        $html.addClass("clicked");
        $navbarMenu.addClass("clicked")
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}


// ------------------------------------------------- DARK MODE -----------------------------

/* Dark Mode Toggle */
var $DTspan = $(".DTspan");
var $darkToggle = $(".dark-toggle");
var $wire = $(".wire");
var $triangle = $(".triangle");
var $topDarkModeToggle = $(".top-dark-mode-button");

/* Navigation */
var $navbarMenu = $(".navbar-menu");
var $sideNavA = $(".side-nav a");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $hamburgerInner = $(".hamburger-inner");

/* Body and Core Elements */
var $body = $("body");

var $h2 = $("h2");
var $h3 = $("h3");
var $p = $("p");

// Label the different sectiona of your website with the elements you 
// are targeting to chnage with a dark-mode class. Then when the first 
// page is done, label a new section for the next page, and under that 
// - label its sections as you did before. and repeat for each 

/* Landing */
var $clippy = $(".clippy");

// Footer 

//
// NEW PAGE --------------------------------------------------
//

// (Section))

//
// NEW PAGE --------------------------------------------------
//

// (Section))


// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
// for an optional footer dark mode button as well
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// This is where you add the dakr mode class.  When the dark mode is enabled as true in localstorage,
// it will add all the dark-mode classes to the elements we created in the variables above
const enableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.addClass("dark-mode");
  $DTspan.addClass("dark-mode");
  $topDarkModeToggle.addClass("dark-mode");

  // Core dark mode styles
  $body.addClass("dark-mode");
  $h2.addClass("dark-mode");
  $h3.addClass("dark-mode");
  $p.addClass("dark-mode");

  // Navigation 
  $navbarMenu.addClass("dark-mode");
  $sideNavA.addClass("dark-mode");
  $isActiveHamburger.addClass("dark-mode");
  $hamburgerInner.addClass("dark-mode");

  // Landing
  $clippy.addClass("dark-mode");

  // (Section)


  // Footer 

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  // at the end of the function we set the darkMode vale to enabled in localstorage to remember
  // that dark mode is on
  localStorage.setItem("darkMode", "enabled")
}

// This is where we remove dark mode.  Just copy and paste all the lines where you added a class
// and paste them into this function, then change "addClass" to "removeClass"
const disableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.removeClass("dark-mode");
  $DTspan.removeClass("dark-mode");
  $topDarkModeToggle.removeClass("dark-mode");

  $body.removeClass("dark-mode");

  $h2.removeClass("dark-mode");
  $h3.removeClass("dark-mode");
  $p.removeClass("dark-mode");

  // Navigation 
  $navbarMenu.removeClass("dark-mode");
  $sideNavA.removeClass("dark-mode");
  $isActiveHamburger.removeClass("dark-mode");
  $hamburgerInner.removeClass("dark-mode");

  // Landing
  $clippy.removeClass("dark-mode");

  // (Section)


  // Footer 

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  // At the end of the function, we remove the value for darkMode in 
  // localstorage, which removes dark mode classes from all elements
  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
})

// Copy and paste the dark mode toggle button into the footer, give it a class 
// of "footer .dark-mode-button" so you can have two buttons that toggle dark mode.
// This second function is for the footer dark mode button to toggle dark mode in 
// localstorage
darkModeToggleFooter.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})