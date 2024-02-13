<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>Home</h1>
  <h3>Please add one path to the current URL</h3>

  <h4>/:retailUnitCode/:period</h4>
  <RouterLink to="/IT/2024-01" active-class="active">
    e.g. /IT/2024-01
  </RouterLink>

  <h4>/:retailUnitCode/:period/:businessUnitCode</h4>
  <RouterLink to="/FI/2024-01/BU01" active-class="active">
    e.g. /FI/2024-01/bu01
  </RouterLink>

  <h4>/:retailUnitCode/:period/:customerId</h4>
  <RouterLink to="/IT/2024-01/it.customer-02" active-class="active">
    e.g. /IT/2024-01/it.customer-02
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useMarketStore } from "../store";
import { onMounted } from "vue";

const marketStore = useMarketStore();

onMounted(async () => {
  try {
    await marketStore.fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
