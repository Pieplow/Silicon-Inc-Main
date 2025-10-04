// Väntar tills hela HTML-dokumentet är inläst innan koden körs
document.addEventListener("DOMContentLoaded", () => {
  
  // Hämtar elementet med id "darkmode-switch" (t.ex. en checkbox)
  const switcher = document.getElementById("darkmode-switch");

  // Kollar om darkmode redan är aktiverat i webbläsarens localStorage
  if (localStorage.getItem("darkmode") === "enabled") {
    // Lägger till klassen "darkmode" på <body> om det är aktiverat
    document.body.classList.add("darkmode");
    // Markerar checkboxen (om den finns) som ikryssad
    if (switcher) switcher.checked = true;
  }

  // Om knappen (switchern) existerar på sidan
  if (switcher) {
    // Lyssnar efter förändringar (t.ex. användaren klickar på checkboxen)
    switcher.addEventListener("change", () => {
      // Om användaren aktiverar dark mode
      if (switcher.checked) {
        // Lägg till klassen "darkmode" på <body>
        document.body.classList.add("darkmode");
        // Spara inställningen i localStorage som "enabled"
        localStorage.setItem("darkmode", "enabled");
      } else {
        // Annars ta bort darkmode-klassen från <body>
        document.body.classList.remove("darkmode");
        // Spara inställningen som "disabled"
        localStorage.setItem("darkmode", "disabled");
      }
    });
  }
});

// Öppna och stänga "accordion" (FAQ-sektioner)
document.querySelectorAll(".arrow-btn").forEach((btn) => {
  // Lägger till en klickhändelse för varje knapp med klassen "arrow-btn"
  btn.addEventListener("click", () => {
    // Hittar det närmaste föräldraelementet med klassen "faq-item"
    const faqItem = btn.closest(".faq-item");

    // Stänger alla andra öppna FAQ-sektioner
    document.querySelectorAll(".faq-item").forEach((item) => {
      // Om det inte är den klickade sektionen – ta bort "active"-klassen
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // Växlar (öppnar/stänger) den klickade sektionen
    faqItem.classList.toggle("active");
  });
});
