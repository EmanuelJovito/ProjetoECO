const toggleBox = () => {
  const box = document.querySelectorAll(".box");
  const company = document.querySelectorAll(".company-info");
  const image = document.querySelectorAll(".image");
  const items = document.querySelectorAll(".items");
  const info = document.querySelectorAll(".info");

  box.forEach((b, index) => {
    b.addEventListener("mouseover", () => {
      company[index].classList.toggle("active-company");
      image[index].classList.toggle("active-image");
      items[index].classList.toggle("active-items");
      info[index].classList.remove("info");
      info[index].classList.add("active-info");
    });
    b.addEventListener("mouseout", () => {
      company[index].classList.remove("active-company");
      image[index].classList.remove("active-image");
      items[index].classList.remove("active-items");
      info[index].classList.remove("active-info");
      info[index].classList.add("info");
    });
  });
};

toggleBox();
