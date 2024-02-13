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
    <h3>Total business Unit for {{ retailUnitCode }}</h3>
    <div class="hello">
      <ul v-for="bu in marketStore.businessUnitsList(retailUnitCode)" :key="bu">
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
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Filter1View",

  setup() {
    const marketStore = useMarketStore();


    const router = useRouter();
    const route = useRoute();

    const { retailUnitCode } = route.params;

    const getBusinessUnitsBalance = (BU) => {
      return marketStore.getBusinessUnitsBalance(BU);
    };

    return {
      router,
      retailUnitCode,
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
