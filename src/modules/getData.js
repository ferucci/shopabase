export const getData = () => {
  return fetch('https://test-glo-6c318-default-rtdb.firebaseio.com/goods.json')
    .then((res) => res.json())
}

export default getData