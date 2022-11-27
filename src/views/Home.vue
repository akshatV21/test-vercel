<script setup>
import Sidebar from "../components/Sidebar.vue"
</script>

<template>
  <div class="main-bg">
    <Sidebar />
  </div>
</template>

<style scoped>
.main-bg {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--white);
}
</style>
