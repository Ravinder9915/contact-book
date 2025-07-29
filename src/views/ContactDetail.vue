<template>
  <div class="detail-container">
    <h2>Contact Details</h2>

    <div v-if="contact" class="detail-card">
      <p><strong>Name:</strong> {{ contact.firstName }} {{ contact.lastName }}</p>
      <p><strong>Phone:</strong> {{ contact.phone }}</p>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p><strong>Company:</strong> {{ contact.company }}</p>
      <p><strong>Address:</strong> {{ contact.address }}</p>
    </div>

    <p v-else>Loading contact...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getContactById } from '../utils/localstorage'

export default {
  setup() {
    const route = useRoute()
    const contact = ref(null)

    onMounted(() => {
      const id = route.params.id
      if (id) {
        contact.value = getContactById(id)
      }
    })

    return { contact }
  }
}
</script>

<style scoped>
.detail-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}

.detail-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  line-height: 1.6;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.detail-card p {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
