<template>
  <button @click="router.push(`/`)">Home</button>
  <div>
    <h1>Business Units</h1>
    <h3>Total business Unit</h3>
    <div class="hello">
      <ul v-for="bu in marketStore.businessUnitsList()" :key="bu">
        <li>
          {{ bu }} Balance:
          {{ getBusinessUnitsBalance(bu) }}
        </li>
      </ul>
    </div>
    <h3>Total business Unit for {{ retailunitCode }}</h3>
    <div class="hello">
      <ul v-for="bu in marketStore.businessUnitsList(retailunitCode)" :key="bu">
        <li>
          {{ bu }} Balance:
          {{ getBusinessUnitsBalance(bu) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useMarketStore } from "../store";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Filter1View",

  setup() {
    const marketStore = useMarketStore();

    onMounted(async () => {
      try {
        await marketStore.fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    const router = useRouter();
    const route = useRoute();

    const { retailunitCode } = route.params;
    console.log(route.params);

    const getBusinessUnitsBalance = (BU) => {
      return marketStore.getBusinessUnitsBalance(BU);
    };

    return {
      router,
      retailunitCode,
      getBusinessUnitsBalance,
      marketStore,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
