<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
  // import axios from 'axios';
  import {onMounted, ref} from "vue";

  // const val1 = ref('test')
  // const val2 = ref(null)
  // let val3 = null
  // let val4 = 'test1'

  onMounted(()=> {

    // let params = {
    //   val1: val1.value,
    //   val2: val2.value,
    //   val3: val3,
    //   val4: val4,
    // }

    // axios.post('/api/hello',params,{
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    // axios.get("/api/servlets/vkeypad.do",{
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.data);
    // })
    //
    // axios.post("/api/servlets/vkeypad.do",params,{
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

  })

</script>
<style scoped></style>
