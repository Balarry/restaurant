<script setup>

</script>

<template>
   <h1>Home</h1>
<!-- Carousel -->
<v-container>
   <v-row>
    <v-carousel>
    <v-carousel-item src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"></v-carousel-item>
    <v-carousel-item src="/images/hamza-nouasria-cQhtR6GsHYE-unsplash.jpg"></v-carousel-item>
    <v-carousel-item src="/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg"></v-carousel-item>
    <v-carousel-item src="/images/kai-pilger-dwBZLRPhHjc-unsplash.jpg"></v-carousel-item>
    </v-carousel>
    
   </v-row>
</v-container>
<!-- About -->
<v-container>
   <v-row>  
      <v-card align="center">
      <p class="text-h4"><b>Welcome to UberEats</b></p>
      <p class="text-h6">We are a food delivery platform that bridges customers with their favorite local restaurants.</p>
      <p class="text-h6">Our service is built on speed, reliability, and convenience, ensuring meals arrive fresh and on time.</p>
      <p class="text-h6">With us, enjoying great food has never been easier.</p>
      </v-card>

   </v-row>
</v-container>
<!--News-->
<v-container>
   <v-row>
    <v-col md="4">
      <v-card color="teal-darken-3">
         <v-img 
         src="/images/megan-thomas-xMh_ww8HN_Q-unsplash.jpg"
         class="align-end text-white"
         height="400"
         width="400"
         cover>
         </v-img>
         <v-card-title>Order From FoodPlus</v-card-title>
         <v-card-subtitle>another sample text</v-card-subtitle>
         <v-card-actions>
            <v-btn>Read More</v-btn>
         </v-card-actions>
      </v-card>
      </v-col>

      <v-col md="4">
      <v-card color="teal-darken-3">
         <v-img 
         src="/images/denny-muller-mGP8gyGb8zY-unsplash.jpg"
         class="align-end text-white"
         height="400"
         width="400"
         cover>
         </v-img>
         <v-card-title>Order From SnackPalace</v-card-title>
         <v-card-subtitle>another sample text</v-card-subtitle>
         <v-card-actions>
            <v-btn>Read More</v-btn>
         </v-card-actions>
      </v-card>
      </v-col>

      <v-col md="4">
      <v-card color="teal-darken-3">
         <v-img 
         src="/images/aleks-dorohovich-HYpXP6Zk1dw-unsplash.jpg"
         class="align-end text-white"
         height="400"
         width="400"
         cover>
         </v-img>
         <v-card-title>Order from KFC</v-card-title>
         <v-card-subtitle>another sample text</v-card-subtitle>
         <v-card-actions>
            <v-btn>Read More</v-btn>
         </v-card-actions>
      </v-card>
      </v-col>
      

   </v-row>
</v-container>
<!--Footer-->
<v-container>
   <v-row>
<v-footer class="text-center d-flex flex-column ga-2 py-4" color="teal-darken-3">
                <div class="d-flex ga-3">
                <v-btn icon="mdi-facebook" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-twitter" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-linkedin" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="mdi-instagram" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

            

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>UberEats</strong>
                </div>
            </v-footer>
   </v-row>
</v-container>

</template>