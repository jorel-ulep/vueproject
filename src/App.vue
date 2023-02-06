<template>
  <main class="s-center max-w-3xl border-solid border-2 top-px-20 rounded">
    <MainHeader title="Grocery" />
    <GroceryLists :Lists="Lists" />
  </main>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import GroceryLists from './components/GroceryLists.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      Lists: [],
      showModal: true
    }
  },
  components: {
    MainHeader,
    GroceryLists
  },
  mounted() {
      axios.get(axios.defaults.baseURL).then(response =>  this.Lists = response.data)
  }
}
</script>
<style>
    .s-center {
        margin: 0 auto;
        left: 0;
        right: 0;
    }
</style>
