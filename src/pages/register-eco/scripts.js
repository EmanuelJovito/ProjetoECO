const toggleBox = () => {
  const item = document.querySelectorAll(".item");

  item.forEach((i, index) => {
    i.addEventListener("click", () => {
      item[index].classList.toggle("itemActive")
    });
  });
}

toggleBox()