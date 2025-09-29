<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const showPassword = ref(false)

//models
const email = ref(null)
const password = ref(null)

function login(){
    try {
        //get user data
        let user = JSON.parse(localStorage.getItem( "signUpData"));
        //check user details
        if(email.value = user.email && password.value == user.password){
            localStorage.setItem( "isLoggedIn", true );
            router.push('/')

        }else{
            console.log("Invalid credentials")
        }

        // To Do: send data to backend
    } catch (err) {
        console.error('Sign up process failed', err)
    }

}

</script>

<template>
   <v-container align="center">
      <v-row>
         <v-col>
            <v-card class="pa-6" width="600" color="teal-darken-3">
               <v-card-title>Log In</v-card-title>
               <v-text-field v-model="email" label="Email Address" :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required></v-text-field>
               <v-text-field v-model="password" label="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required></v-text-field>
               
               <v-card-text>
                  Don't have an account 
                  <router-link to="/signup">Sign Up</router-link>
               </v-card-text>
               <v-card-actions>
                  <v-btn color="white" variant="teal-darken-3"    @click="login()">Log In</v-btn>
               </v-card-actions> 
            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>