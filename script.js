const btnMore = document.querySelector("#btnMore");
const links = document.querySelector("#links");

btnMore.addEventListener("click", (e) => {
  links.classList.toggle("collapsed");
});
