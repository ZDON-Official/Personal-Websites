const darkMode_Toggle = document.getElementById("theme_toggle");
var darkMode_off = false;
var darkMode;

if (localStorage.getItem("dark-mode")) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem("dark-mode");
} else {
  darkMode = "light";
}

if (localStorage.getItem("darkMode_toggle")) {
  darkMode_off = JSON.parse(localStorage.getItem("darkMode_toggle"));
} else {
  console.log("dark mode is off");
  darkMode_off = false;
}

localStorage.setItem("dark-mode", darkMode);
localStorage.setItem("darkMode_toggle", darkMode_off);

if (localStorage.getItem("dark-mode") === "dark") {
  // if the above is 'dark' then apply .dark to the body
  // document.body.classList.add("dark");

  document.documentElement.style.setProperty("--background_color", "#181f28");
  document.documentElement.style.setProperty(
    "--background_color_depth",
    "#1d2630"
  );
  document.documentElement.style.setProperty("--secondary_color", "#819fbf");
  document.documentElement.style.setProperty(
    "--text_color",
    "rgba(255, 255, 255, 0.87)"
  );

  darkMode_Toggle.innerHTML = "Light Mode";
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  console.log("theme btn pressed");

  if (darkMode_off === false) {
    // console.log("dark mode on");
    darkMode_off = true;

    document.documentElement.style.setProperty("--background_color", "#181f28");
    document.documentElement.style.setProperty(
      "--background_color_depth",
      "#1d2630"
    );
    document.documentElement.style.setProperty("--secondary_color", "#819fbf");
    document.documentElement.style.setProperty(
      "--text_color",
      "rgba(255, 255, 255, 0.87)"
    );

    darkMode_Toggle.innerHTML = "Light Mode";

    localStorage.setItem("dark-mode", "dark");
    localStorage.setItem("darkMode_toggle", darkMode_off);
  } else {
    // console.log("dark mode off");

    document.documentElement.style.setProperty("--background_color", "#e9eef1");
    document.documentElement.style.setProperty(
      "--background_color_depth",
      "transparent"
    );
    document.documentElement.style.setProperty("--secondary_color", "#763a3a");
    document.documentElement.style.setProperty("--text_color", "#333333");

    darkMode_Toggle.innerHTML = "Dark Mode";

    darkMode_off = false;
    localStorage.setItem("dark-mode", "light");
    localStorage.setItem("darkMode_toggle", darkMode_off);
  }
});

// ! this is for the hamburger menu

const hamburger = document.querySelector(".hmbr_menu");
const navMenu = document.querySelector(".header_links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelector(".nav_item");

navLink.array.forEach((element) =>
  element.addEventListener("click", closeMenu)
);

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
