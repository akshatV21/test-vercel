import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import VWave from "v-wave"
import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { router } from "./router"

createApp(App).use(router).use(VWave).use(autoAnimatePlugin).mount("#app")
