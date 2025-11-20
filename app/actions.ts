import { Product } from "./models/product.model";
import { Query } from "./models/query.model";

export const getData = async (query: Query) => {

  const res = await fetch('https://test-glo-6c318-default-rtdb.firebaseio.com/goods.json')
  const data = await res.json();

  return data.filter((product: Product) => {

    if (query.category && query.category !== product.category) {
      return false
    }

    if (query.search) {
      if (!product.title.includes(query.search)) {
        return false
      }
    }

    return true;
  });
}