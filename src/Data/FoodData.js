export function formatPrice(number) {
  return number.toLocaleString('en-AU', {
    currency: 'AUD',
    style: 'currency'
  });
}

const foodsAndDrinks = [{
    name: 'Audrey\'s Special',
    img: '/img/pizza.jpg',
    category: 'Pizza',
    price: 4.50
  },
  {
    name: 'Margeherita',
    img: '/img/margherita.jpg',
    category: 'Pizza',
    price: 3.00
  },
  {
    name: 'Vegetarian',
    img: '/img/vegetarian.jpg',
    category: 'Pizza',
    price: 3.50
  },
  {
    name: 'Supreme',
    img: '/img/Supreme.jpg',
    category: 'Pizza',
    price: 5.50
  },
  {
    name: 'Olives and Ham Combo',
    img: '/img/olives_and_ham.jpg',
    category: 'Pizza',
    price: 4.50
  },
  {
    name: 'Tutti Fruity',
    img: '/img/fruit_pizza.jpeg',
    category: 'Pizza',
    price: 3.25
  },
  {
    name: 'Carl\'s Burger',
    img: '/img/burger.jpg',
    category: 'Sandwiches',
    price: 5.50
  },
  {
    name: 'Carl\'s Calzone',
    img: '/img/calzone.jpg',
    category: 'Sandwiches',
    price: 7.50
  },
  {
    name: 'Audrey\'s Club',
    img: '/img/clubhouse.jpg',
    category: 'Sandwiches',
    price: 4.50
  },
  {
    name: 'Chicken Wrap',
    img: '/img/wraps.jpg',
    category: 'Sandwiches',
    price: 8.50
  },
  {
    name: 'Tin\'s Fries',
    img: '/img/fries.jpg',
    category: 'Sides',
    price: 4.00

  },
  {
    name: 'Family Skewers',
    img: '/img/skewers.jpg',
    category: 'Sides',
    price: 10.00
  },
  {
    name: 'House Cocktails',
    img: '/img/cocktails.jpg',
    category: 'Drinks',
    price: 4.50
  },
  {
    name: 'Softdrinks',
    img: '/img/softdrinks.jpg',
    category: 'Drinks',
    price: 2.50
  },

]


export const foods = foodsAndDrinks.reduce((res, food) => {
  if (!res[food.category]) {
    res[food.category] = [];
  }

  res[food.category].push(food);

  return res;
}, {})