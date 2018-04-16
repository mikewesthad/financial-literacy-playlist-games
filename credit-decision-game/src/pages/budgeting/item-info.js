// Items need to add up to 500 credit limit and it needs to be easy to get to 30% of credit limit
// (150) through selecting a couple items

const items = [
  { name: "Netflix", cost: 15, image: "" },
  { name: "Groceries", cost: 90, image: "" },
  { name: "Taxi", cost: 75, image: "" },
  { name: "Clothes", cost: 45, image: "" },
  { name: "Cable TV", cost: 60, image: "" },
  { name: "Internet", cost: 70, image: "" },
  { name: "Lunches", cost: 75, image: "" },
  { name: "Gas", cost: 70, image: "" }
  // { name: "Phone", cost: 25, image: "" },
  // { name: "Games", cost: 25, image: "" }
];

const fakeItems = [
  { name: "Amazon.com - Drone", cost: 100, image: "" },
  { name: "iTunes Gift Card", cost: 100, image: "" }
];

// console.log(items.reduce((total, item) => (total += item.cost), 0));

const itemLookup = {};
items.forEach(item => (itemLookup[item.name] = item));
fakeItems.forEach(item => (itemLookup[item.name] = item));

export { items, fakeItems, itemLookup };
