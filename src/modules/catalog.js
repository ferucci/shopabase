import { categoryFilter } from "./filters.js"
import getData from "./getData.js"
import renderGoods from "./renderGoods.js"

const catalog = () => {
  const bntCatalog = document.querySelector('.catalog-button > button')
  const catalogModal = document.querySelector('.catalog')
  const catalogModalItems = catalogModal.querySelectorAll('li')

  console.log(catalogModalItems)

  let isOpen = false;
  bntCatalog.addEventListener('click', () => {

    isOpen = !isOpen

    if (isOpen) catalogModal.style.display = 'block'
    else catalogModal.style.display = ''

  })

  catalogModalItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent

      getData().then((data) => {
        renderGoods(categoryFilter(data, text))
      })
    })

  })
}

export default catalog