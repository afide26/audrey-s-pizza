const foodsAndDrinks = [{
    name: 'Audrey\'s Special',
    img: '/img/pizza.jpg',
    category: 'Pizza'
  },
  {
    name: 'Margeherita',
    img: '/img/margherita.jpg',
    category: 'Pizza'
  },
  {
    name: 'Carl\'s Burger',
    img: '/img/burger.jpg',
    category: 'Sandwiches'
  },
  {
    name: 'Carl\'s Calzone',
    img: '/img/calzone.jpg',
    category: 'Sandwiches'
  },
  {
    name: 'Tin\'s Fries',
    img: '/img/fries.jpg',
    category: 'Sides'

  },
  {
    name: 'Family Skewers',
    img: '/img/skewers.jpg',
    category: 'Sides'
  },
  {
    name: 'House Cocktails',
    img: '/img/cocktails.jpg',
    category: 'Drinks'
  },
  {
    name: 'Softdrinks',
    img: '/img/softdrinks.jpg',
    category: 'Drinks'
  },

]


export const foods = foodsAndDrinks.reduce((res, food) => {
  if (!res[food.category]) {
    res[food.category] = [];
  }

  res[food.category].push(food);

  return res;
}, {})