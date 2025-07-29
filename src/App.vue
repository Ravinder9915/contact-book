<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
    <h1>Contact Book</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Contact</router-link>
    </nav>
    </header>
    <main>
    <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
