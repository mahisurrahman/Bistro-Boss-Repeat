import UseMenu from "./UseMenu";

const UseCategory = () =>{
const [menu] = UseMenu()

const appetizerCategory = menu.filter(item => item.category ==='appetizer');
const dessertCategory = menu.filter(item => item.category === 'dessert');
const beverageCategory = menu.filter(item => item.category === 'beverage');
const burgerCategory = menu.filter(item => item.category === 'burger');
const entreeCategory = menu.filter(item => item.category === 'entree');
const pastaCategory = menu.filter(item => item.category ==='pasta');
const pizzaCategory = menu.filter(item => item.category === 'pizza');
const seaFoodCategory = menu.filter(item => item.category === 'seafood');
const soupCategory = menu.filter(item => item.category === 'soup');
const sushiCategory = menu.filter(item => item.category ==='sushi');
const tacosCategory = menu.filter(item => item.category === 'tacos');

return [appetizerCategory, dessertCategory, beverageCategory, burgerCategory, entreeCategory, pastaCategory, pizzaCategory, seaFoodCategory, soupCategory, sushiCategory, tacosCategory];
}

export default UseCategory;