<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>Home</h1>
  <h3>Please add one path to the current URL</h3>

  <h4>/:retailunitCode/:period</h4>
  <RouterLink to="/IT/2024-01" active-class="active">
    e.g. /IT/2024-01
  </RouterLink>

  <h4>/:retailunitCode/:period/:businessUnitCode</h4>
  <RouterLink to="/IT/2024-01/BU01" active-class="active">
    e.g. /IT/2024-01/bu01
  </RouterLink>

  <h4>/:retailUnitCode/:period/:customerId</h4>
  <RouterLink to="/IT/2024-01/it.customer-02" active-class="active">
    e.g. /IT/2024-01/it.customer-02
  </RouterLink>
  
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
