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
      <li @click="router.push(`/${retailUnitCode}/${period}/${customerId}`)">
        {{ customerId }} Balance:
        {{ getBUBalances(businessUnitCode)[customerId] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useMarketStore } from "../store";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Filter3View",

  setup() {
    const marketStore = useMarketStore();

    onMounted(async () => {
      try {
        await marketStore.fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
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
