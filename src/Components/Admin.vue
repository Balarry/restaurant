 <script setup>
import { ref } from 'vue';
import { useUsersStore } from '../stores/Users'
import { useMenuStore } from '../stores/menu'
import { useReservationsStore } from '../stores/Reservations'

const usersStore = useUsersStore()
const menuStore = useMenuStore()
const reservationsStore = useReservationsStore()

const tab = ref(null)
const users = usersStore.users
const menu = menuStore.menu
const reservations = [] //To Do: import reservations from its store

const showAddUserDialog = ref(false)
const showAddMenuDialog = ref(false)
const showAddReservationDialog = ref(false)

const showEditUserDialog = ref(false)
const showEditMenuDialog = ref(false)
const showEditReservationDialog = ref(false)

//models
// ----user models---
const name = ref(null)
const email = ref(null)
const phone = ref(null)
const deliveryAddress = ref(null)
const userType = ref(null)

// ----menu models---
const menuName = ref(null)
const price = ref(null)
const image = ref(null)
const description = ref(null)
const longDescription = ref(null)
const category = ref(null)

// ----reservation models---


//functions
//----users----
//add user

// edit user

// activate user
// deactivate user
// change password


//----menu----
//add menu

// edit menu

// delete menu

//----reservations----
//add reservation

// edit reservation

// delete reservation
function close(){
    showAddUserDialog.value = false
    showAddMenuDialog.value = false
    name.value = null
    email.value = null
    phone.value = null
    deliveryAddress.value = null
    userType.value = null

    menuName.value = null
    price.value = null
    image.value = null
    description.value = null
    longDescription.value = null
    category.value = null

    

}

</script>

