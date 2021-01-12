const toggleBox= () => {
  const box = document.querySelector(".box");
  const company = document.querySelector(".company-info");
  const image = document.querySelector(".image");
  const items = document.querySelector(".items");
  const info = document.querySelector(".info");
  // box.forEach((b)=>{
    box.addEventListener("mouseover", () => {
      company.classList.toggle("active-company")
      image.classList.toggle("active-image")
      items.classList.toggle("active-items")
      info.classList.remove("info")
      info.classList.add("active-info")
    })
    box.addEventListener("mouseout", () => {
      company.classList.remove("active-company")
      image.classList.remove("active-image")
      items.classList.remove("active-items")
      info.classList.remove("active-info")
      info.classList.add("info")
    })
  // })
} 

toggleBox()