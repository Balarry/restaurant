import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',  {
    state: () => {
       

       const users = {
        0:{
            name:'John Doe',
            email: 'john@example.com',
            phone: 25412345678,
            deliveryAddress: '123 Madaraka',
            password: 'qwerty123',
            userType: 'Admin',
            activeAccount: true

        },
        1:{
            name:'Larry Doe',
            email: 'larry@example.com',
            phone: 25411345678,
            deliveryAddress: '113 Karen',
            password: 'qwerty113',
            userType: 'Customer',
            activeAccount: true

        },
        2:{
            name:'Omondi Doe',
            email: 'omondi@example.com',
            phone: 25422345678,
            deliveryAddress: '223 Kingara',
            password: 'qwerty223',
            userType: 'Customer',
            activeAccount: true

        },
        3:{
            name:'Ochieng Doe',
            email: 'ochieng@example.com',
            phone: 25433345678,
            deliveryAddress: '333 Kilimani',
            password: 'qwerty333',
            userType: 'Customer',
            activeAccount: true

        },
        4:{
            name:'Balarry Doe',
            email: 'balarry@example.com',
            phone: 25444445678,
            deliveryAddress: '444 Westlands',
            password: 'qwerty444',
            userType: 'Customer',
            activeAccount: false

        }
       }

        return { users }
    },
    actions:{
        
       
    }
})