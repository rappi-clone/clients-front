<template>
  <div class="columns" style="padding: 6.25em 40px 0px 40px">
    <div class="column">
      <div v-for="store in firstColumnStores" v-bind:key="store.id">
        <store :store="store" />
      </div>
    </div>
    <div class="column">
      <div v-for="store in secondColumnStores" v-bind:key="store.id">
        <store :store="store" />
      </div>
    </div>
    <div class="column">
      <div v-for="store in thirdColumnStores" v-bind:key="store.id">
        <store :store="store" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "~/components/store";
export default {
  data() {
    return {
      firstColumnStores: [],
      secondColumnStores: [],
      thirdColumnStores: []
    };
  },
  components: {
    store
  },

  created() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get(process.env.apiUrl+"/stores/getAllStores", {
        Authorization: "bearer" + token
      })
      .then(response => {
        let stores = response.data.stores;
        stores.forEach((store, index) => {
          if (index % 3 === 0) this.firstColumnStores.push(store);
          else if (index % 3 === 1) this.secondColumnStores.push(store);
          else this.thirdColumnStores.push(store);
        });
      })
      .catch(error => error);
  }
};
</script>

<style>
</style>

