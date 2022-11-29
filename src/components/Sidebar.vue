<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const emitter = defineEmits(["sidebar-event"])

const links = ref([
  {
    name: "Groups",
    svg: `<svg width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M31 30h-2v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h-2v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zm-7-18a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm-9 12h-2v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zM8 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5z"/></svg>`,
  },
  {
    name: "Privates",
    svg: `<svg width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M18 30h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2zm-5-18a.94.94 0 0 0-1 1v6h2v9h4v-9h2v-6a.94.94 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2z"/></svg>`,
  },
  {
    name: "Doubts",
    svg: `<svg width="22" height="22" viewBox="0 0 32 32"><path d="M24 2h2v7h-2z" fill="currentColor"/><path d="M25 11a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 25 11z" fill="currentColor"/><path d="M11 24h10v2H11z" fill="currentColor"/><path d="M13 28h6v2h-6z" fill="currentColor"/><path d="M23.049 16a9.614 9.614 0 0 1-1.871 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.989 9.989 0 0 0 25.282 16z" fill="currentColor"/><path d="M16 4a7.94 7.94 0 0 1 4 1.083V2.84A9.989 9.989 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.186-3.86A7.185 7.185 0 0 1 8 12a8.01 8.01 0 0 1 8-8z" fill="currentColor"/></svg>`,
  },
  {
    name: "Community",
    svg: `<svg width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M8 19H6v-2a3.003 3.003 0 0 1 3-3h5v2H9a1.001 1.001 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm8 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm6 12h-2v-2a1.001 1.001 0 0 0-1-1h-6a1.001 1.001 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"/><path fill="currentColor" d="M8 30H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h4v2H4v24h4zm20 0h-4v-2h4V4h-4V2h4a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2z"/></svg>`,
  },
  {
    name: "Friends",
    svg: `<svg width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M25 10H7a3.003 3.003 0 0 0-3 3v6a2.002 2.002 0 0 0 2 2v7a2.002 2.002 0 0 0 2 2h4a2.002 2.002 0 0 0 2-2V16h-2v12H8v-9H6v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2v9h-4V16h-2v12a2.002 2.002 0 0 0 2 2h4a2.002 2.002 0 0 0 2-2v-7a2.002 2.002 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3zM10 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm12 6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"/></svg>`,
    a: "<h1>hello world</h1>",
  },
])
const currentLink = ref(getCurrentLink())
const isSidebarClosed = ref(false)

function getCurrentLink() {
  const path = route.fullPath
  const splittedOne = path.split("/").join("?")
  const splitted = splittedOne.split("?")
  console.log(splitted)
  return splitted[1]
}

const changeLink = link => {
  router.push(`/${link.name}`)
  currentLink.value = link.name
}

const changeSidebarWidth = () => {
  isSidebarClosed.value = !isSidebarClosed.value
  emitter("sidebar-event", isSidebarClosed.value)
}
</script>

<template>
  <div class="main-sidebar" :class="{ closed: isSidebarClosed }">
    <div class="top-block" v-auto-animate>
      <div
        v-for="link in links"
        :key="link.name"
        class="main-link"
        :class="{ selected: currentLink === link.name }"
        @click="changeLink(link)"
        v-wave
      >
        <div class="link-slider" v-auto-animate>
          <div class="link-icon" v-html="link.svg"></div>
          <p v-if="!isSidebarClosed">{{ link.name }}</p>
        </div>
        <div class="side-tile" v-if="!isSidebarClosed"></div>
      </div>
    </div>
    <div class="bottom-block">
      <div class="collapse-block" @click="changeSidebarWidth">
        <div class="collapse-icon">
          <svg width="20" height="20" viewBox="0 0 32 32">
            <path fill="currentColor" d="m6 22l1.414-1.414L3.828 17H12v-2H3.828l3.586-3.586L6 10l-6 6l6 6z" />
            <path fill="currentColor" d="M16 10a5.981 5.981 0 0 0-4.243 1.757L16 16l-4.243 4.243A6 6 0 1 0 16 10Z" />
            <path
              fill="currentColor"
              d="M16 2a13.958 13.958 0 0 0-9.895 4.105l1.414 1.414a12 12 0 1 1 0 16.962l-1.414 1.414A13.997 13.997 0 1 0 16 2Z"
            />
          </svg>
        </div>
        <p v-if="!isSidebarClosed">Collapse</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-sidebar {
  width: 220px;
  height: 100%;
  background-color: var(--purple);
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s ease;
}

.top-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1px;
}

.main-link {
  position: relative;
  color: var(--pur-white-o-8);
  padding: 12px 22px;
  cursor: pointer;
  transition: 0.2s ease;
}

.main-link:hover {
  color: var(--pur-white);
  background-color: var(--l-purple-2-o-2);
}

.link-slider {
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.side-tile {
  position: absolute;
  width: 4px;
  height: 30px;
  background-color: var(--l-purple-2-o-6);
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0;
  transition: 0.2s ease;
}

.main-link.selected .side-tile {
  opacity: 1;
}

.link-icon,
.collapse-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-link:hover .link-slider {
  transform: translateX(6px);
}

.main-link.selected {
  color: var(--pur-white);
  background-color: var(--l-purple-2-o-2);
}

.main-link.selected .link-slider {
  transform: translateX(6px);
}

.collapse-block {
  color: var(--pur-white-o-8);
  padding: 12px 22px;
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* CLOSED */
.main-sidebar.closed {
  width: 70px;
  height: 100%;
  background-color: var(--purple);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-sidebar.closed .main-link {
  color: var(--pur-white-o-8);
  /* padding: 10px; */
  cursor: pointer;
  transition: 0.2s ease;
  border-radius: 6px;
}

.main-link.closed:hover {
  color: var(--pur-white);
  /* background-color: var(--l-purple-2-o-2); */
}

.main-sidebar.closed .link-slider {
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.link-icon,
.collapse-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-sidebar.closed .main-link:hover .link-slider {
  transform: translateX(0px);
}

.main-link.selected {
  color: var(--pur-white);
  background-color: var(--l-purple-2-o-2);
}

.main-sidebar.closed .main-link.selected .link-slider {
  transform: translateX(0px);
}

.main-sidebar.closed .collapse-block {
  color: var(--pur-white-o-8);
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
