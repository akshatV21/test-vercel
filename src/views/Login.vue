<script setup></script>

<template>
  <div class="main-auth-bg">
    <div class="main-block">
      <span>
        <p>Email</p>
        <input type="text" placeholder="Enter your email..." />
      </span>
      <span>
        <p>Password</p>
        <input type="text" placeholder="Enter your password..." />
      </span>
      <button v-wave>LOGIN</button>
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
