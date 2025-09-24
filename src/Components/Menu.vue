<script setup>

const menu = {
   0:{
      name: 'Burger',
      image: "/images/menu/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
      price: 500,
      description: 'The most juicy burger you will ever find',
      category: 'food'
   },
   1:{
      name: 'Veges',
      image: "/images/menu/jacopo-maiarelli--gOUx23DNks-unsplash.jpg",
      price: 550,
      description: 'Get your bucket of fresh vegetables today from FoodPlus',
      category: 'vegetables'
   },
   2:{
      name: 'Chips',
      image: "/images/menu/jc-gellidon-mFPlHlDLtUA-unsplash.jpg",
      price: 250,
      description: 'You want spicy, try the chips masala',
      category: 'food'
   },
   4:{
      name: 'Fresh',
      image: "/images/menu/scott-warman-NpNvI4ilT4A-unsplash.jpg",
      price: 450,
      description: 'You can now get your daily groceries delivered to you just by a click of a button',
      category: 'vegetables'
   },
   5:{
      name: 'MunchInn',
      image: "/images/menu/zach-rowlandson-SPkhls3z3Pw-unsplash.jpg",
      price: 250,
      description: 'A bucket of your favourite snacks at 250 only',
      category: 'snacks'
   },
   6:{
      name: 'XL Pizza',
      image: "/images/menu/brenna-huff-22Vt7JIf7ZI-unsplash.jpg",
      price: 1350,
      description: 'Your cheesy extra large pizza served while hot',
      category: 'food'
   },
   7:{
      name: 'Pizza*2',
      image: "/images/menu/kelvin-t-AcA8moIiD3g-unsplash.jpg",
      price: 990,
      description: 'Get double medium pizza every weekday from pizzainn',
      category: 'food'
   },
   8:{
      name: 'Kukufest',
      image: "/images/menu/lucas-andrade-3Uj0GwVmOeY-unsplash.jpg",
      price: 650,
      description: 'Every weekday get a 50% off on your chicken orders above 500 from KFC',
      category: 'food'
   },
}

</script>

<template>
   <h1>Menu</h1>
   <v-container>
      <v-row>
         <v-col md="3" v-for="item in menu" :key = "item">
            <v-card color="teal-darken-3">
              <v-img :src="item.image" height="200" cover></v-img>
              <v-row>
               <v-col md="6">
                  <v-card-title>{{ item.name }}</v-card-title>
               </v-col>
               <v-col md="6">
                  <v-chip>{{ item.category }}</v-chip>
               </v-col>
              </v-row>
              <v-card-subtitle>{{ item.description }}</v-card-subtitle>
              <v-card-actions>
                 <v-card-title>{{ item.price }}</v-card-title>
                 <v-btn>Order</v-btn>
              </v-card-actions>
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>