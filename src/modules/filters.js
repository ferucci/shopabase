export const searchFilter = (goods, value, priceParams = null) => {
  let filteredGoods = goods.filter((good) => {
    return good.title.toLowerCase().includes(value.toLowerCase())
  });

  if (priceParams) {
    filteredGoods = priceFilter(filteredGoods, priceParams);
  }

  return filteredGoods.sort((a, b) => a.price - b.price);
}

export const categoryFilter = (goods, value) => {
  let filteredGoods = goods.filter((good) => {
    return good.category === value
  })

  return filteredGoods.sort((a, b) => a.price - b.price);
}

export const priceFilter = (goods, priceParams) => {
  const { min, max } = priceParams;

  return goods.filter((good) => {
    const price = good.price;
    return (!min || price >= min) &&
      (!max || price <= max);
  });
}