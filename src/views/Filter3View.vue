<template>
  <button @click="router.push(`/`)">Home</button>
  <div class="hello">
    <ul v-for="event in eventsPerCustomer" :key="event.id">
      <li>
        {{ event }}
      </li>
    </ul>
    <p>
      Balance:
      {{ balancePerCustomer }}
    </p>
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
