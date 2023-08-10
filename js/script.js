"user strict";
const cover_container = document.getElementById("mv-avengersendgame");
cover_container.addEventListener("mouseover", () => {
  cover_container.children[0].classList.remove("hidden");
});
cover_container.addEventListener("mouseleave", () => {
  cover_container.children[0].classList.add("hidden");
});
