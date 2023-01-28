const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients')

const element = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;

  return liEl;
});

container.append(...element);