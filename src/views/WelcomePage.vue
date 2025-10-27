<template>

    <main>
        <h1>Welcome{{ userName }}</h1>
        
    </main>
</template>
<script setup>
import {computed, ref} from 'vue';
import TokenService from '../services/TokenService';

const userName = ref('');

computed(()=>{
    userName.value = TokenService.getUser()
})


</script>






