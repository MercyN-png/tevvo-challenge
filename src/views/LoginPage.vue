<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <p v-if="error" style="color: red">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleLogin() {
      // Hardcoded email/password for mock login
      if (this.email === "user@test.com" && this.password === "123456") {
        localStorage.setItem("token", "mock-jwt-token");
        this.$router.push("/home");
      } else {
        this.error = "Invalid credentials";
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 300px;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
</style>
