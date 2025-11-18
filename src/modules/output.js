import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

export const second = () => {
  getData().then((data) => {
    renderGoods(data)
  })
}