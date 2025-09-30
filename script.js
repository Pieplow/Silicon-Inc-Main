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

//Öppna och stänga accordion test//
document.querySelectorAll(".arrow-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.closest(".faq-item");

    // Stäng alla andra
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // toggla denna
    faqItem.classList.toggle("active");
  });
});
