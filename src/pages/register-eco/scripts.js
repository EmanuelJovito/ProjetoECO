/* ADICIONAR */

class Items {
  constructor() {
    this.data = [];
  }
  /**
   * @param {any} value
   */
  set items(value) {
    this.data.push(value);
  }
  /**
   * @returns {any}
   */
  get items() {
    return this.data;
  }
  removeItems(index) {
    this.data = this.data.filter((d) => d !== this.data[index]);
  }
}

const ColectionItems = new Items();

const toggleBox = () => {
  const item = document.querySelectorAll(".item");

  item.forEach((i, index) => {
    i.addEventListener("click", () => {
      if (ColectionItems.items.indexOf(i) === -1) {
        ColectionItems.items = i;
      } else {
        ColectionItems.removeItems(ColectionItems.items.indexOf(i));
      }
      item[index].classList.toggle("itemActive");
    });
  });
};

/* VERIFICAÇÃO */

const verification = () => {
  const inputs = document.querySelectorAll("input");
  const button = document.querySelector(".btnFinalizar");
  const mensage = document.querySelector(".messageErrorActive");

  button.addEventListener("click", () => {
    inputs.forEach((input) => {
      if (input.value === "" || ColectionItems.items.length === 0) {
        mensage.style.visibility = "visible";
        mensage.style.opacity = "1";
      }
    });
    setTimeout(() => {
      mensage.style.visibility = "hidden";
      mensage.style.opacity = "0";
    }, 2000);
  });
};

const app = () => {
  toggleBox();
  verification();
};

app();
