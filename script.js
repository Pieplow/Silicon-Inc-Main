document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("darkmode-switch");

  
  if (localStorage.getItem("darkmode") === "enabled") {
    document.body.classList.add("darkmode");
    if (switcher) switcher.checked = true;
  }

  if (switcher) {
    switcher.addEventListener("change", () => {
      if (switcher.checked) {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", "enabled");
      } else {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkmode", "disabled");
      }
    });
  }
});

// Hamburger-Meny//

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}