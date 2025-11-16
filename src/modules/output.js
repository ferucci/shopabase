import getData from "./getData.js";

export const second = () => {
  const cartBtn = document.getElementById('cart')

  getData().then((data) => {
    console.log(data)
  })
}