const miniMovement = () => {
  const malika = document.querySelector(".malika");
  const topLine = document.querySelector(".top-line");

  malika.addEventListener("mouseover", () => {
    topLine.classList.toggle("top-line-stretch");
  });
};
miniMovement();
