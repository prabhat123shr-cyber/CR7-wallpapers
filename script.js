// Small interaction: highlight the navigation link for the section in view.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#36d5ed' : '';
  });
});
const searchInput = document.getElementById("searchInput");
const wallpaperCards = document.querySelectorAll(".wallpaper-card");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    wallpaperCards.forEach(function (card) {

        const wallpaperName = card.querySelector("h3").textContent.toLowerCase();

        if (wallpaperName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// CR7 TEAM FILTER SYSTEM

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const selectedTeam = button.dataset.team;

        // Filter wallpapers
        wallpaperCards.forEach(card => {
            const cardTeam = card.dataset.team;

            if (selectedTeam === "all" || cardTeam === selectedTeam) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });

    });
});