<template>
    <v-container>
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" color="primary" >
                <v-tab :value="1">Users</v-tab>
                <v-tab :value="2">Menu</v-tab>
                <v-tab :value="3">Reservations</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <!-- Users -->
                <v-tabs-window-item :value="1">
                    <div v-if="users == null||users==undefined||Object.keys(users).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No users found</div>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row class="ma-2">
                                <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddUserDialog = true"></v-btn>
                            </v-col>
                                <v-col>
                                    <v-table class="border">
                                        <thead>
                                            <tr>
                                                <th class="text-left"> Name </th>
                                                <th class="text-left"> Email </th>
                                                <th class="text-left"> Phone </th>
                                                <th class="text-left"> Delivery Address </th>
                                                <th class="text-left"> Role </th>
                                                <th class="text-center" colspan="3"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in users" :key="item.id" >
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.email }}</td>
                                                <td>{{ item.phone }}</td>
                                                <td>{{ item.deliveryAddress }}</td>
                                                <td>{{ item.userType }}</td>

                                                <td v-if="item.activeAccount == true">
                                                    <v-btn color="success" size="small" @click="changePassword(item)"><v-icon icon="mdi-key" ></v-icon> Reset Password</v-btn>
                                                </td>
                                                <td v-if="item.activeAccount == true">
                                                    <v-btn color="primary" size="small" @click="editUser(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit</v-btn>
                                                </td>
                                                <td v-if="item.activeAccount == true">
                                                        <v-btn color="error" size="small" @click="deactivate(item)"><v-icon icon="mdi-account-cancel" ></v-icon> Deactivate</v-btn>
                                                </td>
                                                <td colspan="3" v-if="item.activeAccount !== true" align="center">
                                                    <v-btn color="warning" size="small" @click="activate(item)"><v-icon icon="mdi-account-check" ></v-icon> Activate</v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>

               <!-- Menu --> 
                 <v-tabs-window-item :value="2">
                    <div v-if="menu == null||menu==undefined||Object.keys(menu).length == 0" align="center">
                        <v-row>
                            <v-col cols="12" md="6" sm="12" >
                                <div class="text-h6">No menu found</div>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-else>
                        <v-container>
                            <v-row class="ma-2">
                                <v-col cols="12" md="6" sm="12" >
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-plus" @click="showAddMenuDialog = true"></v-btn>
                            </v-col>
                                <v-col>
                                    <v-table class="border">
                                        <thead>
                                            <tr>
                                                <th class="text-left"> Name </th>
                                                <th class="text-left"> Price </th>
                                                <th class="text-left"> Description </th>
                                                <th class="text-left"> Category </th>
                                                <th class="text-center" colspan="2"> Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in menu" :key="item.id" >
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.price }}</td>
                                                <td>{{ item.description }}</td>
                                                <td>{{ item.category }}</td>
    
                                                <td>
                                                    <v-btn color="primary" size="small" @click="editUser(item)"><v-icon icon="mdi-pencil" ></v-icon> Edit</v-btn>
                                                </td>
                                                <td>
                                                    <v-btn color="error" size="small" @click="deactivate(item)"><v-icon icon="mdi-account-cancel" ></v-icon> Deactivate</v-btn>
                                                </td>
                                                <td colspan="3" v-if="item.activeAccount !== true" align="center">
                                                    <v-btn color="warning" size="small" @click="activate(item)"><v-icon icon="mdi-account-check" ></v-icon> Activate</v-btn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-table>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-container>  

    <!-- Dialogs -->

    <!-- Users -->
    <!-- Add user -->
     <v-dialog v-model="showAddUserDialog" max-width="600">
                <v-form @submit.prevent >
                    <v-card>
                        <v-card-title class="pa-6">
                        <v-row>
                                Add User
                                <v-spacer></v-spacer>
                                <v-btn class="ma-2" color="blue-darken-2" icon="mdi-close" @click="close();"></v-btn>
                            </v-row>
                        </v-card-title>
                        <v-card-text>
                            <v-row dense>
                                <v-col >
                                    <v-text-field label="Name" v-model="name"></v-text-field>
                                </v-col>
                            </v-row>
                            
                             <v-row dense>
                                <v-col >
                                    <v-text-field label="Email" v-model="email"></v-text-field>
                                </v-col>
                            </v-row>
                             <v-row dense>
                                <v-col >
                                    <v-text-field label="Phone" v-model="phone" ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col >
                                    <v-text-field label="Delivery Address" v-model="deliveryAddress" ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" md="2" sm="6" > Role: </v-col>
                                <v-col cols="12" md="10" sm="6">
                                    <v-radio-group v-model="userType">
                                        <v-row>
                                            <v-col cols="12" md="6" sm="6" >
                                                <v-radio label="Admin" value="2"></v-radio>
                                            </v-col>
                                            <v-col cols="12" md="6" sm="6" >
                                                <v-radio label="Customer" value="3"></v-radio>
                                            </v-col>
                                        </v-row>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text="Close" variant="plain" @click="close()" ></v-btn>
                            <v-btn color="primary" type="submit" text="Save" variant="tonal" @click="addUser()" ></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-dialog>

            <!--Menu-->
            <!--Add Menu-->
             <v-dialog v-model="showAddMenuDialog" max-width="600">
        <v-form @submit.prevent >
            <v-card>
                <v-card-title class="pa-6">
                <v-row>
                        Add Menu
                        <v-spacer></v-spacer>
                        <v-btn class="ma-2" color="blue-darken-2" icon="mdi-close" @click="close();"></v-btn>
                    </v-row>
                </v-card-title>
                <v-card-text>
                    <v-row dense>
                        <v-col >
                            <v-text-field label="Name" v-model="menuName"></v-text-field>
                        </v-col>
                    </v-row>
                    
                        <v-row dense>
                        <v-col >
                            <v-text-field label="Price" v-model="price"></v-text-field>
                        </v-col>
                    </v-row>
                        <v-row dense>
                        <v-col >
                            <v-text-field label="Short Description" v-model="description" ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col >
                            <v-textarea label="Long Description" v-model="longDescription" ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12" md="2" sm="6" > Category: </v-col>
                        <v-col cols="12" md="10" sm="6">
                            <v-radio-group v-model="category">
                                <v-row>
                                    <v-col cols="12" md="6" sm="6" >
                                        <v-radio label="Food" value="2"></v-radio>
                                    </v-col>
                                    <v-col cols="12" md="6" sm="6" >
                                        <v-radio label="Drink" value="3"></v-radio>
                                    </v-col>
                                </v-row>
                                <v-row dense>
                                <v-col >
                                    <v-file-input label="Image" prepend-icon="mdi-camera" v-model="image" ></v-file-input>
                                </v-col>
                            </v-row>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close" variant="plain" @click="close()" ></v-btn>
                    <v-btn color="primary" type="submit" text="Save" variant="tonal" @click="addUser()" ></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>