<template>
  <button @click="router.push(`/`)">Home</button>
  <div class="hello">
    <h1>Customer</h1>
    <h3>Total {{ customerId }} balance: </h3>
    <p>
      {{ balancePerCustomer }}
    </p>
     <h3>Total {{ customerId }} balance events: </h3>
    <ul v-for="event in eventsPerCustomer" :key="event.id">
      <li>
        {{ event }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useMarketStore } from "../store";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Filter3View",

  setup() {
    const marketStore = useMarketStore();
    const router = useRouter();
    const route = useRoute();

    const { retailUnitCode, businessUnitCode, customerId } = route.params;

    const eventsPerCustomer = marketStore.getCustomerBalanceEventsForMarket(
      customerId,
      retailUnitCode
    ).events;

    const balancePerCustomer = marketStore.getCustomerBalanceEventsForMarket(
      customerId,
      retailUnitCode
    ).balance;

    return {
      router,
      eventsPerCustomer,
      balancePerCustomer,
      customerId,
      retailUnitCode,
      businessUnitCode,
      marketStore,
    };
  },
};
</script>
