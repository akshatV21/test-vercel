<script setup>
import { ref } from "vue"
import axios from "axios"
import { API_URL } from "../main"

const name = ref("")
const email = ref("")
const password = ref("")

async function register() {
  const payload = { name: name.value, email: email.value, password: password.value }
  const response = await axios.post(`${API_URL}/auth/register`, payload, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  })

  const data = await response.data

  if (!data.success) {
    alert(data.message)
    console.log(data.message)
    return
  }

  console.log(data)
}
</script>

<template>
  <div class="main-auth-bg">
    <div class="main-block">
      <span>
        <p>Name</p>
        <input type="text" placeholder="Enter your name..." v-model="name" />
      </span>
      <span>
        <p>Email</p>
        <input type="text" placeholder="Enter your email..." v-model="email" />
      </span>
      <span>
        <p>Password</p>
        <input type="text" placeholder="Enter your password..." v-model="password" />
      </span>
      <button v-wave @click="register">REGISTER</button>
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
  margin-top: 2px;
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
</style>
