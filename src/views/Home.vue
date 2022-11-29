<script setup>
import { ref } from "vue"
import Sidebar from "../components/Sidebar.vue"

const isSidebarClosed = ref(false)
</script>

<template>
  <div class="main-bg" v-auto-animate>
    <Sidebar
      @sidebar-event="
        data => {
          isSidebarClosed = data
        }
      "
    />
    <RouterView :isSidebarClosed="isSidebarClosed" />
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
