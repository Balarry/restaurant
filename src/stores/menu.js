import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
       const menu = {
   0:{
      name: 'Burger',
      image: "/images/menu/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
      price: 500,
      description: 'The most juicy burger you will ever find',
      longDescription:'A juicy burger bursts with flavor from a tender, perfectly grilled patty layered with melted cheese, crisp lettuce, and fresh tomatoes. Nestled in soft, toasted buns, it drips with savory juices and tangy sauce in every bite. It’s the perfect balance of smoky, fresh, and indulgent goodness.',
      category: 'food'
   },
   1:{
      name: 'Veges',
      image: "/images/menu/jacopo-maiarelli--gOUx23DNks-unsplash.jpg",
      price: 550,
      description: 'Get your bucket of fresh vegetables today from FoodPlus',
      longDescription: 'Fresh vegetables bring a vibrant crunch and natural sweetness to every bite, bursting with color and nutrients. From crisp lettuce and juicy tomatoes to garden-fresh cucumbers and peppers, they add both flavor and vitality. Packed with goodness, they’re the perfect balance of health and taste.',
      category: 'vegetables'
   },
   2:{
      name: 'Chips',
      image: "/images/menu/jc-gellidon-mFPlHlDLtUA-unsplash.jpg",
      price: 250,
      description: 'You want spicy, try the chips masala',
      longDescription: 'Golden, crispy chips fried to perfection with a fluffy, tender inside that melts in your mouth. Lightly salted for a savory kick, they’re the perfect side to any meal. Irresistibly crunchy, they keep you coming back for more.',
      category: 'food'
   },
   4:{
      name: 'Fresh',
      image: "/images/menu/scott-warman-NpNvI4ilT4A-unsplash.jpg",
      price: 450,
      description: 'You can now get your daily groceries delivered to you just by a click of a button',
      longDescription: 'Fruits are nature’s sweetest gift, bursting with vibrant colors and refreshing flavors. Juicy, ripe, and packed with vitamins, they bring both nourishment and delight in every bite. From tropical treats to orchard classics, they’re the perfect blend of health and indulgence.',
      category: 'vegetables'
   },
   5:{
      name: 'MunchInn',
      image: "/images/menu/zach-rowlandson-SPkhls3z3Pw-unsplash.jpg",
      price: 250,
      description: 'A bucket of your favourite snacks at 250 only',
      longDescription: 'Snacks are the perfect little bites that keep cravings satisfied anytime of the day. From crunchy and salty to sweet and chewy, they pack big flavor into small portions. Quick, tasty, and convenient, they bring instant joy with every nibble.',
      category: 'snacks'
   },
   6:{
      name: 'XL Pizza',
      image: "/images/menu/brenna-huff-22Vt7JIf7ZI-unsplash.jpg",
      price: 1350,
      description: 'Your cheesy extra large pizza served while hot',
      longDescription: 'An Xtra Large pizza is a feast-sized delight, loaded with generous toppings that stretch across a golden, crispy crust. Every slice overflows with melted cheese, rich sauce, and your favorite flavors, making it perfect for sharing. It’s the ultimate combination of size, taste, and satisfaction.',
      category: 'food'
   },
   7:{
      name: 'Pizza*2',
      image: "/images/menu/kelvin-t-AcA8moIiD3g-unsplash.jpg",
      price: 990,
      description: 'Get double medium pizza every weekday from pizzainn',
      longDescription: 'A double pizza means double the layers, double the cheese, and double the flavor in every bite. Stacked with rich sauce, gooey toppings, and a golden crust, it’s built to satisfy the biggest cravings. Perfect for true pizza lovers, it delivers twice the indulgence in one meal.',
      category: 'food'
   },
   8:{
      name: 'Kukufest',
      image: "/images/menu/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg",
      price: 650,
      description: 'Every weekday get a 50% off on your chicken orders above 500 from KFC',
      longDescription: 'KukuFest is a feast of flavors, celebrating tender, juicy chicken prepared to perfection in every style. From crispy fried cuts to smoky grilled pieces, it’s a mouthwatering experience made for true chicken lovers. Big, bold, and satisfying, KukuFest is where every bite feels like a celebration.',
      category: 'food'
   },
}

        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})
