<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()
const props = defineProps(["isSidebarClosed"])

const currentSelectedGroup = ref(route.query.group ?? "")

const groups = ref([
  {
    id: 1,
    name: "Data Analytics",
  },
  {
    id: 2,
    name: "DB Management",
  },
  {
    id: 3,
    name: "Graphic Design",
  },
  {
    id: 4,
    name: "PDA Developmnt",
  },
])

const changeGroup = id => {
  currentSelectedGroup.value = id
  router.push(`/Groups?group=${id}`)
}
</script>

<template>
  <div class="main-groups-bg" :class="{ open: isSidebarClosed }">
    <div class="main-sidebar">
      <div class="groups-block">
        <div class="title group-title">Groups</div>
        <div class="groups-list">
          <div
            class="main-group-block"
            v-for="group in groups"
            :key="group.id"
            @click="changeGroup(group.id)"
            :class="{ selected: currentSelectedGroup === group.id }"
          >
            <div class="group-slider">
              <div class="group-icon">
                <svg width="20" height="20" viewBox="0 0 32 32">
                  <path fill="currentColor" d="M9 12v-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9h-2v9H4V12" />
                  <path
                    fill="currentColor"
                    d="M22 12h-8V4h8zM12 4v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2zm2 14v4h-4v-4h4m-6 0v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2zm20-1v2h-2v-2h2m-4-1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"
                  />
                </svg>
              </div>
              <p>{{ group.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="statistics-block">
        <div class="title stat-title">Statistics</div>
        <div class="stats-list">
          <div class="main-stat-block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-groups-bg {
  width: calc(100vw - 220px);
  transition: 0.4s ease;
  background-color: var(--white-2);
}

.main-groups-bg.open {
  width: calc(100vw - 70px);
  transition: 0.4s ease;
}

.main-sidebar {
  width: 220px;
  height: 100vh;
  background-color: var(--white);
  box-shadow: 4px 0px 10px -6px var(--d-grey-o-2);
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
}

.title {
  font-size: 20px;
  color: var(--d-grey);
  padding: 6px 14px;
  font-weight: 600;
}

.groups-list {
  display: flex;
  flex-direction: column;
}

.main-group-block {
  position: relative;
  padding: 6px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  color: var(--d-grey-o-8);
}

.group-slider {
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.2s ease;
}

.main-group-block::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, var(--l-purple-2-o-6) 10%, var(--l-purple-2-o-2) 90%);
  transform: translateX(-100%);
  transition: 0.2s ease;
}

.main-group-block:hover .group-slider {
  transform: translateX(4px);
}

.main-group-block.selected::before {
  transform: translateX(0);
}

.main-group-block.selected .group-slider {
  transform: translateX(6px);
  color: var(--d-grey);
}
</style>
