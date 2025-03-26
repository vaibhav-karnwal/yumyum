const FoodData = [
  //   {
  //     id: 1,
  //     img: "https://images.deliveryhero.io/image/fd-sg/Products/42247172.jpg?width=300&height=300",
  //     name: "Momos",
  //     price: 50,
  //     desc: "Soft, delicate dumplings filled with a flavorful mix of fresh vegetables and aromatic spices, served with a tangy and spicy dipping sauce for all food lovers!",
  //     category: "Lunch",
  //     rating: 4.5,
  //   },

  //   {
  //     id: 1,
  //     img: "https://vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg.webp?width=300&height=300",
  //     name: "Kadhai Paneer",
  //     price: 180,
  //     desc: "A spicy and flavorful paneer dish cooked with bell peppers, onions, and aromatic spices in a thick tomato-based gravy.",
  //     category: "Paneer",
  //     rating: 4.6,
  //   },
  //   {
  //     id: 2,
  //     img: "https://i.pinimg.com/736x/72/9a/0e/729a0e51c25be429276a01428a5e6fbf.jpg?width=1000&height=1000",
  //     name: "Mughlai Paneer",
  //     price: 200,
  //     desc: "Rich and creamy Mughlai-style paneer curry with cashew and cream, infused with royal flavors.",
  //     category: "Paneer",
  //     rating: 4.7,
  //   },

  {
    id: 1,
    img: "https://example.com/shahi-paneer.jpg",
    name: "Shahi Paneer",
    price: 120,
    desc: "A rich and creamy paneer dish cooked in a thick, mildly spiced tomato and cashew-based gravy.",
    category: "Paneer",
    rating: 4.7,
  },
  {
    id: 2,
    img: "https://example.com/matar-paneer.jpg",
    name: "Matar Paneer",
    price: 150,
    desc: "A delicious North Indian dish made with paneer and green peas in a spiced tomato-based gravy.",
    category: "Paneer",
    rating: 4.6,
  },
  {
    id: 3,
    img: "https://example.com/mughlai-paneer.jpg",
    name: "Mughlai Paneer",
    price: 160,
    desc: "A royal Mughlai dish with paneer cooked in a rich and creamy almond and saffron-based gravy.",
    category: "Paneer",
    rating: 4.8,
  },
  {
    id: 4,
    img: "https://example.com/kadhai-paneer.jpg",
    name: "Kadhai Paneer",
    price: 150,
    desc: "A spicy and flavorful dish made with paneer and bell peppers cooked in a thick tomato gravy.",
    category: "Paneer",
    rating: 4.7,
  },
  {
    id: 5,
    img: "https://example.com/paneer-butter-masala.jpg",
    name: "Paneer Butter Masala",
    price: 150,
    desc: "A creamy tomato-based curry with soft paneer cubes, butter, and aromatic spices.",
    category: "Paneer",
    rating: 4.8,
  },
  {
    id: 6,
    img: "https://example.com/tawa-roti-plain.jpg",
    name: "Tawa Roti (Plain)",
    price: 8,
    desc: "Soft and fresh whole wheat roti cooked on a tawa.",
    category: "Roti",
    rating: 4.5,
  },
  {
    id: 7,
    img: "https://example.com/tawa-roti-butter.jpg",
    name: "Tawa Roti (Butter)",
    price: 10,
    desc: "Soft whole wheat roti topped with a layer of butter.",
    category: "Roti",
    rating: 4.6,
  },
  {
    id: 8,
    img: "https://example.com/tandoori-roti-plain.jpg",
    name: "Tandoori Roti (Plain)",
    price: 10,
    desc: "A traditional clay oven-baked flatbread with a crispy texture.",
    category: "Roti",
    rating: 4.6,
  },
  {
    id: 9,
    img: "https://example.com/tandoori-roti-butter.jpg",
    name: "Tandoori Roti (Butter)",
    price: 15,
    desc: "Tandoori roti brushed with butter for extra flavor.",
    category: "Roti",
    rating: 4.7,
  },
  {
    id: 10,
    img: "https://example.com/plain-naan.jpg",
    name: "Plain Naan",
    price: 25,
    desc: "Soft and fluffy traditional Indian bread made with refined flour.",
    category: "Roti",
    rating: 4.7,
  },
  {
    id: 11,
    img: "https://example.com/butter-naan.jpg",
    name: "Butter Naan",
    price: 30,
    desc: "Soft naan bread topped with a generous amount of butter.",
    category: "Roti",
    rating: 4.8,
  },
  {
    id: 12,
    img: "https://example.com/plain-thali.jpg",
    name: "Plain Thali",
    price: 90,
    desc: "A simple meal including dal, vegetable, rice, roti, and salad.",
    category: "Thali",
    rating: 4.5,
  },
  {
    id: 13,
    img: "https://example.com/special-thali.jpg",
    name: "Special Thali",
    price: 200,
    desc: "A lavish meal including paneer, dal, rice, roti, raita, salad, and dessert.",
    category: "Thali",
    rating: 4.8,
  },
  {
    id: 14,
    img: "https://example.com/dal-tadka.jpg",
    name: "Dal Tadka",
    price: 100,
    desc: "Yellow lentils tempered with ghee, garlic, and spices.",
    category: "Dal",
    rating: 4.7,
  },
  {
    id: 15,
    img: "https://example.com/dal-fry.jpg",
    name: "Dal Fry",
    price: 90,
    desc: "A flavorful lentil dish cooked with onions, tomatoes, and spices.",
    category: "Dal",
    rating: 4.6,
  },
  {
    id: 16,
    img: "https://example.com/dal-makhni.jpg",
    name: "Dal Makhni",
    price: 120,
    desc: "A rich and creamy black lentil dish cooked with butter and cream.",
    category: "Dal",
    rating: 4.8,
  },
  {
    id: 17,
    img: "https://example.com/punjabi-chole.jpg",
    name: "Punjabi Chole",
    price: 80,
    desc: "Spicy chickpea curry cooked in traditional Punjabi style.",
    category: "Curry",
    rating: 4.6,
  },
  {
    id: 18,
    img: "https://example.com/chana-masala.jpg",
    name: "Chana Masala",
    price: 100,
    desc: "A flavorful chickpea dish cooked in a spiced tomato-based gravy.",
    category: "Curry",
    rating: 4.7,
  },
  {
    id: 19,
    img: "https://example.com/mix-veg.jpg",
    name: "Mix Veg",
    price: 120,
    desc: "A medley of vegetables cooked with spices and herbs.",
    category: "Curry",
    rating: 4.6,
  },
  {
    id: 20,
    img: "https://example.com/rajma.jpg",
    name: "Rajma",
    price: 70,
    desc: "Red kidney beans slow-cooked in a flavorful tomato-based gravy.",
    category: "Curry",
    rating: 4.5,
  },
  {
    id: 21,
    img: "https://example.com/kadhi-pakoda.jpg",
    name: "Kadhi Pakoda",
    price: 70,
    desc: "Gram flour dumplings in a tangy yogurt-based curry.",
    category: "Curry",
    rating: 4.6,
  },
  {
    id: 22,
    img: "https://example.com/plain-raita.jpg",
    name: "Plain Raita",
    price: 40,
    desc: "Refreshing yogurt with a hint of salt and cumin.",
    category: "Raita",
    rating: 4.5,
  },
  {
    id: 23,
    img: "https://example.com/boondi-raita.jpg",
    name: "Boondi Raita",
    price: 50,
    desc: "Yogurt mixed with crispy boondi and mild spices.",
    category: "Raita",
    rating: 4.6,
  },
  {
    id: 24,
    img: "https://example.com/mix-raita.jpg",
    name: "Mix Raita",
    price: 60,
    desc: "A mix of fresh vegetables and yogurt with mild spices.",
    category: "Raita",
    rating: 4.7,
  },
  {
    id: 25,
    img: "https://example.com/plain-chaas.jpg",
    name: "Plain Buttermilk (Chaas)",
    price: 25,
    desc: "A refreshing and cooling buttermilk drink.",
    category: "Beverages",
    rating: 4.6,
  },
  {
    id: 26,
    img: "https://example.com/masala-chaas.jpg",
    name: "Masala Buttermilk (Chaas)",
    price: 30,
    desc: "Spiced buttermilk with roasted cumin and herbs.",
    category: "Beverages",
    rating: 4.7,
  },
  {
    id: 27,
    img: "https://example.com/plain-rice.jpg",
    name: "Plain Rice",
    price: 40,
    desc: "Steamed white rice, simple and fluffy.",
    category: "Rice",
    rating: 4.5,
  },
  {
    id: 28,
    img: "https://example.com/jeera-rice.jpg",
    name: "Jeera Rice",
    price: 50,
    desc: "Fragrant basmati rice tempered with cumin seeds.",
    category: "Rice",
    rating: 4.6,
  },
  {
    id: 29,
    img: "https://example.com/matar-pulao.jpg",
    name: "Matar Pulao",
    price: 150,
    desc: "Basmati rice cooked with green peas and mild spices.",
    category: "Rice",
    rating: 4.7,
  },
  {
    id: 30,
    img: "https://example.com/steamed-momos.jpg",
    name: "Steamed Momos",
    price: 30,
    desc: "Soft and juicy dumplings filled with vegetables.",
    category: "Fast Food",
    rating: 4.6,
  },
  {
    id: 31,
    img: "https://example.com/fried-momos.jpg",
    name: "Fried Momos",
    price: 40,
    desc: "Crispy deep-fried dumplings filled with vegetables.",
    category: "Fast Food",
    rating: 4.7,
  },
  {
    id: 32,
    img: "https://example.com/tandoori-momos.jpg",
    name: "Tandoori Momos",
    price: 50,
    desc: "Smoky and spicy tandoor-grilled dumplings.",
    category: "Fast Food",
    rating: 4.8,
  },
  {
    id: 33,
    img: "https://example.com/chilli-momos.jpg",
    name: "Chilli Momos",
    price: 50,
    desc: "Dumplings tossed in a spicy and tangy sauce.",
    category: "Fast Food",
    rating: 4.7,
  },
  {
    id: 34,
    img: "https://example.com/french-fries.jpg",
    name: "French Fries",
    price: 40,
    desc: "Crispy and golden-fried potato fries.",
    category: "Fast Food",
    rating: 4.6,
  },
  {
    id: 35,
    img: "https://example.com/chilli-potato.jpg",
    name: "Chilli Potato",
    price: 40,
    desc: "Crispy potatoes tossed in a spicy and tangy sauce.",
    category: "Fast Food",
    rating: 4.7,
  },
  {
    id: 36,
    img: "https://example.com/spring-roll.jpg",
    name: "Spring Roll",
    price: 30,
    desc: "Crispy rolls filled with vegetables and spices.",
    category: "Fast Food",
    rating: 4.6,
  },
  {
    id: 37,
    img: "https://example.com/normal-burger.jpg",
    name: "Normal Burger",
    price: 40,
    desc: "A classic burger with a crispy vegetable patty.",
    category: "Fast Food",
    rating: 4.5,
  },
  {
    id: 38,
    img: "https://example.com/cheese-burger.jpg",
    name: "Cheese Burger",
    price: 55,
    desc: "A delicious burger with a cheesy vegetable patty.",
    category: "Fast Food",
    rating: 4.7,
  },
  {
    id: 39,
    img: "https://example.com/fried-rice.jpg",
    name: "Fried Rice",
    price: 60,
    desc: "Stir-fried rice with vegetables and soy sauce.",
    category: "Fast Food",
    rating: 4.6,
  },
  {
    id: 40,
    img: "https://example.com/chowmein.jpg",
    name: "Chowmein",
    price: 30,
    desc: "Stir-fried noodles with vegetables and sauces.",
    category: "Fast Food",
    rating: 4.6,
  },
  {
    id: 41,
    img: "https://example.com/manchurian.jpg",
    name: "Manchurian",
    price: 40,
    desc: "Fried vegetable balls in spicy Manchurian sauce.",
    category: "Fast Food",
    rating: 4.7,
  },
];

export default FoodData;
