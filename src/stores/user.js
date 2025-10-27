import {defineStore} from 'pinia';
import {ref, shallowRef, toRef } from 'vue'
import api from '../services/api'

export const useUserStore = defineStore('user', ()=>{
    const users = ref([])
    const formModel = ref(createNewRecord())
    const dialog = shallowRef(false)
    const isEditing = toRef(() => !!formModel.value.id)

    function createNewRecord () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    } 

    function add () {
        formModel.value = createNewRecord()
        dialog.value = true
    }

    function edit (id) {
        const found = users.value.find(user => user.id === id)

        formModel.value = {
            id: found.id,
            name: found.name,
            email: found.email,
            password:'',
            password_confirmation:'',
        }

        dialog.value = true
    }

    async function remove(id) {
        try{
            await api.delete(`/deleteUser/${id}`);
            localStorage.reload()
        }catch(error){
            console.error('Failed to Delete User', error?.response?.message);
        }
    }

    function reset () {
        dialog.value = false
        formModel.value = createNewRecord()
        users.value = []
        
    }
    
    async function save () {

        if (isEditing.value) {
        //Update Function
        try{
            await api.post(`/updateUser/${formModel.value.id}`, formModel.value);
            localStorage.reload()
        }catch(error){
            console.error('Failed to Update User', error?.response?.message);
        }
        } else {
        //Save Function
        try{
            await api.post('/register', formModel.value);
            localStorage.reload()
        }catch(error){
            console.error('Failed to Save User', error?.response?.message);
        }
        }

        dialog.value = false
    }
    async function getUsers(){
        try{
        const response = await api.get('/getUser')
        users.value = response.data.User
        }catch(error){
        console.error('Failed to fetch Users', error?.response?.message);
        }
    }

    return{
        users,
        formModel, 
        isEditing,
        dialog,
        add,
        edit,
        remove,
        save,
        reset,
        getUsers,
    }
})