window.addEventListener("DOMContentLoaded", function () {
  const btnDark = document.querySelector(".dark-btn");

  const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-moon w-5 h-5">
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
`;
  const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="lucide lucide-sun w-5 h-5">
  <circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2"></path>
  <path d="M12 20v2"></path>
  <path d="m4.93 4.93 1.41 1.41"></path>
  <path d="m17.66 17.66 1.41 1.41"></path>
  <path d="M2 12h2"></path>
  <path d="M20 12h2"></path>
  <path d="m6.34 17.66-1.41 1.41"></path>
  <path d="m19.07 4.93-1.41 1.41"></path>
</svg>
`;

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btnDark.innerHTML = sunIcon;
  } else {
    btnDark.innerHTML = moonIcon;
  }

  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btnDark.innerHTML = sunIcon;
      localStorage.setItem("theme", "dark");
    } else {
      btnDark.innerHTML = moonIcon;
      localStorage.setItem("theme", "light");
    }
  });
});
