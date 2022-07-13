<template>
  <Header></Header>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Count: {{count}}</div>
    <button class=" bg-blue-500 text-white font-bold py-2 px-4 rounded" @click="addOne">Add one</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "remote/HeaderComponent";
export default {
  components: {
    Header
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
  methods: {
    addOne(){
      this.$store.commit('addOne');
    }
  }
};
</script>