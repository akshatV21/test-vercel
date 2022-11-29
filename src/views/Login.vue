<script setup>
import axios from "axios"
import { ref, watch } from "vue"
import { useRouter } from "vue-router"
import { API_URL } from "../main"

const router = useRouter()

const email = ref("")
const password = ref("")

const showInvalidEmail = ref(false)
const showInvalidPassword = ref(false)

async function login() {
  try {
    const payload = { email: email.value, password: password.value }
    const response = await axios.post(`${API_URL}/auth/login`, payload)
    const data = await response.data

    localStorage.setItem("token", data.data.user.token)
    console.log(data)
    router.push("/Groups")
  } catch (error) {
    console.log(error.response.data)
    const errorMsg = error.response.data.message

    if (errorMsg === "NotRegistered") return (showInvalidEmail.value = true)
    if (errorMsg === "InvalidPassword") return (showInvalidPassword.value = true)
  }
}

watch([email, password], () => {
  showInvalidEmail.value = false
  showInvalidPassword.value = false
})
</script>

<template>
  <div class="main-auth-bg">
    <div class="main-block">
      <span>
        <p>Email</p>
        <input type="text" placeholder="Enter your email..." v-model="email" />
        <p class="error" v-if="showInvalidEmail">Invalid Email</p>
      </span>
      <span>
        <p>Password</p>
        <input type="text" placeholder="Enter your password..." v-model="password" />
        <p class="error" v-if="showInvalidPassword">Invalid Password</p>
      </span>
      <button v-wave @click="login">LOGIN</button>
    </div>
  </div>
</template>

<style scoped>
.main-auth-bg {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--g-white);
}

.main-block {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

span,
input {
  width: 100%;
}

p {
  color: var(--d-grey);
}

span input {
  padding: 8px 10px;
  background-color: var(--g-white);
  border: 2px solid var(--d-grey-o-4);
  margin: 2px;
  color: var(--d-grey);
  border-radius: 2px;
}

input:focus {
  outline: none;
  border: 2px solid var(--l-purple-o-6);
}

button {
  font-size: 14px;
  padding: 14px;
  margin-top: 16px;
  cursor: pointer;
  background-color: var(--l-purple-o-8);
  border: 1px solid var(--l-purple);
  border-radius: 4px;
  color: var(--pur-white-o-8);
  transition: 0.1s ease;
}

button:hover {
  background-color: var(--l-purple);
}

p.error {
  color: rgb(210, 12, 12);
}
</style>
