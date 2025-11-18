const getData = (str) => {
  return fetch(`https://test-glo-6c318-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((res) => res.json())
}

export default getData