const darkMode_Toggle = document.getElementById("theme_toggle");
var darkMode_off = false;
var darkMode;

if (localStorage.getItem("dark-mode")) {
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem("dark-mode");
} else {
  darkMode = "light";
}

localStorage.setItem("dark-mode", darkMode);

if (localStorage.getItem("dark-mode") == "dark") {
  // if the above is 'dark' then apply .dark to the body
  // document.body.classList.add("dark");

  document.documentElement.style.setProperty("--BG", "rgb(33, 36, 53)");
  document.documentElement.style.setProperty("--dark_shades", "#05383f");

  //! hide the 'dark' button
  // $('.dark-button').hide();

  //! show the 'light' button
  // $('.light-button').show();
}

// Toggle dark UI

darkMode_Toggle.addEventListener("click", () => {
  console.log("theme btn pressed");

  if (darkMode_off === false) {
    // console.log("dark mode on");
    darkMode_off = true;

    document.documentElement.style.setProperty("--background_color", "#181f28");
    document.documentElement.style.setProperty("--secondary_color", "#819fbf");

    darkMode_Toggle.innerHTML = "Light Mode";

    // document.body.classList.add("dark");
    localStorage.setItem("dark-mode", "dark");
  } else {
    // console.log("dark mode off");

    document.documentElement.style.setProperty("--background_color", "#e9eef1");
    document.documentElement.style.setProperty("--secondary_color", "#763a3a");

    // document.body.classList.remove("dark");
    localStorage.setItem("dark-mode", "light");

    darkMode_Toggle.innerHTML = "Dark Mode";

    darkMode_off = false;
  }
});
