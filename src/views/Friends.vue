<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const props = defineProps(["isSidebarClosed"])

const navs = ref(["Friends", "Requests", "Sent"])
const currentNavBlock = ref(route.query.nav ?? "Friends")

const changeNav = nav => {
  currentNavBlock.value = nav
  router.push(`/Friends?nav=${nav}`)
}
</script>

<template>
  <div class="main-friends-bg" :class="{ open: isSidebarClosed }">
    <div class="top-block">
      <div class="main-icon">
        <svg width="54" height="54" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M25 10H7a3.003 3.003 0 0 0-3 3v6a2.002 2.002 0 0 0 2 2v7a2.002 2.002 0 0 0 2 2h4a2.002 2.002 0 0 0 2-2V16h-2v12H8v-9H6v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2v9h-4V16h-2v12a2.002 2.002 0 0 0 2 2h4a2.002 2.002 0 0 0 2-2v-7a2.002 2.002 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3zM10 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm12 6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"
          />
        </svg>
      </div>
      <div class="main-content">
        <p class="title">Friends</p>
        <p class="description">All of you friends and requests are listed here.</p>
      </div>
    </div>
    <div class="bottom-block">
      <div class="nav-bar" v-auto-animate>
        <div class="nav-block" v-for="nav in navs" :class="{ selected: currentNavBlock === nav }" @click="changeNav(nav)">{{ nav }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-friends-bg {
  width: calc(100vw - 220px);
  transition: 0.4s ease;
  background-color: var(--white-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  gap: 20px;
}

.main-friends-bg.open {
  width: calc(100vw - 70px);
  transition: 0.4s ease;
}

.top-block {
  width: 100%;
  min-height: 10vh;
  /* padding: 30px 40px; */
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--d-grey);
}

.title {
  font-size: 24px;
  font-weight: 600;
}

.description {
  color: var(--d-grey-o-8);
}

.bottom-block {
  width: 100%;
  height: 100%;
  background-color: var(--white);
  box-shadow: 0px 0px 10px -2px var(--d-grey-o-2);
  border: 1px solid var(--d-grey-o-2);
  border-radius: 6px;
}

.nav-bar {
  padding: 0px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  border-bottom: 1px solid var(--d-grey-o-2);
  color: var(--d-grey-o-8);
}

.nav-block {
  cursor: pointer;
  position: relative;
  padding: 20px 0px 14px 0px;
}

.nav-block.selected {
  color: var(--l-purple-o-8);
  transition: 0.2s ease;
}

.nav-block::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--l-purple);
  left: 0;
  bottom: 0px;
  border-radius: 10px;
  transition: 0.2s ease;
  opacity: 0;
}

.nav-block.selected::after {
  opacity: 1;
}
</style>
