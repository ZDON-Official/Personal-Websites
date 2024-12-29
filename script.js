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

  document.documentElement.style.setProperty(
    "--background_color",
    "hsl(277, 40%, 13%)"
  );
  // document.documentElement.style.setProperty(
  //   "--background_color_depth",
  //   "#1d2630"
  // );
  document.documentElement.style.setProperty(
    "--secondary_color",
    "hsl(187, 50%, 70%)"
  );
  document.documentElement.style.setProperty(
    "--text_color",
    "rgba(255, 255, 255, 0.87)"
  );

  document.documentElement.style.setProperty(
    "--primary_color",
    "hsl(278, 78%, 85%)"
  );

  document.documentElement.style.setProperty(
    "--project_hover_text_color",
    "#111111"
  );

  document.documentElement.style.setProperty(
    "--box_shadow",
    "0.1px 0.2px 2.3px rgba(0, 0, 0, 0.22), 1px 2.1px 4.9px rgba(0, 0, 0, 0.295), 2.8px 5.7px 8.9px rgba(0, 0, 0, 0.399), 4px 8px 25px rgba(0, 0, 0, 0.75)"
  );

  darkMode_Toggle.innerHTML = "Light Mode";
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  console.log("theme btn pressed");

  // turn on dark mode
  if (darkMode_off === false) {
    // console.log("dark mode on");
    darkMode_off = true;

    document.documentElement.style.setProperty(
      "--background_color",
      "hsl(277, 40%, 13%)"
    );
    // document.documentElement.style.setProperty(
    //   "--background_color_depth",
    //   "#1d2630"
    // );
    document.documentElement.style.setProperty(
      "--secondary_color",
      "hsl(187, 50%, 70%)"
    );
    document.documentElement.style.setProperty(
      "--text_color",
      "rgba(255, 255, 255, 0.87)"
    );

    document.documentElement.style.setProperty(
      "--primary_color",
      "hsl(278, 78%, 85%)"
    );

    document.documentElement.style.setProperty(
      "--project_hover_text_color",
      "#111111"
    );

    document.documentElement.style.setProperty(
      "--box_shadow",
      "0.1px 0.2px 2.3px rgba(0, 0, 0, 0.22), 1px 2.1px 4.9px rgba(0, 0, 0, 0.295), 2.8px 5.7px 8.9px rgba(0, 0, 0, 0.399), 4px 8px 25px rgba(0, 0, 0, 0.75)"
    );

    darkMode_Toggle.innerHTML = "Light Mode";

    localStorage.setItem("dark-mode", "dark");
    localStorage.setItem("darkMode_toggle", darkMode_off);
  } else {
    // turn of dark mode
    console.log("dark mode off");

    document.documentElement.style.setProperty(
      "--background_color",
      "hsl(277, 50%, 96%)"
    );
    // document.documentElement.style.setProperty(
    //   "--background_color_depth",
    //   "transparent"
    // );
    document.documentElement.style.setProperty(
      "--secondary_color",
      "hsl(187, 50%, 45%)"
    );
    document.documentElement.style.setProperty("--text_color", "#333333");
    document.documentElement.style.setProperty(
      "--primary_color",
      "hsl(277, 50%, 57%)"
    );

    document.documentElement.style.setProperty(
      "--project_hover_text_color",
      "#eeeeee"
    );

    document.documentElement.style.setProperty(
      "--box_shadow",
      "0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2)"
    );

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
