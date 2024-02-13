<template>
  <button @click="router.push(`/`)">Home</button>
  <div class="hello">
    <h1>Customers</h1>
    <h3>Total customers in {{ businessUnitCode }} business unit</h3>
    <ul
      v-for="customerId in Object.keys(
        marketStore.getBUCustomersBalance(businessUnitCode)
      )"
      :key="customerId"
    >
      <button
        @click="router.push(`/${retailUnitCode}/${period}/${customerId}`)"
      >
        <li>
          {{ customerId }} Balance:
          {{ getBUBalances(businessUnitCode)[customerId] }}
        </li>
      </button>
    </ul>
  </div>
</template>

<script>
import { useMarketStore } from "../store";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Filter2View",

  setup() {
    const marketStore = useMarketStore();

    const route = useRoute();

    const { retailUnitCode, period, businessUnitCode } = route.params;

    const router = useRouter();

    const getBUBalances = (BU) => {
      return marketStore.getBUCustomersBalance(BU);
    };

    return {
      retailUnitCode,
      period,
      businessUnitCode,
      router,
      getBUBalances,
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
