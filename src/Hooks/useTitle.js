import {
  useEffect
} from 'react';

export function useTitle({
  openFood,
  orders
}) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title = orders.length === 0 ? `Welcome to Audrey's Pizza` : `[${orders.length}] ${orders.length>1 ? 'items':'item'} in your order`
    }
  })
}